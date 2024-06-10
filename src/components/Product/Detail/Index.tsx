'use client';
import React, { useState } from 'react';
import Content from '@/components/Product/Detail/Content';
import Picture from '@/components/Product/Detail/Picture';
import { dataDetail } from '@/app/page';
import { PropsCateOptionDetail, PropsImageDetail } from '@/app/product/detail/[id]/page';
const Index: React.FC<{ data: PropsCateOptionDetail[] }> = ({ data }) => {
    const [imageColor, setImageColor] = useState<PropsCateOptionDetail[]>(data);
    return (
        <>
            <div className="w-[500px]">
                <Picture data={dataDetail[2].images} imageColor={imageColor} setImageColor={setImageColor} />
            </div>
            <div className="w-[579px] mx-4">
                <Content data={dataDetail[2]} setImageColor={setImageColor} />
            </div>
        </>
    );
};

export default Index;
