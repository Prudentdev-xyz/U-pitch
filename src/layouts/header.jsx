import React from 'react'
import logo from "../assets/logo.svg";
import { links } from '../constants/links';



export const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center max-w-screen-2 py-4 px-9 w-full bg-background z-20 border-ghost-white'>
      <div className='h-12'>
        
        <img src={logo} alt="logo" />
      </div>
    </div>
    </>
  );
};

