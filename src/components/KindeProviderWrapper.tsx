"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export default function KindeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <KindeProvider
      clientId={process.env.NEXT_PUBLIC_KINDE_CLIENT_ID!}
      redirectUri={process.env.NEXT_PUBLIC_KINDE_REDIRECT_URI!}
    >
      {children}
    </KindeProvider>
  );
}
