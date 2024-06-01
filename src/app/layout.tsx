import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './utils/registry';
import { Div } from './utils/styleComponent';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { Avatar } from '@mui/material';
import Images from './assets/images';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <div className="w-full relative min-[1920px]:w-[1920px] min-h-[100vh] bg-[#1e1e1e]">
                        <Div
                            className="w-full h-[55px] flex justify-between items-center px-5 fixed top-0 left-1/2 translate-x-[-50%] min-[1920px]:w-[1920px]"
                            css={`
                                background-image: linear-gradient(1deg, #3b3b3b, #121212);
                            `}
                        >
                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] ">
                                    <Image src={Images.logo} alt="Fashion Valley" className="rounded-[50%] shadow-[0px_0px_10px_#b4b4b4f0]" />
                                </div>
                                <p className="text-sm font-medium ml-2">Fashion Valley</p>
                            </div>
                            <div className="w-[400px] relative">
                                <input type="text" placeholder="Search your product" className="border-0 outline-none p-2 text-[12px] w-full border-b-[1px] border-[#898989] bg-transparent" />
                                <div className="absolute right-3 top-2 text-lg">
                                    <CiSearch />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h5 className="text-sm">Nguyễn Trọng Hùng</h5>
                                <Avatar alt="Nguyễn Trọng Hùng" src={Images.theme5.src} sx={{ width: 35, height: 35, ml: 1 }} className="cursor-pointer" />
                            </div>
                        </Div>
                        <Div className="w-1/2 h-[30px] flex justify-between items-center px-5 fixed top-[55px] left-1/2 translate-x-[-50%] min-[1920px]:w-[1920px]" css={``}>
                            <div>Home</div>
                        </Div>
                    </div>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
