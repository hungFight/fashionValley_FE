import Images from '@/assets/images';
import Image from 'next/image';
import React from 'react';
import { FcShipped } from 'react-icons/fc';
import { BiSolidDiscount } from 'react-icons/bi';
const items = [
    { id: 1, url: Images.voucher, name: 'Voucher' },
    { id: 2, url: Images.service, name: 'Service' },
];
const cates = [
    { id: 1, icon: <BiSolidDiscount />, name: 'Discount' },
    { id: 2, icon: <FcShipped />, name: 'Free ship' },
];
const TabOne = () => {
    return (
        <div className="flex items-center flex-wrap p-[25px] bg-[#272727] rounded-[5px]">
            <div className="mb-5 flex items-center">
                {items.map((v) => (
                    <div key={v.id} className="w-fit mr-3 py-[2px] px-2 flex items-center shadow-[0px_0px_1px] rounded-[10px] hover:bg-[#3f3f3f] cursor-pointer">
                        <div className="w-7 h-7">
                            <Image src={v.url} alt={v.name} />
                        </div>
                        <p className="text-[13px]">{v.name}</p>
                    </div>
                ))}
            </div>
            <div className="w-full">
                <div className="w-full flex my-3 items-center">
                    <p className="text-[12px]">Vouchers:</p>
                    <div className=" flex">
                        {cates.map((c) => (
                            <div key={c.id} className="w-fit mx-2 py-[2px] px-2 flex items-center shadow-[0px_0px_1px] rounded-[10px] hover:bg-[#3f3f3f] cursor-pointer">
                                <div className="text-[20px]">{c.icon}</div>
                                <p className="text-[12px]">{c.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {[0, 1, 2, 3].map((d) => (
                        <div className="w-full flex mb-2" key={d}>
                            <div className="w-[100px] ">
                                <svg width="100%" height="100%" viewBox="0 0 106 106" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="GZUaOQ">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 2a2 2 0 0 1 2-2h106v106H2a2 2 0 0 1-2-2v-3a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 1 0 0-6v-4a3 3 0 0 0 0-6V2Z"
                                        fill="#26AA99"
                                    ></path>
                                    <path
                                        clip-rule="evenodd"
                                        d="M.25 2.25a2 2 0 0 1 2-2M0 101.25a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m0-3.5a3 3 0 1 0 0-6.5m2.25 101a2 2 0 0 1-2-2"
                                        stroke="#000"
                                        opacity="0.15"
                                        strokeWidth="1"
                                    ></path>
                                    <path
                                        clipRule="evenodd"
                                        d="M2 0.25h108m0 105.5H2m-1.75-1.75v-3m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6v-4m0-6V2Z"
                                        opacity="0.15"
                                        stroke="#000"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path d="M106 .5v105Z" stroke="#000" strokeOpacity="0.15" strokeWidth="1.5"></path>
                                </svg>
                            </div>
                            <div className="w-[300px] shadow-[0px_0px_1px] rounded-tr-[5px] rounded-br-[5px]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabOne;
