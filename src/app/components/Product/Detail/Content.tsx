import { PropsProductDetail } from '@/app/product/detail/[id]/page';
import { H3 } from '@/app/utils/styleComponent';
import React from 'react';

const Content: React.FC<{ data: PropsProductDetail }> = ({ data }) => {
    return (
        <div>
            <H3 className="text-sm">{data.name}</H3>
        </div>
    );
};

export default Content;
