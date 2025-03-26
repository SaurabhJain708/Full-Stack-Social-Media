import { NextRequest, NextResponse } from "next/server";
import { auth } from "./app/api/(auth)/[...NextAuth]/route";


export async function middleware(req:NextRequest) {
    const session = auth()
    if(!session){
        return NextResponse.redirect(
            new URL(`/sign-in?callbackUrl=${encodeURIComponent(req.url)}`, req.url)
          );
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/v1/:path*","/api/v1/:path*"],  
};