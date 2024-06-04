import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthSessionProvider from './api/auth/AuthSessionProvider';
import Header from './components/Header';
import StyledComponentsRegistry from '../../lib/registry';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Drawer from './components/Drawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Generated by create next app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const data: { user: { name: string; email: string; image: string } } | null = await getServerSession(authOptions);
    console.log(data, 'data');

    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthSessionProvider>
                    <StyledComponentsRegistry>
                        <div className="w-full relative min-[1920px]:w-[1920px] min-h-[100vh] bg-[#1e1e1e] text-[#dcdcdc] pt-[55px]">
                            {data?.user && <Header user={data.user} />}
                            <Drawer />
                            <div className="pl-[51px] bg-[#1d1d1d]">{children}</div>
                        </div>
                    </StyledComponentsRegistry>
                </AuthSessionProvider>
            </body>
        </html>
    );
}
