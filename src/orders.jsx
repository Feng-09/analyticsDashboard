import frame1 from '../images/Frame1.png'
import frame2 from '../images/Frame2.png'
import frame3 from '../images/Frame3.png'
import frame4 from '../images/Frame4.png'
import frame5 from '../images/Frame5.png'
import view from '../images/document-download.svg'

function Orders({ theme }) {
    return (
        <div className="bg-white dark:bg-[#090c1d] p-5 flex flex-col border border-[#EDF2F7] rounded-[0.875rem] orders">
            <div className="flex justify-between items-center">
                <h1 className="font-jakarta text-lg font-semibold text-[#26282C] dark:text-slate-300">Last Orders</h1>
                <p className="text-[#34CAA5] font-jakarta text-lg font-semibold hover:cursor-pointer">See All</p>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between my-3">
                    <p className="w-[7rem] sm:w-[13.5rem] font-jakarta text-[#9CA4AB] text-base">Name</p>
                    <p className="w-[3.675rem] sm:w-[7.25rem] font-jakarta text-[#9CA4AB] text-base">Date</p>
                    <p className="w-[3.75rem] sm:w-[7.5rem] font-jakarta text-[#9CA4AB] text-base">Amount</p>
                    <p className="w-[3rem] sm:w-[5.9375rem] font-jakarta text-[#9CA4AB] text-base">Status</p>
                    <p className="w-[3.5rem] sm:w-[5rem] font-jakarta text-[#9CA4AB] text-base">Invoice</p>
                </div>

                <div className='h-[1px] self-stretch bg-[#EDF2F6]'>.</div>

                <div className="flex justify-between items-center my-3">
                    <div className="w-[7rem] sm:w-[13.5rem] flex items-center">
                        <img src={frame1} className='mr-[0.62rem]' />
                        <p className='font-jakarta text-[#3A3F51] dark:text-slate-300 font-semibold'>Marcus Bergson</p>
                    </div>
                    <p className='w-[3.675rem] sm:w-[7.25rem] font-jakarta text-[#737373] dark:text-slate-400'>Nov 15, 2023</p>
                    <p className='w-[3.75rem] sm:w-[7.5rem] font-jakarta text-[#0D062D] dark:text-slate-200 font-semibold'>$80,000</p>
                    <p className='w-[3rem] sm:w-[5.9375rem] font-jakarta text-[#34CAA5]'>Paid</p>
                    <div className='w-[3.5rem] sm:w-[5rem] flex items-center hover:cursor-pointer'>
                        <img src={view} className={theme == 'dark' ? 'filt mr-[0.31rem]' : 'mr-[0.31rem]'} />
                        <p className='font-jakarta text-[#0D062D] dark:text-slate-200 text-sm'>View</p>
                    </div>
                </div>

                <div className='h-[1px] self-stretch bg-[#EDF2F6]'>.</div>

                <div className="flex justify-between items-center my-3">
                    <div className="w-[7rem] sm:w-[13.5rem] flex items-center">
                        <img src={frame2} className='mr-[0.62rem]' />
                        <p className='font-jakarta text-[#3A3F51] dark:text-slate-300 font-semibold'>Jaydon Vaccaro</p>
                    </div>
                    <p className='w-[3.675rem] sm:w-[7.25rem] font-jakarta text-[#737373] dark:text-slate-400'>Nov 15, 2023</p>
                    <p className='w-[3.75rem] sm:w-[7.5rem] font-jakarta text-[#0D062D] dark:text-slate-200 font-semibold'>$150,000</p>
                    <p className='w-[3rem] sm:w-[5.9375rem] font-jakarta text-[#ED544E]'>Refund</p>
                    <div className='w-[3.5rem] sm:w-[5rem] flex items-center hover:cursor-pointer'>
                        <img src={view} className={theme == 'dark' ? 'filt mr-[0.31rem]' : 'mr-[0.31rem]'} />
                        <p className='font-jakarta text-[#0D062D] dark:text-slate-200 text-sm'>View</p>
                    </div>
                </div>

                <div className='h-[1px] self-stretch bg-[#EDF2F6]'>.</div>

                <div className="flex justify-between items-center my-3">
                    <div className="w-[7rem] sm:w-[13.5rem] flex items-center">
                        <img src={frame3} className='mr-[0.62rem]' />
                        <p className='font-jakarta text-[#3A3F51] dark:text-slate-300 font-semibold'>Corey Schleifer</p>
                    </div>
                    <p className='w-[3.675rem] sm:w-[7.25rem] font-jakarta text-[#737373] dark:text-slate-400'>Nov 14, 2023</p>
                    <p className='w-[3.75rem] sm:w-[7.5rem] font-jakarta text-[#0D062D] dark:text-slate-200 font-semibold'>$87,000</p>
                    <p className='w-[3rem] sm:w-[5.9375rem] font-jakarta text-[#34CAA5]'>Paid</p>
                    <div className='w-[3.5rem] sm:w-[5rem] flex items-center hover:cursor-pointer'>
                        <img src={view} className={theme == 'dark' ? 'filt mr-[0.31rem]' : 'mr-[0.31rem]'} />
                        <p className='font-jakarta text-[#0D062D] dark:text-slate-200 text-sm'>View</p>
                    </div>
                </div>

                <div className='h-[1px] self-stretch bg-[#EDF2F6]'>.</div>

                <div className="flex justify-between items-center my-3">
                    <div className="w-[7rem] sm:w-[13.5rem] flex items-center">
                        <img src={frame4} className='mr-[0.62rem]' />
                        <p className='font-jakarta text-[#3A3F51] dark:text-slate-300 font-semibold'>Cooper Press</p>
                    </div>
                    <p className='w-[3.675rem] sm:w-[7.25rem] font-jakarta text-[#737373] dark:text-slate-400'>Nov 14, 2023</p>
                    <p className='w-[3.75rem] sm:w-[7.5rem] font-jakarta text-[#0D062D] dark:text-slate-200 font-semibold'>$100,000</p>
                    <p className='w-[3rem] sm:w-[5.9375rem] font-jakarta text-[#ED544E]'>Refund</p>
                    <div className='w-[3.5rem] sm:w-[5rem] flex items-center hover:cursor-pointer'>
                        <img src={view} className={theme == 'dark' ? 'filt mr-[0.31rem]' : 'mr-[0.31rem]'} />
                        <p className='font-jakarta text-[#0D062D] dark:text-slate-200 text-sm'>View</p>
                    </div>
                </div>

                <div className='h-[1px] self-stretch bg-[#EDF2F6]'>.</div>

                <div className="flex justify-between items-center my-3">
                    <div className="w-[7rem] sm:w-[13.5rem] flex items-center">
                        <img src={frame5} className='mr-[0.62rem]' />
                        <p className='font-jakarta text-[#3A3F51] dark:text-slate-300 font-semibold'>Phillip Lubin</p>
                    </div>
                    <p className='w-[3.675rem] sm:w-[7.25rem] font-jakarta text-[#737373] dark:text-slate-400'>Nov 13, 2023</p>
                    <p className='w-[3.75rem] sm:w-[7.5rem] font-jakarta text-[#0D062D] dark:text-slate-200 font-semibold'>$78,000</p>
                    <p className='w-[3rem] sm:w-[5.9375rem] font-jakarta text-[#34CAA5]'>Paid</p>
                    <div className='w-[3.5rem] sm:w-[5rem] flex items-center hover:cursor-pointer'>
                        <img src={view} className={theme == 'dark' ? 'filt mr-[0.31rem]' : 'mr-[0.31rem]'} />
                        <p className='font-jakarta text-[#0D062D] dark:text-slate-200 text-sm'>View</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders