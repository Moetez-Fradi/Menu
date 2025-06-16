import { db } from '@/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const origin = searchParams.get('origin') || '/';

    console.log(origin, 'origin in /auth/callback');

    const {getUser} = await getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id || !user.email) {
        return NextResponse.json({ success: true, origin : '/api/auth/login' });
    }
    try { 
        const dbUser = await db.user.findFirst(
        {
            where: { id: user.id }
        }
        );

        if (!dbUser) {
            await db.user.create({
                data: {
                    id: user.id,
                    email: user.email,
                }
            });
        }
    } catch (error) {
        console.error('there is a Database error in /auth/callback :', error);
        return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
    }

    return NextResponse.json({ success: true, origin : origin });
}