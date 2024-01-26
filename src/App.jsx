import { useState } from 'react'
import './App.css'
import search from '../images/Icon - Search.svg'
import SideBar from './sideBar'
import Header from './header'
import SalesTrends from './trends'
import Cards from './cards'
import Orders from './orders'
import Platform from './platform'

function App() {
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState(localStorage.theme)

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

  const handleMenu = (e) => {
    setMenu(!menu)
      e.currentTarget.children[0].classList.toggle("active")
      e.currentTarget.children[1].classList.toggle("active")
      e.currentTarget.children[2].classList.toggle("active")
      
    if (menu == false) {
      e.currentTarget.children[0].classList.remove("rest")
      e.currentTarget.children[1].classList.remove("rest")
      e.currentTarget.children[2].classList.remove("rest")
    } else {
      e.currentTarget.children[0].classList.add("rest")
      e.currentTarget.children[1].classList.add("rest")
      e.currentTarget.children[2].classList.add("rest")
    }    
  }

  return (
    <main className='bg-[#FAFAFA] dark:bg-slate-950 w-screen min-h-screen pt-[6.5rem] pl-5 lg:pl-[6.25rem] overflow-hidden pr-0 mr-0'>
      {window.screen.width < 1024 ? (
         <div className='flex flex-col gap-1 fixed top-9 right-6 z-40 ham' onClick={handleMenu}>
           <div className='w-6 h-1 bg-[#0D062D] dark:bg-slate-300 rounded-full' id='line1'></div>
           <div className='w-6 h-1 bg-[#0D062D] dark:bg-slate-300 rounded-full' id='line2'></div>
           <div className='w-6 h-1 bg-[#0D062D] dark:bg-slate-300 rounded-full' id='line3'></div>
         </div>
       ) : null}
      <SideBar menu={menu} handleTheme={handleTheme} theme={theme} />
      <Header theme={theme} />
      <div className='grid grid-flow-row col gap-4 justify-center w-screen scalo'>
        {window.screen.width < 1280 ? (
        <div className='relative col-span-2 search'>
          <input type="text" placeholder="Search..." className="w-[21rem] h-12 text-base leading-6 font-inter rounded-full pl-[2.625rem] bg-inherit border border-[#DADDDD] focus:w-[26rem] focus:outline-none focus:border-[#34CAA5] focus:border-2 duration-[0.3s]" />
          <img src={search} className='absolute left-4 top-[0.9375rem]' />
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
