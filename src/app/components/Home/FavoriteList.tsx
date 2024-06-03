'use client';
import Images from '@/app/assets/images';
import { Div, H3 } from '@/app/utils/styleComponent';
import { Box, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
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
const FavoriteList = () => {
    const [value, setValue] = React.useState<number | null>(0);
    return (
        <div>
            <Div className="w-[200px] shadow-[0_0_4px_#0a0a0a] cursor-pointer" $css="&:hover{.rate{display:flex}}">
                <div className="w-full h-[250px] relative">
                    <Image src={Images.theme6} alt="aaa" />
                    <Div className="rate hidden w-[52%] h-4 absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[12px] rounded-[2px]" $css="background-color: rgb(76 76 76)">
                        Luxury + Quality
                    </Div>
                </div>
                <Div className="px-2 py-3 pt-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[12px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
                        Black Satin Princess Off The Shoulder Ball Gown Quinceanera Dresses Beaded Applique 3D Flower With Cape Celebrity Party Gowns YD
                    </H3>{' '}
                    {/* <div className="flex items-center">
                        <Rating
                            name="half-rating"
                            size="small"
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            precision={0.5}
                            getLabelText={getLabelText}
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />{' '}
                        {value !== null && <Box sx={{ ml: 2, fontSize: '12px' }}>{labels[value]}</Box>}
                    </div> */}
                    <div className="w-full h-5"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-[11px]">$1000.0</p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>
        </div>
    );
};

export default FavoriteList;
