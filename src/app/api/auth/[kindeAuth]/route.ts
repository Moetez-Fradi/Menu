import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import type { NextRequest } from "next/server";

export const GET = handleAuth();
export const POST = handleAuth();