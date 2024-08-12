import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
//
const Footer = () => {
  return (
    <footer className="py-4">
      <div className="flex">
        <div className="w-[25%] text-center">
          <h3 className="font-semibold">Follow us</h3>
          <ul className="flex justify-between">
            <li className="flex justify-center items-center w-[25%]">
              <span className="h-7 w-7 rounded-full bg-blue-500 mx-auto flex justify-center items-center transition duration-200 hover:bg-white cursor-pointer">
                <FaFacebookF />
              </span>
            </li>
            <li className="flex justify-center items-center w-[25%]">
              <span className="h-7 w-7 rounded-full bg-green-700 mx-auto flex justify-center items-center transition duration-200 hover:bg-white cursor-pointer">
                <FaLinkedinIn />
              </span>
            </li>
            <li className="flex justify-center items-center w-[25%]">
              <span className="h-7 w-7 rounded-full bg-slate-300 mx-auto flex justify-center items-center transition duration-200 hover:bg-white cursor-pointer">
                <FaGithub />
              </span>
            </li>
            <li className="flex justify-center items-center w-[25%]">
              <span className="h-7 w-7 rounded-full bg-slate-300 mx-auto flex justify-center items-center transition duration-200 hover:bg-white cursor-pointer">
                <IoMailOutline />
              </span>
            </li>
          </ul>
          <button className="px-2 py-1 bg-pink-400 mt-10">Complain box</button>
        </div>
        <div className="w-[25%]">
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="w-[25%">
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>Shakil © 2024 All Rights Reserved. Designed by Shakil.</p>
      </div>
    </footer>
  );
};

export default Footer;
