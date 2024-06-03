import TabOne from './components/Home/TabOne';

export default function Home() {
    return (
        <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-[60vh] px-3 py-5">
                <TabOne />
            </div>
            <div className="w-full lg:w-[60%]">
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    );
}
