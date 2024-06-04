import TabOne from './components/Home/TabOne';
import FavoriteList from './components/Home/FavoriteList';
import { H3 } from './utils/styleComponent';

export default function Home() {
    return (
        <div className="flex flex-wrap lg:flex-nowrap h-full">
            {/* <div className="w-full lg:w-[478px] px-3 py-5 ">
                <TabOne />
            </div> */}
            <div className="w-full  px-3 py-5">
                <div className="flex flex-wrap">
                    <H3 className="w-full text-sm pl-2">Favorite List</H3>
                    <FavoriteList />
                </div>
                <div>3</div>
            </div>
        </div>
    );
}
