'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');
    const [error, setError] = useState(false);

    useEffect(() => {
        const run = async () => {
            try {
                const res = await fetch(`/api/auth/callback?${searchParams.toString()}`);
                const json = await res.json();

                if (json.success) {
                    router.push(json.origin ? `${json.origin}` : '/');
                } else {
                    router.push('/');
                }
            } catch (err) {
                console.error("Auth callback error:", err);
                setError(true);
                router.push('/error');
            }
        };

        run();
    }, [origin, router, searchParams]);

    return (
        <div className='w-full min-h-screen mt-24 flex justify-center'>
            <div className='flex flex-col items-center gap-2'>
                <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
                <h3 className='font-semibold text-xl'>
                    Setting up your account...
                </h3>
                <p>You will be redirected automatically.</p>
            </div>
        </div>
    );
};

export default Page;