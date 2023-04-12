import React from 'react'
import Logo from './img/logobargainbites.jpg'

const Header = () => {
  return (
    <Header className="fixed z-50 w-screen  p-6 px-16">
        {/* for desktop */}
        <div className="hidden md:flex w-full h-full p-4">
          {/* for logo */}
          <div className="flex items-center gap-1">
            <img src={Logo} className="w-13 h-20 object-cover" alt='logo'></img>
            <p className="text-headingColor text-xl font-bold">BARGAIN BITES</p>
          </div>

          <ul className="flex items-center gap-8">
            <li>HOME</li>
            <li>MENU</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
          </ul>


        </div>

        {/* for mobile */}
        <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
      
    </Header>
  )
}

export default Header;
