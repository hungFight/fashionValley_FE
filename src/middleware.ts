import { NextRequest, NextResponse } from 'next/server';
import Validation from './app/utils/Validation/Validation';
import http from './app/utils/http';
import verifyAPI from './app/restfulAPI/verifyAPI';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from './app/api/auth/[...nextauth]/route';
export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/login')) {
        // const data: { user: { name: string; email: string; image: string } } | null = await getServerSession(authOptions);
        if (req.cookies.get('next-auth.session-token')) return NextResponse.redirect(new URL('/', req.url));
        else return NextResponse.next();
    } else if (req.nextUrl.pathname.startsWith('/register') || req.nextUrl.pathname.startsWith('/reset')) {
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
        if (register) return NextResponse.redirect(new URL('/verify/register', req.url));
        return NextResponse.rewrite(new URL('/verify/reset', req.url));
    } else {
        console.log('come here');

        if (req.cookies.get('next-auth.session-token')) return NextResponse.next();
        return NextResponse.rewrite(new URL('/login', req.url));
    }
}
export const config = {
    matcher: ['/register/:path*', '/reset/:path*', '/login'],
};
