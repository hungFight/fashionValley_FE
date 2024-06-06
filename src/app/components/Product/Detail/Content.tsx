'use client';
import React from 'react';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Div, H3, H3BOX, P } from '@/app/utils/styleComponent';
import { PiChecksThin } from 'react-icons/pi';
import { PropsProductDetail } from '@/app/product/detail/[id]/page';
import { IoMdHeart } from 'react-icons/io';
import { FcShipped } from 'react-icons/fc';
import { MdOutlineExpandMore } from 'react-icons/md';
const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
const Content: React.FC<{ data: PropsProductDetail }> = ({ data }) => {
    return (
        <div>
            <H3 className="text-sm">{data.name}</H3>
            <Div className="flex items-center my-3 " $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                <p className="text-sm mr-1">4.5</p>{' '}
                <Rating name="half-rating" size="small" readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} precision={0.5} getLabelText={getLabelText} value={4.5} />{' '}
                <Box sx={{ ml: 2, mt: '2px', fontSize: '12px' }}>{labels[4.5]}</Box>
                <p className="text-[11px] mx-4 opacity-[0.7]">|</p>
                <div className="flex items-center">
                    <p className="text-[12px]">4.5k Sold</p>
                    <p className="text-[11px] mx-4 opacity-[0.6]">|</p>
                    <div className="flex items-center">
                        <p className="text-[12px]">4.4k Successful delivery</p>
                        <div className="text-[18px] mr-[1px] text-[#a9faa9e0]">
                            <PiChecksThin />
                        </div>
                    </div>
                    <p className="text-[11px] mx-4 opacity-[0.6]">|</p>
                    <div className="flex items-center">
                        <p className="text-[12px]">3k Favorite</p>
                        <div className="text-base mr-[1px] text-[#f96363e0]">
                            <IoMdHeart />
                        </div>
                    </div>
                </div>
            </Div>
            <div className="w-[250px] h-[1px] mx-auto mb-3 mt-5 bg-[#94949499]"></div>
            <Div className="">
                <H3 className="text-[13px] opacity-[0.7]">Currency & Preferential program</H3>
                <div className="p-3 bg-[#2c2c2c99]">
                    <P className="text-sm " $css="text-decoration: line-through;">
                        {data.currency.price}
                        {data.currency.name}
                    </P>
                    <div className="my-1 flex items-center">
                        <H3 className="w-fit text-[12px] py-2 px-2" $css="background-color: rgb(180 42 42 / 80%);">
                            Discount: 30%
                        </H3>
                        <p className="mx-1">+</p>
                        <Div className="w-fit flex items-center bg-[#515151c7] px-2">
                            <H3 className="w-fit text-[12px] py-2 px-1" $css="">
                                Free ship
                            </H3>
                            <div className="text-[20px]">
                                <FcShipped />
                            </div>
                        </Div>{' '}
                        <p className="mx-1">+</p>
                        <Div className="w-[57%] flex items-center bg-[#515151c7] px-2 cursor-pointer">
                            <H3 className="w-fit text-[12px] py-2 px-1" $css="">
                                Voucher
                            </H3>
                            <div className="rotate-180">
                                <MdOutlineExpandMore />
                            </div>
                            <H3BOX className="w-fit text-[12px] py-1 px-1" $css="">
                                reduce 15{data.currency.name} when buy anything greater than 100{data.currency.name}
                            </H3BOX>
                            <p className="mx-1 text-[12px]">+3</p>
                        </Div>
                    </div>
                </div>
            </Div>
        </div>
    );
};

export default Content;
