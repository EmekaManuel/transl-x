import React from "react";
import Link from "next/link";
import {AiOutlineMenu} from "react-icons/ai" 
import {AiOutlineClose} from "react-icons/ai" 
import { useState, useEffect } from "react";


const Navbar = () => {
    const [nav, setnav] = useState(false);
    const [color, setcolor] = useState('transparent')
    const [textcolor, settextcolor] = useState('transparent')

    const handleNav = () => {
        setnav(!nav)
    }

    useEffect(() => {
      const changeColor = () => {
        if(window.scrollY >= 90) {
            setcolor('white')
            settextcolor('black')
        } else {
            setcolor('transparent')
            settextcolor('white')
        }
      };
      window.addEventListener('scroll', changeColor)

    }, [])
    



  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full ease-in duration-300 z-10">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{color: `${textcolor}`}} className="text-2xl font-bold">Transl-X</h1>
        </Link>
        <ul className="hidden sm:flex">
         <li className="p-2">  <Link href='/home'> Home </Link> </li>
         <li className="p-2">  <Link href='/aipage'> Try Transl-X </Link> </li>
         <li className="p-2">  <Link href='/testimonies'> Testimonies </Link> </li>
         <li className="p-2">  <Link href='/home'> Sponsors </Link> </li>
         <li className="p-2">  <Link href='/home'> Footer </Link> </li>
        </ul>

        {/* //mobile menu button */}

        <div onClick={handleNav} className="sm:hidden flex z-10">
            {
                nav ?  ( <AiOutlineClose style={{color: `${textcolor}`}}  size={20}/>) : ( <AiOutlineMenu size={20} style={{color: `${textcolor}`}} />)
            }
          
        </div>

        {/* //mobile menu */}
        <div className= {
            nav ? "sm:hidden flex absolute top-0 left-0 right-0 bottom-0 items-center w-full h-screen bg-black text-center ease-in duration-300 justify-center " :

         "sm:hidden flex absolute top-0 left-[-100%] right-0 bottom-0 items-center w-full h-screen bg-black text-center ease-in duration-300 justify-center "
        }>
        <ul >
         <li onClick={handleNav} className="p-4">  <Link href='/'> Home </Link> </li>
         <li onClick={handleNav} className="p-4">  <Link href='/aipage'> Try Transl-X </Link> </li>
         <li onClick={handleNav} className="p-4">  <Link href='/'> Testimonies </Link> </li>
         <li onClick={handleNav} className="p-4">  <Link href='/home'> Sponsors </Link> </li>
         <li onClick={handleNav} className="p-4">  <Link href='/home'> Footer </Link> </li>
        </ul>

        </div>

      </div>
    </div>
  ); 
};

export default Navbar;
