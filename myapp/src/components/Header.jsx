import React from 'react'
import Logo from './img/logobargainbites.jpg'
import Avatar from './img/avatar.png'
import {MdShoppingBasket} from 'react-icons/md'


const Header = () => {
  return (
    <Header className="fixed z-50 w-screen  p-6 px-16">
        {/* for desktop */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          {/* for logo */}
          <div className="flex items-center gap-1">
            <img src={Logo} className="w-13 h-20 object-cover" alt='logo'></img>
            <p className="text-headingColor text-xl font-bold me-8">BARGAIN BITES</p>
          </div>

          <div className="flex items-center gap-8">         
            <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">HOME</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">MENU</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">ABOUT US</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">SERVICES</li>
          </ul>

          <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
          <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
          </div>
          <img src={Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl" alt="userprofile" />
          </div>
        </div>

        {/* for mobile */}
        <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
      
    </Header>
  )
}

export default Header;
