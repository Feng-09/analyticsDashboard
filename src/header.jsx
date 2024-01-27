import { useState } from 'react'
import Extra from './extra'
import vector from '../images/Vector.svg'
import search from '../images/Icon - Search.svg'
import calendar from '../images/solar_calendar-linear.svg'
import bell from '../images/solar_bell-outline.svg'
import pfp from '../images/Rectangle 1061.png'
import arrowD from '../images/Arrow - Down 2.svg'
import exit from '../images/circle-xmark-regular.svg'

function Header({ theme }) {
    const [srchInp, setSrchInp] = useState('')
    const [rung, setRung] = useState(false)

    const handleClick = (e) => {
        e.currentTarget.nextElementSibling.classList.toggle('active')
        e.currentTarget.lastElementChild.classList.toggle("active")
    }
    const handleRing = (e) => {
        e.currentTarget.children[0].classList.toggle("bell")
        setRung(!rung)
      }

    return (
        <div className="bg-[#FAFAFA] dark:bg-slate-950 z-20 p-5 pl-20 lg:pl-[6.25rem] pr-16 lg:pr-5 flex items-center justify-between fixed top-0 left-0 w-full border-b border-[#E5EAEF] head">
            {window.screen.width < 1024 ? (<img src={vector} className='absolute vec left-5' />) : null}
            <h1 className="font-jakarta text-xl font-semibold leading-7 text-[#26282C] dark:text-slate-300 dash">Dashboard</h1>
            <div className='flex w-fit items-center gap-4'>
                {window.screen.width >= 1280 ? (
                  <div className='relative hover:cursor-pointer'>
                    <input type="text" value={srchInp} onChange={(e) => {setSrchInp(e.target.value)}} placeholder="Search..." className="w-[21rem] h-12 text-base leading-6 font-inter rounded-full pl-[2.625rem] bg-inherit border border-[#DADDDD] focus:w-[30rem] focus:outline-none focus:border-[#34CAA5] focus:border-2 duration-[0.3s]" />
                    <img src={search} className='absolute left-4 top-[0.9375rem]' />
                    {srchInp != '' ? (
                      <img src={exit} onClick={() => {setSrchInp('')}} className={theme == 'dark' ? 'absolute right-4 w-5 h-5 filt top-[0.9375rem]' : 'absolute right-4 w-5 h-5 filt2 top-[0.9375rem]'} />
                    ) : null}
                  </div>
                ) : null}
              <div className='flex gap-5'>
                {window.screen.width >= 720 ? (
                <div className='flex items-center'>
                    <div className='px-4 py-3 flex w-48'>
                        <img src={calendar} className={theme == 'dark' ? 'filt mr-2' : 'mr-2'} />
                        <Extra />
                    </div>
                    <div className='border border-[#DADDDD] rounded-full w-10 h-10 flex items-center justify-center hover:cursor-pointer group relative' onClick={handleRing}>
                        <img src={bell} className={theme == 'dark' ? 'filt' : null} />
                        <div className='font-jakarta text-xs rounded-md text-slate-200 opacity-70 dark:text-slate-800 bg-slate-950 dark:bg-white p-1 absolute top-12 mx-[-3rem] w-fit h-fit hidden group-hover:block'>{rung ? 'Notifications On' : 'Receive Notifications'}</div>
                    </div>
                </div>
                ) : null}                
                <div className='w-fit h-[3.25rem] border border-[#DADDDD] rounded-full p-2 flex items-center pfpc hover:cursor-pointer' onClick={handleClick}>
                    <img src={pfp} className='mr-2 pfp' />
                    {window.screen.width >= 540 ? (
                    <div className='flex flex-col gap-1 text-end mr-2'>
                        <p className='font-inter text-[#26282C] dark:text-slate-300 text-base'>Justin Bergson</p>
                        <p className='text-[#787486] dark:text-slate-500 text-sm font-inter'>Justin@gmail.com</p>
                    </div>
                    ) : null}                    
                    <img src={arrowD} className={theme == 'dark' ? 'filt arr' : 'arr' } />
                </div>
                <div className='flex flex-col prof gap-4 w-fit absolute right-5 top-[5rem] rounded-lg bg-white dark:bg-slate-950 shadow shadow-slate-700'>
                    {window.screen.width < 540 ? (
                    <div className='flex flex-col gap-1 text-center mr-2'>
                      <p className='font-inter text-[#26282C] dark:text-slate-300 text-base'>Justin Bergson</p>
                      <p className='text-[#787486] dark:text-slate-500 text-sm font-inter'>Justin@gmail.com</p>
                    </div>
                    ) : null}
                    <p className='font-inter h-5 text-[#26282C] dark:text-slate-300 text-base hover:cursor-pointer'>Profile</p>
                    <p className='font-inter h-5 text-[#26282C] dark:text-slate-300 text-base hover:cursor-pointer'>Teams</p>
                    <p className='font-inter h-5 text-[#26282C] dark:text-slate-300 text-base hover:cursor-pointer'>Billing</p>
                    <p className='font-inter h-5 text-[#26282C] dark:text-slate-300 text-base hover:cursor-pointer'>Switch Account</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header