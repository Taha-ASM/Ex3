import React, { useState } from "react";
import { ReactComponent as BurgerIcon } from "../img/icon/burger.svg";
import { ReactComponent as SearchIcon } from "../img/icon/search.svg";
import DropmakeupImage from "../img/image/dropmakeup.jpg";
import { ReactComponent as ArrowIcon } from "../img/icon/arrow.svg";
import { ReactComponent as FaceIcon } from "../img/icon/face.svg";
import { ReactComponent as BluetoothIcon } from "../img/icon/bluetooth.svg";
import { ReactComponent as ShirtIcon } from "../img/icon/shirt.svg";
import { ReactComponent as ProfileIcon } from "../img/icon/profile.svg";
import { ReactComponent as HeartIcon } from "../img/icon/heart.svg";
import { ReactComponent as HouseIcon } from "../img/icon/house.svg";
import { ReactComponent as AndroidIcon } from "../img/icon/android.svg";
import { ReactComponent as BasketballIcon } from "../img/icon/basketball.svg";
import { ReactComponent as ShieldIcon } from "../img/icon/shield.svg";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#443c59] p-3">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-20 bg-[#fd6c69] rounded-t-lg relative top-3 px-10 py-5">
          <div>
            <h1 className="text-white text-xl flex items-center">
              All Departments
            </h1>
            <p className="text-[#f0e1e1] text-sm">Total 1059 Products</p>
          </div>

          <div className="dropdown">
            <label className="swap swap-rotate">
              <input type="checkbox" />
              <BurgerIcon className="swap-off fill-white" />
              <svg
                className="swap-on fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white text-black font-semibold w-80"
            >
              <div className="relative border-b border-gray-200 py-4 px-5 hover:bg-[#c5c5c5] hover:rounded-xl">
                <div className="flex items-center gap-3  cursor-pointer">
                  <FaceIcon className="w-4 h-4" />
                  <div
                    className="flex items-center justify-between w-full"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>Beauty</span>
                    <ArrowIcon className="w-4 h-4 ml-2" />
                  </div>
                </div>
                {isOpen && (
                  <div className="absolute left-0 mt-2 z-20 w-64 h-96 flex">
                    <div className="w-full h-full relative">
                      <img
                        src={DropmakeupImage}
                        alt="Makeup"
                        className="w-full h-full object-cover rounded-box"
                      />
                    </div>
                    <ul className="menu p-2 shadow-lg rounded-box bg-white bg-opacity-50 backdrop-blur-sm absolute left-0 z-10 w-64 h-full">
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Skin Care</a>
                      </li>
                      <li>
                        <a href="#">Hair Care</a>
                      </li>
                      <li>
                        <a href="#">Fragrance</a>
                      </li>
                      <li>
                        <a href="#">Foot & Hand Care</a>
                      </li>
                      <li>
                        <a href="#">Tools & Accessories</a>
                      </li>
                      <li>
                        <a href="#">Shave & Hair Removal</a>
                      </li>
                      <li>
                        <a href="#">Personal Care</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative border-b border-gray-200 py-4 px-5 hover:bg-[#c5c5c5] hover:rounded-xl">
                <div className="flex items-center gap-3 cursor-pointer">
                  <BluetoothIcon className="w-4 h-4" />
                  <div
                    className="flex items-center justify-between w-full"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>Beauty</span>
                    <ArrowIcon className="w-4 h-4 ml-2" />
                  </div>
                </div>

                {isOpen && (
                  <div className="absolute left-0 mt-2 z-20 w-64 h-96 flex">
                    <div className="w-full h-full relative">
                      <img
                        src={DropmakeupImage}
                        alt="Makeup"
                        className="w-full h-full object-cover rounded-box"
                      />
                    </div>
                    <ul className="menu p-2 shadow-lg rounded-box bg-white bg-opacity-50 backdrop-blur-sm absolute left-0 z-10 w-64 h-full">
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Skin Care</a>
                      </li>
                      <li>
                        <a href="#">Hair Care</a>
                      </li>
                      <li>
                        <a href="#">Fragrance</a>
                      </li>
                      <li>
                        <a href="#">Foot & Hand Care</a>
                      </li>
                      <li>
                        <a href="#">Tools & Accessories</a>
                      </li>
                      <li>
                        <a href="#">Shave & Hair Removal</a>
                      </li>
                      <li>
                        <a href="#">Personal Care</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative border-b border-gray-200 py-4 px-5 hover:bg-[#c5c5c5] hover:rounded-xl">
                <div className="flex items-center gap-3 cursor-pointer">
                  <ShirtIcon className="w-4 h-4" />
                  <div
                    className="flex items-center justify-between w-full"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>Beauty</span>
                    <ArrowIcon className="w-4 h-4 ml-2" />
                  </div>
                </div>

                {isOpen && (
                  <div className="absolute left-0 mt-2 z-20 w-64 h-96 flex">
                    <div className="w-full h-full relative">
                      <img
                        src={DropmakeupImage}
                        alt="Makeup"
                        className="w-full h-full object-cover rounded-box"
                      />
                    </div>
                    <ul className="menu p-2 shadow-lg rounded-box bg-white bg-opacity-50 backdrop-blur-sm absolute left-0 z-10 w-64 h-full">
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Skin Care</a>
                      </li>
                      <li>
                        <a href="#">Hair Care</a>
                      </li>
                      <li>
                        <a href="#">Fragrance</a>
                      </li>
                      <li>
                        <a href="#">Foot & Hand Care</a>
                      </li>
                      <li>
                        <a href="#">Tools & Accessories</a>
                      </li>
                      <li>
                        <a href="#">Shave & Hair Removal</a>
                      </li>
                      <li>
                        <a href="#">Personal Care</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <li className="border-b border-gray-200 py-2 hover:bg-[#c5c5c5] hover:rounded-xl">
                <a href="#" className="flex items-center gap-3">
                  <ShirtIcon className="w-4 h-4" />
                  Men's Fashion
                </a>
              </li>
              <li className="border-b border-gray-200 py-2 hover:bg-[#c5c5c5] hover:rounded-xl">
                <a href="#" className="flex items-center gap-3">
                  <FaceIcon className="w-4 h-4" />
                  Girl's Fashion
                </a>
              </li>
              <li className="border-b border-gray-200 py-2 hover:bg-[#c5c5c5] hover:rounded-xl">
                <a href="#" className="flex items-center gap-3">
                  <ProfileIcon className="w-4 h-4" />
                  Boy's Fashion
                </a>
              </li>
              <li className="border-b border-gray-200 py-2 hover:bg-[#c5c5c5] hover:rounded-xl">
                <a href="#" className="flex items-center gap-3">
                  <HeartIcon className="w-4 h-4" />
                  Health & Household
                </a>
              </li>
              <div className="relative border-b border-gray-200 py-4 px-5 hover:bg-[#c5c5c5] hover:rounded-xl">
                <div className="flex items-center gap-3 cursor-pointer">
                  <HouseIcon className="w-4 h-4" />
                  <div
                    className="flex items-center justify-between w-full"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>Beauty</span>
                    <ArrowIcon className="w-4 h-4 ml-2" />
                  </div>
                </div>

                {isOpen && (
                  <div className="absolute left-0 mt-2 z-20 w-64 h-96 flex">
                    <div className="w-full h-full relative">
                      <img
                        src={DropmakeupImage}
                        alt="Makeup"
                        className="w-full h-full object-cover rounded-box"
                      />
                    </div>
                    <ul className="menu p-2 shadow-lg rounded-box bg-white bg-opacity-50 backdrop-blur-sm absolute left-0 z-10 w-64 h-full">
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Skin Care</a>
                      </li>
                      <li>
                        <a href="#">Hair Care</a>
                      </li>
                      <li>
                        <a href="#">Fragrance</a>
                      </li>
                      <li>
                        <a href="#">Foot & Hand Care</a>
                      </li>
                      <li>
                        <a href="#">Tools & Accessories</a>
                      </li>
                      <li>
                        <a href="#">Shave & Hair Removal</a>
                      </li>
                      <li>
                        <a href="#">Personal Care</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <li className="border-b border-gray-200 py-2 hover:bg-[#c5c5c5] hover:rounded-xl">
                <a href="#" className="flex items-center gap-3">
                  <AndroidIcon className="w-4 h-4" />
                  Pet Supplies
                </a>
              </li>
              <li className="border-b border-gray-200 py-2 hover:bg-[#c5c5c5] hover:rounded-xl">
                <a href="#" className="flex items-center gap-3">
                  <BasketballIcon className="w-4 h-4" />
                  Sports
                </a>
              </li>
              <li className="py-2 hover:bg-[#c5c5c5] hover:rounded-xl">
                <a href="#" className="flex items-center gap-3">
                  <ShieldIcon className="w-4 h-4" />
                  Best Seller
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="SearchBar flex">
          <div className="flex items-center w-96 h-14 border rounded-l-lg px-4 py-2 shadow-md bg-white">
            <SearchIcon className="w-5 h-5 text-gray-500 mr-6 cursor-pointer" />
            <input
              className="flex-1 focus:outline-none text-black bg-white"
              type="text"
              placeholder="Search for Products"
            />
          </div>
          <button className="bg-[#ff6a68] hover:bg-[#0a0016] ease-in duration-300 text-white px-4 pl-5 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
