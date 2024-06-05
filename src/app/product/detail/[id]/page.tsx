import Picture from '@/app/components/Product/Detail/Picture';
import React from 'react';

const page: React.FC<{ params: { id: string } }> = ({ params }) => {
    return (
        <div className="flex w-full">
            <div className="w-[500px] p-2">
                <Picture />
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default page;
