import { useState } from 'react'
import vector from '../images/Vector.png'
import search from '../images/Icon - Search.png'
import calendar from '../images/solar_calendar-linear.png'
import bell from '../images/solar_bell-outline.png'
import pfp from '../images/Rectangle 1061.png'
import arrowD from '../images/Arrow - Down 2.png'

function Header() {
    const [profile, setProfile] = useState(false)
    const handleClick = () => {
        setProfile(!profile)
    }

    return (
        <div className="bg-[#FAFAFA] z-20 p-5 pl-20 lg:pl-[6.25rem] pr-16 lg:pr-5 flex items-center justify-between fixed top-0 left-0 w-full border-b border-[#E5EAEF] head">
            {window.screen.width < 1024 ? (<img src={vector} className='absolute vec left-5' />) : null}
            <h1 className="font-jakarta text-xl font-semibold leading-7 text-[#26282C] dash">Dashboard</h1>
            <div className='flex w-fit items-center gap-4'>
                {window.screen.width >= 1024 ? (
                  <div className='relative'>
                    <input type="text" value='' placeholder="Search..." className="w-[21rem] h-12 text-base leading-6 font-inter rounded-full pl-[2.625rem] bg-inherit border border-[#DADDDD]" />
                    <img src={search} className='absolute left-4 top-[0.9375rem]' />
                  </div>
                ) : null}
              <div className='flex gap-5'>
                {window.screen.width >= 720 ? (
                <div className='flex items-center'>
                    <div className='px-4 py-3 flex justify-between w-48'>
                        <img src={calendar} />
                        <h2 className='font-inter text-sm font-semibold leading-[1.375rem] text-[#26282C]'>November 15, 2023</h2>
                    </div>
                    <div className='border border-[#DADDDD] rounded-full w-10 h-10 flex items-center justify-center'>
                        <img src={bell} />
                    </div>
                </div>
                ) : null}                
                <div className='w-fit h-[3.25rem] border border-[#DADDDD] rounded-full p-2 flex items-center pfpc'>
                    <img src={pfp} className='mr-2 pfp' />
                    {window.screen.width >= 540 ? (
                    <div className='flex flex-col gap-1 text-end mr-2'>
                        <p className='font-inter text-[#26282C] text-base'>Justin Bergson</p>
                        <p className='text-[#787486] text-sm font-inter'>Justin@gmail.com</p>
                    </div>
                    ) : null}                    
                    <img src={arrowD} />
                </div>
              </div>
            </div>
        </div>
    )
}

export default Header