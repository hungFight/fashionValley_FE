import { NextRequest, NextResponse } from "next/server";
export function middleware(req: NextRequest) {
  console.log(req.nextUrl.pathname.startsWith("/register"));
  // if (req.nextUrl.pathname.startsWith("/register")) {
  //   const code = req.cookies.get("code1313_1313");
  //   if (code) return NextResponse.next();
  //   return NextResponse.redirect(new URL("/verify/register", req.url));
  // }
  // if (req.nextUrl.pathname.startsWith("/verify")) {
  // }
  return NextResponse.next();
}
export const config = {
  // matcher: ["/verify", "/register"],
};
