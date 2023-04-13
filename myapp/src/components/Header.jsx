import React from "react";
import Logo from "../img/logobargainbites.jpg";

import { MdLogin, MdShoppingCart } from "react-icons/md";
import{motion} from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config";

import Avatar from '../img/avatar.png';
import{Link} from "react-router-dom"
export const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider= new GoogleAuthProvider();
  const login = async () =>{
    const response =await signInWithPopup(firebaseAuth,provider);
    console.log(response);

  };

  return (
    <header className="fixed z-50 w-screen p-6 px-10">
      {/* fordesktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={'/'} className="flex items-center gap-1">
          <img
            src={Logo}
            className="w-13 h-20 object-cover"
            alt="Bargain Bites"
          />
          <p className="text-headingcolor text-md font-bold me-8">
            Bargain-Bites
          </p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About us
            </li>
            <li className="text-base text text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl cursor-pointer"></MdShoppingCart>
            <div className=" absolute top-10 right-24 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="realative">
          <motion.img whileTap={{scale:0.6 }}
          src={Avatar} className = "w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" alt="userprofile"
          onClick={login}
          />
          </div>
        </div>
      </div>
      {/* for logo */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
