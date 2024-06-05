import TabOne from './components/Home/TabOne';
import FavoriteList from './components/Home/FavoriteList';
import { H3 } from './utils/styleComponent';
export const dataDetail = [
    {
        id: '1',
        name: 'Luxury Diamond Necklace',
        images: [{ id: '1', url: 'https://richardscojewellery.com/cdn/shop/products/inCollage_20210615_212612020_1660x.jpg?v=1624115587' }],
        currency: { id: '1', name: 'VND', icon: 'đ', price: 10.0 },
        promotion: '',
        rating: ['Luxury + standard'],
        saleOut: 10,
    },
    {
        id: '2',
        name: 'Soild 18K White Gold Necklace 4.5 Carat Natural Diamond Necklace Luxury Wedding Party Fine Jewelry Birthday Gift',
        images: [
            { id: '1', url: 'https://ae01.alicdn.com/kf/Sae17119170cc4389adae45e094324ce2v/Soild-18K-White-Gold-Necklace-4-5-Carat-Natural-Diamond-Necklace-Luxury-Wedding-Party-Fine-Jewelry.jpg' },
        ],
        currency: { id: '1', name: 'VND', icon: 'đ', price: 149.763 },
        promotion: '',
        rating: ['Luxury + Quality', 'Enduring'],
        saleOut: 10,
    },
    {
        id: '3',
        name: 'VÁY ĐẦM LIỀN THÂN DỰ TIỆC NỮ SHTYRE HÀNG MÙA HÈ THỜI TRANG NỮ CHẤT LIỆU G05 SẢN PHẨM MỚI',
        images: [
            { id: '1', url: 'https://cbu01.alicdn.com/img/ibank/O1CN01yriQZ41GhZr9j55Jn_!!2209628360654-0-cib.jpg' },
            { id: '2', url: 'https://cbu01.alicdn.com/img/ibank/O1CN01201Bka1GhZr8YQ1vd_!!2209628360654-0-cib.jpg' },
        ],
        currency: { id: '1', name: 'VND', icon: 'đ', price: 640.763 },
        promotion: '',
        rating: ['Luxury + Quality', 'Enduring'],
        saleOut: 10,
    },
    {
        id: '4',
        name: 'Jimmy Choo Averly 100 Bow-Detailed Asymmetric Pumps',
        images: [{ id: '1', url: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/imagess/products/9e23cd1bdbefe72c7cf52bb07e7dc869.webp' }],
        currency: { id: '1', name: 'VND', icon: '$', price: 790.83 },
        promotion: '',
        rating: ['Luxury + Quality', 'Enduring'],
        saleOut: 10,
    },
];
export default function Home() {
    return (
        <div className="flex flex-wrap lg:flex-nowrap h-full">
            {/* <div className="w-full lg:w-[478px] px-3 py-5 ">
                <TabOne />
            </div> */}
            <div className="w-[65.5%] px-3 py-5">
                <div className="w-full flex flex-wrap mb-4">
                    <div className="w-full flex items-center mb-[10px]">
                        {' '}
                        <div className="w-full h-[1px] bg-[rgb(100_100_100)]"></div>
                        <h1 className="text-sm px-2">Outstanding</h1>
                        <div className="w-full h-[1px] bg-[rgb(100_100_100)]"></div>
                    </div>
                    <FavoriteList data={dataDetail} />
                </div>{' '}
                <div>3</div>
            </div>
        </div>
    );
}
