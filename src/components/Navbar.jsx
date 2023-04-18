import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from './';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter' style={{color: color}}>
    <button onClick={() => customFunc()} type="button" className='relative text-xl rounded-full p-3 dark:hover:bg-[#33373e] hover:bg-light-gray'>
      <span style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 righ-2 top-2" />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    currentColor,
    handleClick,
    screenSize,
    setScreenSize
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return (() => { window.removeEventListener("resize", handleResize) })
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" color={currentColor} icon={<AiOutlineMenu />}
        customFunc={() => { setActiveMenu((prevActiveMenu) => !prevActiveMenu) }} />
      <div className="flex">
        <NavButton title="Cart" color={currentColor} icon={<FiShoppingCart />}
          customFunc={() => { handleClick("cart") }} />
        <NavButton title="Chat" color={currentColor} dotColor={currentColor} icon={<BsChatLeft />}
          customFunc={() => { handleClick("chat") }} />
        <NavButton title="notification" color={currentColor} dotColor={currentColor} icon={<RiNotification3Line />}
          customFunc={() => { handleClick("notification") }} />
        <TooltipComponent
          content="Profile"
          position="BottomCenter">
          <div className="flex items-center cursor-pointer p-1 gap-2 hover:bg-light-gray dark:hover:bg-[#33373e] rounded-lg"
            onClick={() => handleClick('userProfile')}>
            <img className='rounded-full w-8 h-8' src={avatar} alt='Pandas are cute'/>
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 text-14 font-bold ml-1'>Panda</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>

  )
}

export default Navbar