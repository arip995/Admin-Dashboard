import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { activeMenu,setActiveMenu } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 
                      text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray`;


  return (
    <div className='h-screen overflow-auto md:overflow-auto'>
      {activeMenu ? (<>
        <div className="flex justify-between items-center">
          <Link to='/' onClick={() => setActiveMenu(false)} className='items-center gap-3 ml-4 mt-4 
          flex text-xl font-extrabold tracking-tight dart:text-white text-slate-900'>
            <SiShopware /> <span>Shoppy</span>
          </Link>
          {/* <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button" onClick={() => {
              setActiveMenu((prev) => !prev)
            }} className='text-xl p-4 hover:bg-light-gray
            mt-4'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent> */}
        </div>
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title} className="">
              <p className='text-gray-400 mt-4 uppercase m-4'>{item.title}</p>
              {item.links.map((link)=>(
                <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={()=>{}}
                className={({isActive})=> isActive ? activeLink : normalLink}
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>) : (
        <div className=""></div>
      )}
    </div>
  )
}

export default Sidebar