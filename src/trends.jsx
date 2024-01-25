import arrowD from '../images/Arrow - Down 2.png'
import top from '../images/Combined Shape.png'

function SalesTrends() {
    return (
        <div className="bg-white p-5 border border-[#EDF2F7] rounded-[0.875rem] w-fit trend">
            <div className="flex justify-between mb-4">
                <h2 className="font-jakarta text-lg text-[#26282C] font-semibold">Sales Trends</h2>
                <div className='flex items-center'>
                    <p className="font-jakarta text-sm font-semibold text-[#3A3F51] mr-[0.675rem]">Sort by:</p>
                    <div className='py-[0.375rem] px-3 border border-[#E1DFDF] rounded-full flex items-center'>
                        <p className='mr-[0.675rem] font-jakarta text-xs text-[#3A3F51]'>Weekly</p>
                        <img src={arrowD} className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <div className='flex items-end mb-3 relative mt-2 h-[12rem] sm:h-fit'>
                <div className='absolute text-center top-0 left-[12.8rem] sm:left-[19.25rem] z-10'>
                    <img src={top} />
                    <p className='font-inter text-xs font-semibold text-white relative bottom-7'>$45.000</p>
                </div>
                <div className='flex flex-col items-start justify-between h-[15.9375rem] mr-7 absolute top-0 right-0 flat'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="570" height="1" viewBox="0 0 697 1" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                    <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                  </svg>
                </div>
                <div className='flex flex-col items-start justify-between h-[11rem] sm:h-[15.9375rem] opacity-55 mr-7'>
                    <p className='font-jakarta text-xs font-semibold text-[#525252]'>50.000</p>
                    <p className='font-jakarta text-xs font-semibold text-[#525252]'>40.000</p>
                    <p className='font-jakarta text-xs font-semibold text-[#525252]'>30.000</p>
                    <p className='font-jakarta text-xs font-semibold text-[#525252]'>20.000</p>
                    <p className='font-jakarta text-xs font-semibold text-[#525252]'>10.000</p>
                    <p className='font-jakarta text-xs font-semibold text-[#525252]'>5.000</p>
                    <p className='font-jakarta text-xs font-semibold text-[#525252]'>0</p>
                </div>
                <div className='grid grid-cols grid-flow-col col-span-12 gap-3 sm:gap-6 items-end h-fit z-10 flat'>
                    <div className='w-5 sm:w-7 h-[4.25rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[7.5rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[2.5rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[10rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[5rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[13.5rem] rounded-t-[1.25rem] bg-gradient-to-b from-[#34CAA5] to-[#34caa500]'></div>
                    <div className='w-5 sm:w-7 h-[5rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[8.1875rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[11.375rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[3.1875rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[10.6875rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                    <div className='w-5 sm:w-7 h-[9.4375rem] rounded-t-[1.25rem] bg-[#34caa51a]'></div>
                </div>
            </div>
            <div className='flex justify-end opacity-55'>
                <div className='grid grid-cols grid-flow-col col-span-12 gap-3 sm:gap-6'>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Jan</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Feb</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Mar</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Apr</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>May</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Jun</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] text-center sm:text-sm font-semibold font-jakarta text-[#525252]'>Jul</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Aug</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Sep</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Oct</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Nov</div>
                    <div className='w-5 sm:w-7 text-[0.6rem] sm:text-sm font-semibold font-jakarta text-[#525252]'>Dec</div>

                </div>
            </div>
            
        </div>
    )
}

export default SalesTrends