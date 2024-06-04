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
    const handleMouseOver = (e: any) => {
        e.stopPropagation();
        e.currentTarget.setAttribute('style', 'z-index: 5');
        const opacityDiv = document.querySelector('.opacityDiv');
        if (opacityDiv) opacityDiv.setAttribute('style', 'display: block');
    };
    const handleMouseOut = (e: any) => {
        e.stopPropagation();
        e.currentTarget.setAttribute('style', 'z-index: 0');
        const opacityDiv = document.querySelector('.opacityDiv');
        if (opacityDiv) opacityDiv.setAttribute('style', 'display: none');
    };
    return (
        <div className="flex flex-wrap" m-1 mx-2>
            <Div
                className="parentsRate1 w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme6} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                    <Div className="w-full flex my-1" $css="">
                        <div className=" text-[10px] mr-2 py-[2px] px-1 bg-[#3b3b3b] cursor-pointer">Chương trình</div>
                    </Div>
                    <div className="flex items-center justify-between">
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>{' '}
            <Div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme3} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>{' '}
            <Div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme7} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>{' '}
            <Div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme9} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>{' '}
            <Div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme5} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>
            <Div
                className="parentsRate1 w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme6} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                    <Div className="w-full flex my-1" $css="">
                        <div className=" text-[10px] mr-2 py-[2px] px-1 bg-[#3b3b3b] cursor-pointer">Chương trình</div>
                    </Div>
                    <div className="flex items-center justify-between">
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>{' '}
            <Div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme3} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>{' '}
            <Div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme7} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>{' '}
            <Div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme9} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>{' '}
            <Div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                className="w-[171px] shadow-[0_0_4px_#0a0a0a] bg-[#2b2b2bbf] hover:shadow-[0_0_5px_cornflowerblue] rounded-[5px] cursor-pointer m-1 mx-2"
            >
                <Div className="w-full h-[195px] relative" $css="&:hover{.rate{display:flex}}">
                    <Image src={Images.theme5} alt="aaa" />
                    <Div
                        className="rate hidden w-[52%]  absolute top-2 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%); animation: moveRate1 0.3s linear; @keyframes moveRate1{ 0%{opacity: 0.5} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-10 left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css={`background-color: rgb(76 76 76 / 65%); animation: moveRate2 0.6s linear; @keyframes moveRate2{ 0%{opacity: 0} 100%{opacity: 1} }`}
                    >
                        Suitable + Cheap
                    </Div>
                    <Div
                        className="rate hidden w-[52%]  absolute top-[72px] left-[-28px] p-[2px]  items-center justify-center text-[10px] rounded-[2px]"
                        $css="background-color: rgb(76 76 76 / 65%);animation: moveRate3 0.9s linear; @keyframes moveRate3{ 0%{opacity: 0} 100%{opacity: 1} }"
                    >
                        Luxury + Quality
                    </Div>
                </Div>
                <Div className="px-2 py-2 relative" $css=".css-1c99szj-MuiRating-icon{color: rgb(190 190 190 / 83%);}">
                    <H3 className="text-[11px] pl-[1px] mb-2" $css="display: -webkit-box; -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">
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
                        <p className="text-[11px] " style={{ color: 'rgb(182 234 255 / 72%)' }}>
                            $1000.0
                        </p>
                        <p className="text-[10px] opacity-[0.6]">Đã bán 10k</p>
                    </div>
                </Div>
            </Div>
            <Div className="hidden fixed top-0 left-0 w-full h-full bg-[#00000036] opacityDiv "></Div>
        </div>
    );
};

export default FavoriteList;
