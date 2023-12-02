import React from 'react'

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <nav className="  bg-[#01324e] text-white text-xl border-b border-slate-600 shadow-md ">
        <div className=" max-w-[1024px] mx-auto flex justify-between">
            <ul className="my-3">
                <li>
                    <img 
                    src={logo}
                    alt="logo"
                    className="w-32"
                    />
                </li>
            </ul>

            <ul className="my-3 flex gap-4">
                <li>Premium+</li>
                <li>Blogs</li>
                <li>Podcast</li>
            </ul>
            <ul className="my-3 flex gap-4">
                <li><FcGoogle className="text-3xl"/></li>
                <li><FaApple className="text-3xl"/></li>
                <li className="px-4 py-1 rounded-lg text-lg font-semibold text-black  bg-[#eda404] cursor-pointer border border-[#eda404] hover:text-white  hover:border-white">Login</li>
                <li className="px-4 py-1 rounded-lg text-lg font-semibold text-black  bg-white cursor-pointer border border-white hover:text-white hover:bg-[#eda404]  hover:border-[#eda404]">SignUp</li>
            </ul>
        </div>
    </nav>
  )
}
