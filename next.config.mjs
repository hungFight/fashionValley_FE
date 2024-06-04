/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_FASHION: process.env.SERVER_FASHION
    }, experimental: {
        forceSwcTransforms: true,
    }, images: {
        domains: ['richardscojewellery.com'],
    },
    compiler: {
        styledComponents: true
    }
};

export default nextConfig;
