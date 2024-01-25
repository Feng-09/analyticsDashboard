import boxTick from '../images/box-tick.png'
import rotate from '../images/3d-rotate.png'
import cart from '../images/shopping-cart.png'
import coin from '../images/coin.png'
import graphOne from '../images/Group 3.png'
import graphTwo from '../images/Group 3 (1).png'
import arrGraph1 from '../images/Group.png'
import arrGraph2 from '../images/Group (1).png'

function Cards() {
    return (
        <div className="grid grid-flow-row grid-cols-2 gap-4 grid-rows-2 w-[31rem] cards">
            <div className="bg-white w-[14.9375rem] h-[11.1875rem] border border-[#EDF2F7] rounded-[0.875rem] p-4 flex flex-col">
                <div className='flex justify-between mb-[0.62rem]'>
                <div className='w-10 h-10 rounded-full border border-[#E6E6E6] flex items-center justify-center'>
                    <img src={boxTick} />
                </div>
                <img src={graphOne} />
                </div>
                <p className='font-jakarta inline-block text-lg text-[#898989] font-semibold mb-[0.31rem]'>Total Order</p>
                <p className='font-jakarta inline-block text-[1.5rem] leading-[2rem] text-[#3A3F51] font-semibold mb-[0.62rem]'>350</p>
                <div className='flex justify-between'>
                    <div className='w-[4.375rem] h-6 rounded-full bg-[#34caa51f] px-2 py-1 flex items-center justify-between'>
                        <img src={arrGraph1} />
                        <p className='font-jakarta text-xs text-[#34CAA5] font-semibold'>23.5%</p>
                    </div>
                    <p className='font-inter text-sm text-[#606060]'>vs. previous month</p>
                </div>
            </div>

            <div className="bg-white w-[14.9375rem] h-[11.1875rem] border border-[#EDF2F7] rounded-[0.875rem] p-4 flex flex-col">
                <div className='flex justify-between mb-[0.62rem]'>
                <div className='w-10 h-10 rounded-full border border-[#E6E6E6] flex items-center justify-center'>
                    <img src={rotate} />
                </div>
                <img src={graphTwo} />
                </div>
                <p className='font-jakarta inline-block text-lg text-[#898989] font-semibold mb-[0.31rem]'>Total Refund</p>
                <p className='font-jakarta inline-block text-[1.5rem] leading-[2rem] text-[#3A3F51] font-semibold mb-[0.62rem]'>270</p>
                <div className='flex justify-between'>
                    <div className='w-[4.375rem] h-6 rounded-full bg-[#ed544e1f] px-2 py-1 flex items-center justify-between'>
                        <img src={arrGraph2} />
                        <p className='font-jakarta text-xs text-[#ED544E] font-semibold'>23.5%</p>
                    </div>
                    <p className='font-inter text-sm text-[#606060]'>vs. previous month</p>
                </div>
            </div>

            <div className="bg-white w-[14.9375rem] h-[11.1875rem] border border-[#EDF2F7] rounded-[0.875rem] p-4 flex flex-col">
                <div className='flex justify-between mb-[0.62rem]'>
                <div className='w-10 h-10 rounded-full border border-[#E6E6E6] flex items-center justify-center'>
                    <img src={cart} />
                </div>
                <img src={graphTwo} />
                </div>
                <p className='font-jakarta inline-block text-lg text-[#898989] font-semibold mb-[0.31rem]'>Average Sales</p>
                <p className='font-jakarta inline-block text-[1.5rem] leading-[2rem] text-[#3A3F51] font-semibold mb-[0.62rem]'>1567</p>
                <div className='flex justify-between'>
                    <div className='w-[4.375rem] h-6 rounded-full bg-[#ed544e1f] px-2 py-1 flex items-center justify-between'>
                        <img src={arrGraph2} />
                        <p className='font-jakarta text-xs text-[#ED544E] font-semibold'>23.5%</p>
                    </div>
                    <p className='font-inter text-sm text-[#606060]'>vs. previous month</p>
                </div>
            </div>

            <div className="bg-white w-[14.9375rem] h-[11.1875rem] border border-[#EDF2F7] rounded-[0.875rem] p-4 flex flex-col">
                <div className='flex justify-between mb-[0.62rem]'>
                <div className='w-10 h-10 rounded-full border border-[#E6E6E6] flex items-center justify-center'>
                    <img src={coin} />
                </div>
                <img src={graphOne} />
                </div>
                <p className='font-jakarta inline-block text-lg text-[#898989] font-semibold mb-[0.31rem]'>Total Income</p>
                <p className='font-jakarta inline-block text-[1.5rem] leading-[2rem] text-[#3A3F51] font-semibold mb-[0.62rem]'>$350.000</p>
                <div className='flex justify-between'>
                    <div className='w-[4.375rem] h-6 rounded-full bg-[#34caa51f] px-2 py-1 flex items-center justify-between'>
                        <img src={arrGraph1} />
                        <p className='font-jakarta text-xs text-[#34CAA5] font-semibold'>23.5%</p>
                    </div>
                    <p className='font-inter text-sm text-[#606060]'>vs. previous month</p>
                </div>
            </div>
        </div>
    )
}

export default Cards