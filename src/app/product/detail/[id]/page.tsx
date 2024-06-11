import { dataDetail } from '@/app/page';
import Index from '@/components/Product/Detail/Index';
import { Links } from '@/utils/styleComponent';
import { Avatar } from '@mui/material';
import React from 'react';
import { FcNext } from 'react-icons/fc';

export interface PropsImageDetail {
    id: string;
    src: string;
    thumb: string;
    subHtml: string;
}
export interface PropsCateOptionDetail {
    id: string;
    name: string;
    newPrice: boolean;
    data: { id: string; content: string; src?: string; price?: number }[];
}
export interface PropsProductDetail {
    id: string;
    name: string;
    promotion: any;
    rating: string[];
    images: PropsImageDetail[];
    currency: { id: string; name: string; price: number; icon: string };
    saleOut: number;
    cateOption: PropsCateOptionDetail[];
}
const index = [
    { id: 1, name: ' FashionValley', url: '/' },
    {
        id: 2,
        name: 'Hung nguyen',
        url: '/shop/123',
        avatar: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=472358401944090&height=50&width=50&ext=1719884165&hash=AbZOlU3i6BMAzNgd6Tx_fcYw',
    },
    { id: 3, name: 'Clothes', url: '/clothes' },
    { id: 4, name: 'Dress', url: '/clothes/dress' },
];
const page: React.FC<{ params: { id: string } }> = ({ params }) => {
    return (
        <div className="flex w-full flex-wrap p-2">
            <div className="w-full flex items-center y-2 mb-5 mt-3">
                {index.map((d, ind) => (
                    <div key={d.id} className="flex items-center opacity-[0.6] hover:opacity-100">
                        <Links href={d.url} className="text-[13px] flex items-center">
                            {d?.avatar && <Avatar src={d.avatar} alt={d.name} sx={{ width: '25px', height: '25px', mr: 1 }} />}
                            {d.name}
                        </Links>
                        {ind < index.length && (
                            <div className="text-[12px] mx-2 opacity-[0.6]">
                                <FcNext />
                            </div>
                        )}
                    </div>
                ))}
                <p className="text-[13px] opacity-[0.6]">{dataDetail[2].name}</p>
            </div>
            <Index data={dataDetail[2].cateOption} />
            <div></div>
        </div>
    );
};

export default page;
