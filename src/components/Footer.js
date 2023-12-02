import React from "react";
import logo from "../images/logo.png"

export default function Footer() {
  return(
    <footer className="footer-color pt-10">
      <div className="max-w-[1024px] mx-auto">
        <div className="flex flex-col md:flex-row text-center justify-between">
        <div className="mx-auto md:mx-0">
          <img
          src={logo}
          alt="logo"
          className="w-32"
          />
        </div>

        <div className="text-white">
          <ul className="font-semibold">
            <h3 className="text-lg">
              Popular Courses
            </h3>
            <div className="mx-auto md:mx-0 w-36 h-1 bg-[#f1f1f1] opacity-30">

            </div>
            <li className="my-2 px-2 rounded-lg text-lg font-semibold text-black  bg-[#eda404] cursor-pointer border border-[#eda404] hover:text-white  hover:border-white">
              Premium+ Plan
            </li>

            <li className="my-2">
              Marks Enhancement
            </li>

            <li className="my-2">
              Elite Plan
            </li>
          </ul>
        </div>

        <div className="text-white">
          <ul className="font-semibold">
            <h3 className="text-lg">
              Other Links
            </h3>
            <div className="mx-auto md:mx-0 w-32 h-1 bg-[#f1f1f1] opacity-30">

            </div>

            <li className="my-2">
              Free Resources
            </li>

            <li className="my-2">
              Contact us
            </li>
          </ul>
        </div>
        </div>
      
        <div className="mt-5 sub-footer border-t border-blue-950 
        flex flex-col-reverse md:flex-row text-center justify-between font-semibold text-sm text-white opacity-50">
          <div className="my-5 md:my-5">
            <p>© 2023 Edzorb Law Private Limited</p>
          </div>

          <div className="my-2 md:my-5 flex gap-10 justify-center">
            <p>FAQ</p>
            <p>About Us</p>
            <p>Career</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
