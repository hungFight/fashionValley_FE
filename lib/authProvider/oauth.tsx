import FacebookProvider from 'next-auth/providers/facebook';
export const facebook = FacebookProvider({
    clientId: `${process.env.FACEBOOK_ID}`,
    clientSecret: `${process.env.FACEBOOK_SECRET_KEY}`,
});
