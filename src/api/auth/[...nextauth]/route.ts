import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
console.log(process.env.FACEBOOK_ID, 'process.env.FACEBOOK_ID');

export const authOptions = {
    pages: {
        signIn: '/auth/sign-in',
    },
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: `${process.env.FACEBOOK_ID}`,
            clientSecret: `${process.env.FACEBOOK_SECRET_KEY}`,
        }),
        // ...add more providers here
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);
console.log('process.env.FACEBOOK_ID ---- 1111', process.env.NEXTAUTH_SECRET);

export { handler as GET, handler as POST };
