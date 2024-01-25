function Platform() {
    return (
        <div className="bg-white flex flex-col p-5 border border-[#EDF2F7] rounded-[0.875rem] col-span-1 platforms">
            <div className="flex justify-between mb-5">
                <h1 className="font-jakarta font-semibold text-lg text-[#26282C]">Top Platform</h1>
                <p className="text-[#34CAA5] font-jakarta text-lg font-semibold">See All</p>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                    <p className="font-jakarta font-semibold text-lg text-[#22242C]">Book Bazaar</p>
                    <div className="self-stretch rounded-full h-3 bg-[#F5F5F5]">
                        <div className="rounded-full h-full bg-[#6160DC] w-[54%]"></div>
                    </div>
                    <div  className="flex justify-between">
                        <p className="font-jakarta text-lg text-[#525252]">$2,500,000</p>
                        <p className="font-jakarta text-lg text-[#525252]">+15%</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-jakarta font-semibold text-lg text-[#22242C]">Artisan Aisle</p>
                    <div className="self-stretch rounded-full h-3 bg-[#F5F5F5]">
                        <div className="rounded-full h-full bg-[#54C5EB] w-[42%]"></div>
                    </div>
                    <div  className="flex justify-between">
                        <p className="font-jakarta text-lg text-[#525252]">$1,800,000</p>
                        <p className="font-jakarta text-lg text-[#525252]">+10%</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-jakarta font-semibold text-lg text-[#22242C]">Toy Troop</p>
                    <div className="self-stretch rounded-full h-3 bg-[#F5F5F5]">
                        <div className="rounded-full h-full bg-[#FFB74A] w-[30%]"></div>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-jakarta text-lg text-[#525252]">$1,200,000</p>
                        <p className="font-jakarta text-lg text-[#525252]">+8%</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Platform