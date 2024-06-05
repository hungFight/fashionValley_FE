'use client';
import React from 'react';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Div, H3 } from '@/app/utils/styleComponent';
import { PiChecksThin } from 'react-icons/pi';
import { PropsProductDetail } from '@/app/product/detail/[id]/page';
import { IoMdHeart } from 'react-icons/io';
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
                <p className="text-[11px] mx-4 opacity-[0.6]">|</p>
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
                    <p className="text-sm">
                        {data.currency.icon}
                        {data.currency.price}
                    </p>
                </div>
            </Div>
        </div>
    );
};

export default Content;
