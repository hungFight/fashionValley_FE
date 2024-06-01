import React from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { Avatar } from '@mui/material';
import { Div } from '../utils/styleComponent';
import Images from '../assets/images';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
const Header: React.FC<{ user: { name: string; email: string; image: string } }> = async ({ user }) => {
    return (
        <Div
            className="w-full h-[55px] flex justify-between items-center px-5 fixed top-0 left-1/2 translate-x-[-50%] min-[1920px]:w-[1920px]"
            $css={`
                    background-image: linear-gradient(1deg, #3b3b3b, #121212);
                `}
        >
            <div className="flex items-center">
                <div className="w-[40px] h-[40px] ">
                    <Image src={Images.logo} alt="Fashion Valley" className="rounded-[50%] " />
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
                <h5 className="text-sm">{user.name}</h5>
                <Avatar alt={user.name} src={user.image} sx={{ width: 35, height: 35, ml: 1 }} className="cursor-pointer" />
            </div>
        </Div>
    );
};

export default Header;
