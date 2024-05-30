import { NextRequest, NextResponse } from 'next/server';
import Validation from './app/utils/Validation/Validation';
import http from './app/utils/http';
import verifyAPI from './app/restfulAPI/verifyAPI';
export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/register')) {
        const val = req.cookies.get('asdf_')?.value;
        const res: { phoneEmail: string; id: string } | undefined = val ? JSON.parse(val) : undefined;
        if (res && Validation.validUUID(res.id)) {
            const code = req.nextUrl.pathname.split('/register/')[1];
            if (code && Validation.validUUID(code)) {
                const check = await verifyAPI.verifyOTP({ ...res, code, status: 'checkValid' });
                console.log(check, 'check');
                if (check === true) {
                    return NextResponse.next();
                }
            }
        }
        // if (code) return NextResponse.next();
        return NextResponse.redirect(new URL('/verify/register', req.url));
    }
    if (req.nextUrl.pathname.startsWith('/verify')) {
    }

    // return NextResponse.next();
}
export const config = {
    matcher: ['/verify', '/register/:path*'],
};
