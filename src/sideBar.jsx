import vector from '../images/Vector.png'
import vector2 from '../images/Vector2.png'
import category from '../images/category.png'
import trendUp from '../images/trend-up.png'
import profile from '../images/profile-2user.png'
import box from '../images/box.png'
import discount from '../images/discount-shape.png'
import info from '../images/info-circle.png'
import brightness from '../images/brightness 1.png'
import darkness from '../images/moon 1.png'
import arrowR from '../images/arrow-right.png'
import setting from '../images/setting-2.png'
import logout from '../images/logout.png'

function SideBar({ menu }) {
    return (
        <div className={menu ? "h-screen flex flex-col py-5 justify-start items-center border-r border-[#EBECF2] bg-[#F7F8FA] fixed top-0 bar active z-30" : "h-screen flex flex-col py-5 justify-start items-center border-r border-[#EBECF2] bg-[#F7F8FA] fixed top-0 bar z-30"}>
            {window.screen.width >= 1024 ? (<img src={vector} className='mb-5' />) : null}
            <div className='flex flex-col h-[24rem] lg:h-full items-center justify-between'>
            <div className='grid grid-flow-row grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-4 items-center justify-start'>
              <div className={window.screen.width >= 1024 ? 'w-20 relative flex justify-center' : 'relative flex justify-center'}>
                <div className='w-10 h-10 flex items-center justify-center'><img src={category} /></div>
                {window.screen.width >= 1024 ? (
                  <img src={vector2} className='absolute top-[0.5625rem] right-[0.0625rem]' />
                ) : null}
                
              </div>
              <div className='w-10 h-10 flex items-center justify-center'><img src={trendUp} /></div>
              <div className='w-10 h-10 flex items-center justify-center'><img src={profile} /></div>
              <div className='w-10 h-10 flex items-center justify-center'><img src={box} /></div>
              <div className='w-10 h-10 flex items-center justify-center'><img src={discount} /></div>
              <div className='w-10 h-10 flex items-center justify-center'><img src={info} /></div>
              <div className='flex flex-col items-center justify-start p-2 gap-4 bg-white rounded-full shadow shadow-slate-500'>
                <div className='h-[1.875rem] w-[1.875rem] rounded-full bg-[#34CAA5] flex items-center justify-center'>
                    <img src={brightness} />
                </div>
                <div className='h-[1.875rem] w-[1.875rem] rounded-full flex items-center justify-center'>
                    <img src={darkness} />
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