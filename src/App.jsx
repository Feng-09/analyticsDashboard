import { useState } from 'react'
import './App.css'
import search from '../images/Icon - Search.svg'
import exit from '../images/circle-xmark-regular.svg'
import SideBar from './sideBar'
import Header from './header'
import SalesTrends from './trends'
import Cards from './cards'
import Orders from './orders'
import Platform from './platform'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState(localStorage.theme)
  const [srchInp, setSrchInp] = useState('')

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const handleTheme = (e) => {
    e.currentTarget.children[0].classList.toggle("active")
    if(theme == 'dark') {
      localStorage.theme = 'light'
      setTheme('light')
    } else {
      localStorage.theme = 'dark'
      setTheme('dark')
    }
  }  
  
  const container = useRef()
  const xTo = useRef();
  const yTo = useRef();
  const app = useRef();
  const { contextSafe } = useGSAP(() => {
    xTo.current = gsap.quickTo(".flair", "x", {duration: 0.8, ease: "power3"}),
    yTo.current = gsap.quickTo(".flair", "y", {duration: 0.8, ease: "power3"});
  }, {dependencies: [menu]})

  const moveShape = contextSafe((e) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
   });
  
      
  const handleMenu = contextSafe((e) => {
    setMenu(!menu)
      e.currentTarget.children[0].classList.toggle("active")
      e.currentTarget.children[1].classList.toggle("active")
      e.currentTarget.children[2].classList.toggle("active")
      document.getElementById('eclipse').classList.toggle("active")

    if (menu == false) {
      gsap.from(".animage", {y:30, opacity: 0, stagger: 0.05, duration: 1, delay: 0.4, ease: 'elastic.out'})
      e.currentTarget.children[0].classList.remove("rest")
      e.currentTarget.children[1].classList.remove("rest")
      e.currentTarget.children[2].classList.remove("rest")
    } else {
      gsap.to(".animage", {y:30, opacity: 0, stagger: -0.05, duration: 0.4, ease: 'back.in', repeat: 1, yoyo: true})
      e.currentTarget.children[0].classList.add("rest")
      e.currentTarget.children[1].classList.add("rest")
      e.currentTarget.children[2].classList.add("rest")
    }    
  })

  return (
    <main className='bg-[#FAFAFA] dark:bg-slate-950 w-screen min-h-screen pt-[6.5rem] pl-5 lg:pl-[6.25rem] overflow-hidden pr-0 mr-0 adjust'>
      <div className='flair rounded-full w-4 h-4 border border-slate-950 dark:border-slate-200 hidden lg:flex items-center justify-center fixed top-4 left-4 z-50'><div className='bg-slate-950 dark:bg-slate-200 w-2 h-2 rounded-full'></div></div>
      <div id='eclipse' className='w-screen h-screen mx-[-10rem] bg-black fixed top-20 pointer-events-none z-30 eclipse'></div>
      {window.screen.width < 1024 ? (
         <div className='flex flex-col gap-1 fixed top-9 right-6 z-40 ham' onClick={handleMenu}>
           <div className='w-6 h-1 bg-[#0D062D] dark:bg-slate-300 rounded-full' id='line1'></div>
           <div className='w-6 h-1 bg-[#0D062D] dark:bg-slate-300 rounded-full' id='line2'></div>
           <div className='w-6 h-1 bg-[#0D062D] dark:bg-slate-300 rounded-full' id='line3'></div>
         </div>
       ) : null}
      <SideBar menu={menu} handleTheme={handleTheme} theme={theme} container={container} />
      <Header theme={theme} />
      <div className='grid grid-flow-row col gap-4 justify-center w-screen scalo' ref={app} onMouseMove={(e) => moveShape(e)}>
        
        {window.screen.width < 1280 ? (
        <div className='relative col-span-2 w-fit search hover:cursor-pointer'>
          <input type="text" value={srchInp} onChange={(e) => {setSrchInp(e.target.value)}} placeholder="Search..." className="w-[21rem] h-12 text-base leading-6 font-inter rounded-full pl-[2.625rem] bg-inherit border border-[#DADDDD] focus:w-[26rem] focus:outline-none focus:border-[#34CAA5] focus:border-2 duration-[0.3s]" />
          <img src={search} className='absolute left-4 top-[0.9375rem]' />
          {srchInp != '' ? (
            <img src={exit} onClick={() => {setSrchInp('')}} className={theme == 'dark' ? 'absolute right-4 w-5 h-5 filt top-[0.9375rem]' : 'absolute right-4 w-5 h-5 filt2 top-[0.9375rem]'} />
          ) : null}
        </div>
        ) : null}
        <SalesTrends theme={theme} />
        <Cards />
        <Orders  theme={theme} />
        <Platform />
      </div>
    </main>
  )
}

export default App
