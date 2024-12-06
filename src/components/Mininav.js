import React from "react";
import { ReactComponent as DownIcon } from "../img/icon/down.svg";

export default function Mininav() {
  return (
    <div className="bg-white p-3 text-black font-light ">
      <div className="container lg:flex lg:items-center lg:justify-between">
        <div className="flex-1">
          <ul className="flex gap-10">
            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="#">Featured Products</a>
            </li>
            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="#">Whishlist</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-end">
          <ul className="flex items-center gap-10">
            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="#">Sign Up</a>
            </li>
            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="#">My Account</a>
            </li>
            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="#">Order Tracking</a>
            </li>
            <div>
              <div className="relative group inline-block">
                <div className="flex items-center">
                  <summary className="m-1 cursor-pointer hover:text-[#6779ed] ease-in-out duration-300">
                    USD
                  </summary>
                  <DownIcon />
                </div>
                <ul className="p-0.5 shadow menu dropdown-content bg-white rounded-md w-16 hidden group-hover:block absolute z-10">
                  <li className="active bg-[#ced1df] hover:text-[#6779ed] ease-in-out duration-300">
                    <a href="#">USD</a>
                  </li>
                  <li className="hover:bg-[#ced1df] hover:text-[#6779ed] ease-in-out duration-300">
                    <a href="#">EURO</a>
                  </li>
                  <li className="hover:bg-[#ced1df] hover:text-[#6779ed] ease-in-out duration-300">
                    <a href="#">GBP</a>
                  </li>
                  <li className="hover:bg-[#ced1df] hover:text-[#6779ed] ease-in-out duration-300">
                    <a href="#">IDR</a>
                  </li>
                </ul>
              </div>
              <div className="relative group inline-block ml-4">
                <div className="flex items-center">
                  <summary className="m-1 cursor-pointer hover:text-[#6779ed] ease-in-out duration-300">
                    English
                  </summary>
                  <DownIcon />
                </div>
                <ul className="p-0.5 shadow menu dropdown-content bg-white rounded-md w-20 hidden group-hover:block absolute z-10">
                  <li className="active bg-[#ced1df] hover:text-[#6779ed] ease-in-out duration-300">
                    <a href="#">English</a>
                  </li>
                  <li className="hover:bg-[#ced1df] hover:text-[#6779ed] ease-in-out duration-300">
                    <a href="#">Arabic</a>
                  </li>
                  <li className="hover:bg-[#ced1df] hover:text-[#6779ed] ease-in-out duration-300">
                    <a href="#">Spain</a>
                  </li>
                  <li className="hover:bg-[#ced1df] hover:text-[#6779ed] ease-in-out duration-300">
                    <a href="#">German</a>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
