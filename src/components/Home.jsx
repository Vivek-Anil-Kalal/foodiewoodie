import React from 'react'
import TopCat from './TopCat'
import TopSelling from './TopSelling'
import RecentlyAdded from './RecentlyAdded'


const Home = () => {


    return (
        <div className="w-full flex flex-col mt-3 p-3">
            {/* Top Categories */}
            <div className="w-full flex flex-col">
                <h1 className="font-semibold text-3xl">Top Categories</h1>
                <div className="flex flew-row gap-3 p-4 snap-x">
                    <div className="rounded-full border-2 border-black snap-center">
                        <TopCat />
                    </div>
                    <div className="rounded-full border-2 border-black snap-center">
                        <TopCat />
                    </div>
                    <div className="rounded-full border-2 border-black snap-center">
                        <TopCat />
                    </div>
                    <div className="rounded-full border-2 border-black snap-center">
                        <TopCat />
                    </div>
                    <div className="rounded-full border-2 border-black snap-center">
                        <TopCat />
                    </div>
                    <div className="rounded-full border-2 border-black snap-center">
                        <TopCat />
                    </div>
                </div>
            </div>
            <div className="md:mt-10 mt-4 flex flex-col">
                <h1 className="text-3xl font-semibold">Top Selling Food</h1>
                <div className="flex flex-wrap flex-row gap-2 justify-center mt-5">
                    <TopSelling />
                    <TopSelling />
                    <TopSelling />
                    <TopSelling />
                </div>
            </div>
            <div className="w-full p-2 ">
                <h1 className="font-semibold text-3xl mt-2">Recently Added Foods</h1>
            </div>
            <div className="flex gap-2 snap-x">
                <div className="flex-1 snap-center">
                    <RecentlyAdded />
                </div>
                <div className="flex-1 snap-center">
                    <RecentlyAdded />
                </div>
                <div className="flex-1 snap-center">
                    <RecentlyAdded />
                </div>
                <div className="flex-1 snap-center">
                    <RecentlyAdded />
                </div>
            </div>
        </div>
    )
}

export default Home