import vector from '../images/Vector.svg'
import vector2 from '../images/Vector2.png'
import category from '../images/category.svg'
import trendUp from '../images/trend-up.svg'
import profile from '../images/profile-2user.svg'
import box from '../images/box.svg'
import discount from '../images/discount-shape.svg'
import info from '../images/info-circle.svg'
import brightness from '../images/brightness 1.svg'
import darkness from '../images/moon 1.svg'
import arrowR from '../images/arrow-right.svg'
import setting from '../images/setting-2.svg'
import logout from '../images/logout.svg'
import calendar from '../images/solar_calendar-linear.svg'
import bell from '../images/solar_bell-outline.svg'
import { useState } from 'react'
import Extra from './extra'

function SideBar({ menu, handleTheme, theme }) {
  const [currIcon, setCurrIcon] = useState(1)
  
  const handleRing = (e) => {
    e.currentTarget.children[0].classList.add("bell")
  }

    return (
        <div className={menu ? "h-screen flex flex-col py-3 justify-start items-center border-r border-[#EBECF2] bg-[#F7F8FA] dark:bg-slate-900 fixed top-0 bar active z-30" : "h-screen flex flex-col py-5 justify-start items-center border-r border-[#EBECF2] bg-[#F7F8FA] dark:bg-slate-900 fixed top-0 bar z-30"}>
            {window.screen.width >= 1024 ? (<img src={vector} className='mb-5' />) : null}
            {window.screen.width < 720 ? (
            <div className='flex flex-col items-center mb-6'>
              <div className='px-4 py-3 flex justify-between w-48'>
                  <img src={calendar} className={theme == 'dark' ? 'filt' : null} />
                  <Extra />
              </div>
              <div className='border border-[#DADDDD] rounded-full w-10 h-10 flex items-center justify-center' onClick={handleRing}>
                  <img src={bell} className={theme == 'dark' ? 'filt' : null} />
              </div>
          </div>
            ) : null}
            <div className='flex flex-col h-[24rem] lg:h-full items-center justify-between'>
            <div className='grid grid-flow-row grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-4 items-center justify-start'>
              <div className={window.screen.width >= 1024 ? 'w-20 relative flex justify-center' : 'relative flex justify-center'} onClick={() => {setCurrIcon(1)}}>
                <div className='w-10 h-10 flex items-center justify-center dark:brightness-200'><img src={category} className={currIcon != 1 ? 'filt2' : theme == 'dark' ? 'filt2Dark' : null} /></div>
                {window.screen.width >= 1024 && currIcon == 1 ? (
                  <img src={vector2} className={theme == 'dark' ? 'absolute top-[0.5625rem] right-[0.0625rem] filt2Dark' : 'absolute top-[0.5625rem] right-[0.0625rem]'} />
                ) : null}                
              </div>
              <div className={window.screen.width >= 1024 ? 'w-20 relative flex justify-center' : 'relative flex justify-center'} onClick={() => {setCurrIcon(2)}}>
                <div className='w-10 h-10 flex items-center justify-center dark:brightness-200'><img src={trendUp} className={currIcon == 2 ? theme == 'dark' ? 'iconDark' : 'icon' : null} /></div>
                {window.screen.width >= 1024 && currIcon == 2 ? (
                  <img src={vector2} className={theme == 'dark' ? 'absolute top-[0.5625rem] right-[0.0625rem] filt2Dark' : 'absolute top-[0.5625rem] right-[0.0625rem]'} />
                ) : null}
              </div>
              <div className={window.screen.width >= 1024 ? 'w-20 relative flex justify-center' : 'relative flex justify-center'} onClick={() => {setCurrIcon(3)}}>
                <div className='w-10 h-10 flex items-center justify-center dark:brightness-200'><img src={profile} className={currIcon == 3 ? theme == 'dark' ? 'iconDark' : 'icon' : null} /></div>
                {window.screen.width >= 1024 && currIcon == 3 ? (
                  <img src={vector2} className={theme == 'dark' ? 'absolute top-[0.5625rem] right-[0.0625rem] filt2Dark' : 'absolute top-[0.5625rem] right-[0.0625rem]'} />
                ) : null}
              </div>
              <div className={window.screen.width >= 1024 ? 'w-20 relative flex justify-center' : 'relative flex justify-center'} onClick={() => {setCurrIcon(4)}}>
                <div className='w-10 h-10 flex items-center justify-center dark:brightness-200'><img src={box} className={currIcon == 4 ? theme == 'dark' ? 'iconDark' : 'icon' : null} /></div>
                {window.screen.width >= 1024 && currIcon == 4 ? (
                  <img src={vector2} className={theme == 'dark' ? 'absolute top-[0.5625rem] right-[0.0625rem] filt2Dark' : 'absolute top-[0.5625rem] right-[0.0625rem]'} />
                ) : null}
              </div>
              <div className={window.screen.width >= 1024 ? 'w-20 relative flex justify-center' : 'relative flex justify-center'} onClick={() => {setCurrIcon(5)}}>
                <div className='w-10 h-10 flex items-center justify-center dark:brightness-200'><img src={discount} className={currIcon == 5 ? theme == 'dark' ? 'iconDark' : 'icon' : null} /></div>
                {window.screen.width >= 1024 && currIcon == 5 ? (
                  <img src={vector2} className={theme == 'dark' ? 'absolute top-[0.5625rem] right-[0.0625rem] filt2Dark' : 'absolute top-[0.5625rem] right-[0.0625rem]'} />
                ) : null}
              </div>
              <div className={window.screen.width >= 1024 ? 'w-20 relative flex justify-center' : 'relative flex justify-center'} onClick={() => {setCurrIcon(6)}}>
                <div className='w-10 h-10 flex items-center justify-center dark:brightness-200'><img src={info} className={currIcon == 6 ? theme == 'dark' ? 'iconDark' : 'icon' : null} /></div>
                {window.screen.width >= 1024 && currIcon == 6 ? (
                  <img src={vector2} className={theme == 'dark' ? 'absolute top-[0.5625rem] right-[0.0625rem] filt2Dark' : 'absolute top-[0.5625rem] right-[0.0625rem]'} />
                ) : null}
              </div>
              <div className='flex flex-col items-center relative justify-start p-2 gap-4 bg-white dark:bg-slate-200 rounded-full shadow shadow-slate-500 hover:cursor-pointer' onClick={handleTheme}>
                <div className={theme == 'dark' ? 'h-[1.875rem] w-[1.875rem] rounded-full bg-[#34CAA5] absolute top-2 slide active' : 'h-[1.875rem] w-[1.875rem] rounded-full bg-[#34CAA5] absolute top-2 slide'}></div>
                <div className='h-[1.875rem] w-[1.875rem] rounded-full flex items-center justify-center z-10'>
                    <img src={brightness} className={theme == 'dark' ? 'filt2' : null} />
                </div>
                <div className='h-[1.875rem] w-[1.875rem] rounded-full flex items-center justify-center z-10'>
                    <img src={darkness} className={theme == 'dark' ? 'filt' : null} />
                </div>
              </div>
            </div>
            <div className='flex lg:flex-col gap-4 items-center justify-start'>
              <div className='w-10 h-10 flex items-center justify-center'><img src={arrowR} /></div>
              <div className='w-10 h-10 flex items-center justify-center'><img src={setting} /></div>
              <div className='w-10 h-10 flex items-center justify-center'><img src={logout} /></div>
            </div>
            </div>
        </div>
    )
}

export default SideBar