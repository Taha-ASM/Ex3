import React, { useState } from "react";
import Theme1Image from "../img/image/theme1.jpg";
import Theme2Image from "../img/image/theme2.jpg";
import Theme3Image from "../img/image/theme3.jpg";
import Theme4Image from "../img/image/theme4.jpg";
import ZaraImage from "../img/image/zara.png";
import SamsungImage from "../img/image/samsung.png";
import OppoImage from "../img/image/oppo.png";
import AsusImage from "../img/image/asus.png";
import HurlyImage from "../img/image/hurly.png";
import DgImage from "../img/image/DG.png";
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

export default function Header() {
  const slides = [
    {
      ads: "Shoes Fashion",
      text: "Come and Get it!",
      title: "BRAND NEW SHOES",
      button: "Shop Now",
      image: Theme1Image,
    },
    {
      ads: "Quick Fashion",
      text: "Fit Your Wardrobe",
      title: "WITH LUXURY ITEMS",
      button: "Shop Now",
      image: Theme2Image,
    },
    {
      ads: "Quick Offer",
      text: "Wooden Minimal Sofa",
      title: "EXTRA 50% OFF",
      button: "Shop Now",
      image: Theme3Image,
    },
    {
      ads: "Best Deals",
      text: "Home Workout Accessories",
      title: "PUSH THE LIMIT",
      button: "Shop Now",
      image: Theme4Image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 h-full lg:h-[40rem]">
          <div className="w-full lg:w-[20.88rem] h-[35rem] bg-white text-black border border-[#b6b6b6]">
            <ul className="space-y-2 mt-4 px-4">
              <div className="relative border-b border-gray-200 py-2">
                <div className="flex items-center gap-3 cursor-pointer">
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
              <div className="relative border-b border-gray-200 py-2">
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
              <div className="relative border-b border-gray-200 py-2">
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
              <li className="border-b border-gray-200 py-2">
                <a href="#" className="flex items-center gap-3">
                  <ShirtIcon className="w-4 h-4" />
                  Men's Fashion
                </a>
              </li>
              <li className="border-b border-gray-200 py-2">
                <a href="#" className="flex items-center gap-3">
                  <FaceIcon className="w-4 h-4" />
                  Girl's Fashion
                </a>
              </li>
              <li className="border-b border-gray-200 py-2">
                <a href="#" className="flex items-center gap-3">
                  <ProfileIcon className="w-4 h-4" />
                  Boy's Fashion
                </a>
              </li>
              <li className="border-b border-gray-200 py-2">
                <a href="#" className="flex items-center gap-3">
                  <HeartIcon className="w-4 h-4" />
                  Health & Household
                </a>
              </li>
              <div className="relative border-b border-gray-200 py-2">
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
              <li className="border-b border-gray-200 py-2">
                <a href="#" className="flex items-center gap-3">
                  <AndroidIcon className="w-4 h-4" />
                  Pet Supplies
                </a>
              </li>
              <li className="border-b border-gray-200 py-2">
                <a href="#" className="flex items-center gap-3">
                  <BasketballIcon className="w-4 h-4" />
                  Sports
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="flex items-center gap-3">
                  <ShieldIcon className="w-4 h-4" />
                  Best Seller
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            className="flex-1 flex flex-col justify-center bg-cover bg-center duration-500 p-16 mt-10 lg:p-16 lg:mt-0 space-y-4 text-white relative"
          >
            <p className="text-sm bg-black text-white rounded-lg w-28 text-center py-2 font-bold">
              {slides[currentSlide].ads}
            </p>
            <p className="text-4xl text-[#cfc7bb]">
              {slides[currentSlide].title}
            </p>
            <p className="text-6xl font-bold pb-7 text-[#3a3d5a]">
              {slides[currentSlide].text}
            </p>
            <button className="bg-[#fd6c69] text-white px-4 py-4 rounded-full mt-4 w-36 transition duration-300 ease-in-out hover:bg-[#e74c3c]">
              {slides[currentSlide].button}
            </button>
            <div className="flex justify-center absolute bottom-0 left-0 right-0 mb-4 pb-5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentSlide ? "bg-black" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-20 w-full py-20">
          <img
            src={ZaraImage}
            alt=""
            className="w-40 h-20 opacity-50 hover:opacity-100 transition-opacity duration-300 rounded-lg mb-6 sm:mb-0"
          />
          <img
            src={SamsungImage}
            alt=""
            className="w-40 h-40 opacity-50 hover:opacity-100 transition-opacity duration-300 rounded-lg mb-6 sm:mb-0"
          />
          <img
            src={OppoImage}
            alt=""
            className="w-40 h-40 opacity-50 hover:opacity-100 transition-opacity duration-300 rounded-lg mb-6 sm:mb-0"
          />
          <img
            src={AsusImage}
            alt=""
            className="w-40 h-20 opacity-50 hover:opacity-100 transition-opacity duration-300 rounded-lg mb-6 sm:mb-0"
          />
          <img
            src={HurlyImage}
            alt=""
            className="w-64 h-20 opacity-50 hover:opacity-100 transition-opacity duration-300 rounded-lg mb-6 sm:mb-0"
          />
          <img
            src={DgImage}
            alt=""
            className="w-40 h-20 opacity-50 hover:opacity-100 transition-opacity duration-300 rounded-lg mb-6 sm:mb-0"
          />
        </div>
      </div>
    </div>
  );
}
