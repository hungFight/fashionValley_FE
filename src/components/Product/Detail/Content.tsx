/* eslint-disable @next/next/no-img-element */
'use client';
import React, { ReactElement, useState } from 'react';
import { Box, Checkbox, Radio, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Div, H3, H3BOX, P } from '@/utils/styleComponent';
import { PiChecksThin } from 'react-icons/pi';
import { PropsCateOptionDetail, PropsProductDetail } from '@/app/product/detail/[id]/page';
import { IoMdHeart } from 'react-icons/io';
import { FcShipped } from 'react-icons/fc';
import { MdOutlineExpandMore } from 'react-icons/md';
import { NumericFormat } from 'react-number-format';
import { FaCheck } from 'react-icons/fa6';
import { IconType } from 'react-icons';
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
const deliveryMethods = [
    { id: '1', name: 'Standard' },
    { id: '2', name: 'Express' },
    { id: '3', name: 'Economy' },
];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Content: React.FC<{ data: PropsProductDetail; setImageColor: React.Dispatch<React.SetStateAction<PropsCateOptionDetail>> }> = ({ data, setImageColor }) => {
    const [delivery, setDelivery] = React.useState<{ id: string; name: string }>(deliveryMethods[0]);

    //cateOption
    const [cateOption, setCateOption] = useState<{ icon: ReactElement; price: number; data: { id: string; name: string; src?: string; selectId: string }[] }>({
        icon: (
            <div className="absolute bottom-0 right-0">
                {' '}
                <FaCheck />
            </div>
        ),
        data: [],
        price: data.currency.price,
    });
    const onSelected = (id: string, name: string, selectedId: string, newPrice?: number) => {
        let checkId = false;
        const rr = cateOption.data.map((r) => {
            if (r.id === id) {
                if (r.selectId !== selectedId) r.selectId = selectedId;
                checkId = true;
            }
            return r;
        });
        if (!checkId) setCateOption((pre) => ({ ...pre, price: newPrice ?? pre.price, data: [...pre.data, { id, name: name, selectId: selectedId }] }));
        else setCateOption((pre) => ({ ...pre, price: newPrice ?? pre.price, data: rr }));
    };
    const isSelected = (id: string, name: string, selectedId: string) => cateOption.data.some((r) => r.id === id && name === r.name && r.selectId === selectedId);
    const NumberFormatter = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

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
                <div>
                    <H3 className="text-[13px] opacity-[0.7]">Category</H3>
                    <div className="p-3 py-5 bg-[#2c2c2c99] mb-5">
                        {data.cateOption.map((a) => (
                            <div key={a.id} className="flex items-start  mb-4">
                                <H3 className="w-fit text-[12px] py-[2px] px-1" $css="">
                                    {a.name}:
                                </H3>
                                <div className="flex flex-wrap items-center">
                                    {a.data.map((c) => {
                                        if (c.src)
                                            return (
                                                <Div
                                                    key={c.id}
                                                    className="text-[11px] flex mb-2 items-center relative shadow-[0_0_2px_#b3b3b3] px-[6px] py-1 mx-1 cursor-pointer opacity-90 hover:border hover:border-[#0f8d91]"
                                                    $css={`${isSelected(a.id, a.name, c.id) ? 'border: 1px solid #0f8d91; color: #7bd0d2' : ''}`}
                                                    onClick={() => onSelected(a.id, a.name, c.id, c.price)}
                                                >
                                                    <div className="w-5 h-5 mr-1">
                                                        <img src={c.src} alt={c.content} />
                                                    </div>
                                                    <p>{c.content}</p>
                                                    {isSelected(a.id, a.name, c.id) && cateOption.icon}
                                                </Div>
                                            );
                                        return (
                                            <P
                                                key={c.id}
                                                className="text-[11px] relative shadow-[0_0_2px_#b3b3b3] px-[6px] py-1 mx-1 cursor-pointer opacity-90 hover:border hover:border-[#0f8d91]"
                                                $css={`${isSelected(a.id, a.name, c.id) ? 'border: 1px solid #0f8d91; color: #7bd0d2' : ''}`}
                                                onClick={() => onSelected(a.id, a.name, c.id, c.price)}
                                            >
                                                {c.content}
                                                {isSelected(a.id, a.name, c.id) && cateOption.icon}
                                            </P>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-3">
                    <H3 className="text-[13px] opacity-[0.7] flex items-center">
                        Delivery methods
                        <div className="text-[20px] ml-1">
                            <FcShipped />
                        </div>
                    </H3>
                    <div className="p-3 bg-[#2c2c2c99]">
                        <div>
                            {deliveryMethods.map((dv) => (
                                <Div
                                    key={dv.id}
                                    className="flex w-full items-center cursor-pointer"
                                    onClick={() => setDelivery(dv)}
                                    $css=".css-vqmohf-MuiButtonBase-root-MuiRadio-root {color: rgb(251 251 251 / 80%)}.css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked {color: #e64d4d;} svg {font-size: 15px}"
                                >
                                    <H3 className="text-[13px] mr-">{dv.name}</H3> <Radio checked={delivery.id === dv.id} value={dv.id} name="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
                                </Div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <H3 className="text-[13px] opacity-[0.7]">Currency & Preferential program</H3>
                    <div className="p-3 bg-[#2c2c2c99]">
                        <div className="flex items-center">
                            <Div className="w-fit flex items-center">
                                <H3 className="w-fit text-[12px] px-1" $css="">
                                    Product cost {NumberFormatter(cateOption.price)}
                                </H3>
                                <p className="mx-1">+</p>
                                <H3 className="w-fit text-[12px] px-1" $css="">
                                    Delivery cost 30.000
                                </H3>
                            </Div>
                            <p className="mx-1">=</p>
                            <P className="text-sm " $css="text-decoration: line-through;">
                                {NumberFormatter(cateOption.price + 30000)}
                                {data.currency.name}
                            </P>
                        </div>
                        <div className="my-2 flex items-center">
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
                            <Div className="w-[57%] flex items-center bg-[#474747] px-2 cursor-pointer relative" $css="&:hover{.showVouchers{display:flex}}">
                                <Div
                                    className="showVouchers hidden items-center flex-wrap absolute bottom-[35px] left-0 bg-[#2d2d2d] shadow-[0_0_5px_black] p-1 "
                                    $css=".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{color: #d0d0d0} .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate{color: #4492df  !important}"
                                >
                                    <div className="flex items-center ">
                                        <Checkbox {...label} defaultChecked />
                                        <p className="text-[13px]">
                                            reduce 15{data.currency.name} when buy anything greater than 100{data.currency.name}
                                        </p>
                                    </div>{' '}
                                    <div className="flex items-center ">
                                        <Checkbox {...label} defaultChecked />
                                        <p className="text-[13px]">
                                            reduce 15{data.currency.name} when buy anything greater than 100{data.currency.name}
                                        </p>
                                    </div>{' '}
                                    <div className="flex items-center ">
                                        <Checkbox {...label} defaultChecked />
                                        <p className="text-[13px]">
                                            reduce 15{data.currency.name} when buy anything greater than 100{data.currency.name}
                                        </p>
                                    </div>
                                </Div>
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
                        <div>
                            <H3>Total: </H3>
                        </div>
                    </div>
                </div>
            </Div>
        </div>
    );
};

export default Content;
