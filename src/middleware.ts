import { NextRequest, NextResponse } from 'next/server';
import Validation from './app/utils/Validation/Validation';
import http from './app/utils/http';
import verifyAPI from './app/restfulAPI/verifyAPI';
import { redirect } from 'next/navigation';
export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/register') || req.nextUrl.pathname.startsWith('/reset')) {
        // return NextResponse.rewrite(new URL('/reset/754', req.url));
        const val = req.cookies.get('asdf_')?.value;
        const res: { phoneEmail: string; id: string; key?: string } | undefined = val ? JSON.parse(val) : undefined;
        const register = req.nextUrl.pathname.split('/register/')[1];
        const reset = req.nextUrl.pathname.split('/reset')[1];
        if (res?.key && Validation.validUUID(res.key)) {
            if (register) return NextResponse.rewrite('/register/' + res.key);
            else return NextResponse.rewrite(new URL('/reset/' + res.key, req.url));
        }
        if (res && Validation.validUUID(res.id)) {
            const code = register ?? reset;
            if (code && Validation.validUUID(code)) {
                const check = await verifyAPI.verifyOTP({ ...res, code, status: 'checkValid' });
                console.log(check, 'check');
                if (check === true) return NextResponse.next();
            }
        }
        // if (code) return NextResponse.next();
        if (register) return NextResponse.redirect(new URL('/verify/register', req.url));
        return NextResponse.redirect(new URL('/verify/reset', req.url));
    }
    if (req.nextUrl.pathname.startsWith('/verify')) {
    }

    // return NextResponse.next();
}
export const config = {
    matcher: ['/verify', '/register/:path*', '/reset/:path*'],
};
