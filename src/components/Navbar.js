import { useState, useEffect } from "react";
import { ReactComponent as CancelIcon } from "../img/icon/cancel.svg";
import { ReactComponent as DownIcon } from "../img/icon/down.svg";
import { ReactComponent as HeartIcon } from "../img/icon/heart.svg";
import { ReactComponent as CartIcon } from "../img/icon/cart.svg";
import { ReactComponent as RightIcon } from "../img/icon/right.svg";
import LogoImage from "../img/image/Logo.png";
import DropdownImage from "../img/image/dropdown.webp";

export default function Navbar() {
  const [datas, setDatas] = useState([]);

  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setDatas(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <nav className="bg-white p-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a href="./home">
            <img
              src={LogoImage}
              alt="Logo"
              className="w-36 h-auto cursor-pointer"
            />
          </a>
          <ul className="w-full flex items-center gap-8 text-black">
            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="./home">Home</a>
            </li>
            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="./Shop">Shop</a>
            </li>

            <li className="group">
              <div className="flex items-center cursor-pointer">
                <a href="./Women">Women</a>
                <DownIcon />
              </div>
              <div className="absolute left-0 mt-2 w-full bg-[#f0f3f2] shadow-lg rounded-md hidden group-hover:block z-10">
                <div className="flex">
                  <div className="flex-1 p-24 grid grid-cols-4 gap-6">
                    <div>
                      <h2 className="font-bold mb-3">WOMEN'S CLOTHING</h2>
                      <ul className="space-y-2">
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Dresses
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Tops & Tees
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Jackets & Coats
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Pants & Capris
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Sweaters
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Costumes
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Hoodies & Sweatshirts
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Pajamas & Robes
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Shorts
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Swimwear
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="font-bold mb-3">JEWELRY</h2>
                      <ul className="space-y-2">
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Accessories
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Bags & Purses
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Necklaces
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Rings
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Earrings
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Bracelets
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Body Jewelry
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="font-bold mb-3">BEAUTY</h2>
                      <ul className="space-y-2">
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Bath Accessories
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Makeup & Cosmetics
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Skin Care
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Hair Care
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Essential Oils
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Fragrances
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Soaps & Bath Bombs
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Face Masks & Coverings
                        </li>
                        <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                          Spa Kits & Gifts
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="font-bold mb-3">TOP BRANDS</h2>
                      <div className="flex gap-10">
                        <ul className="space-y-2">
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Louis Vuitton
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Gucci
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Tiffany & Co.
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            H&M
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Chanel
                          </li>
                        </ul>
                        <ul className="space-y-2">
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Nike
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Hermes
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Zalando
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Zara
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Cartier
                          </li>
                          <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer py-2 rounded-md">
                            Hurley
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center gap-4 hover:bg-black hover:text-white hover:fill-white ease-in-out duration-500 p-2 mt-5 rounded-md cursor-pointer">
                        View all brands
                        <RightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-2 p-24 flex justify-center items-center bg-[#f0f3f2]">
                    <div className="relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                      <img
                        src={DropdownImage}
                        alt="Dropdown"
                        className="w-72 h-96 object-cover"
                      />
                      <div className="absolute top-0 mt-28 left-0 w-full h-full flex flex-col justify-center items-center">
                        <h1 className="text-3xl text-center font-bold text-white z-10">
                          MOST WANTED!
                        </h1>
                        <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 z-10">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="hover:text-[#6779ed] ease-in-out duration-300">
              <a href="./Men">Men</a>
            </li>
            <li className="flex items-center hover:text-[#6779ed] ease-in-out duration-300">
              <a href="./Sports" className="flex-grow">
                Sports
              </a>
              <span className="mb-3.5 badge badge-sm bg-[#FA7070] text-white border border-[#FA7070]">
                New!
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="indicator flex gap-5">
            <span className="indicator-item badge text-white">0</span>
            <div className="grid w-7 h-7 place-items-center cursor-pointer">
              <HeartIcon />
            </div>
            <span className="indicator-item badge text-white mr-12">0</span>
            <div className="grid w-7 h-7 place-items-center cursor-pointer">
              <CartIcon />
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-hover dropdown-left dropdown-bottom ">
              <div tabIndex={0} role="button" className="ml-7">
                <p className="text-sm">Total: </p>
                <h1 className="text-2xl text-black">$0.00</h1>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 rounded-box w-96"
              >
                <div>
                  <h1 className="text-2xl p-3 text-black">
                    5 item in the Cart
                  </h1>
                  <div className="w-full h-0.5 bg-gray-300 mb-4"></div>

                  <div className="overflow-y-auto h-56 w-full">
                    {datas.slice(0, 5).map((product) => (
                      <a href={"/product?id=" + product.id} key={product.id}>
                        <div className="flex p-4 mb-5 bg-white rounded-lg drop-shadow shadow-lg h-28">
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-auto h-auto object-cover rounded-lg bg-[#f2f2f3]"
                          />
                          <div className="flex flex-col ml-1">
                            <h3 className="font-semibold text-xl text-black">
                              {product.title}
                            </h3>
                            <p className="text-[#fd6c69] font-bold">
                              ${product.price}
                            </p>
                          </div>
                          <CancelIcon className="w-4 h-4" />
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-4">
                    <div className="pl-5">
                      <h1>Total:</h1>
                      <h1>$1,622.95</h1>
                    </div>
                    <div className="flex flex-col m-2 gap-4">
                      <button className="bg-[#ff6a68] text-white px-6 py-[0.825rem] rounded-full hover:bg-black ease-in duration-300">
                        Check out
                      </button>
                      <a href="./Cart">
                        <button className="bg-[#443c59] text-white px-6 py-[0.825rem] rounded-full hover:bg-black ease-in duration-300 w-full">
                          View Cart
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
