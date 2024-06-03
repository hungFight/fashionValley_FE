import TabOne from './components/Home/TabOne';
import FavoriteList from './components/Home/FavoriteList';

export default function Home() {
    return (
        <div className="flex flex-wrap lg:flex-nowrap h-full">
            <div className="w-full lg:w-[478px] px-3 py-5 ">
                <TabOne />
            </div>
            <div className="w-full lg:w-[65%]">
                <FavoriteList />
                <div>3</div>
            </div>
        </div>
    );
}
