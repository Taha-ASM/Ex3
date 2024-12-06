import Mininav from "../components/Mininav";
import Navbar from "../components/Navbar";
import Searchdown from "../components/Searchdown";
import Login from "../components/Login";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Address() {
  const [cartItems, setCartItems] = useState([]);

  async function getCartItmes() {
    const res = await fetch("https://dummyjson.com/products?limit=4");
    const cartItems = await res.json();
    setCartItems(cartItems.products);
  }

  useEffect(() => {
    getCartItmes();
  });
  return (
    <div>
      <Mininav />
      <Navbar />
      <Searchdown />
      <div className="bg-white">
        <div className="container flex pt-10">
          <div className="flex bg-[#e4e8ea] flex-col flex-1 drop-shadow shadow-2xl">
            <h1 className="text-black text-5xl pt-10 pl-10">Shipping Adress</h1>
            <div className="p-10">
              <div>
                <label className="flex items-center gap-2 text-black font-bold">
                  Email Adress<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="mt-6">
                <label className="flex items-center gap-2 text-black font-bold">
                  First Name<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="mt-6">
                <label className="flex items-center gap-2 text-black font-bold">
                  Last Name<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="mt-6">
                <label className="flex items-center gap-2 text-black font-bold">
                  Company Name<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="flex flex-col mt-6">
                <label className="flex items-center gap-2 text-black font-bold">
                  Street Address<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="mt-6">
                <label className="flex items-center gap-2 text-black font-bold">
                  City<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="mt-6">
                <label className="flex items-center gap-2 text-black font-bold">
                  State/Province<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="mt-6">
                <label className="flex items-center gap-2 text-black font-bold">
                  Zip/Postal Code<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="mt-6">
                <label className="block text-md font-bold text-black">
                  Country<span className="text-red-400">*</span>
                </label>
                <select className="block w-full text-black mt-1 bg-gray-100 shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3">
                  <option>Select a region, state or province</option>
                  <option>Alaska</option>
                  <option>American Samoa</option>
                  <option>Arizone</option>
                  <option>Arkansas</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="mt-6">
                <label className="flex items-center gap-2 text-black font-bold">
                  Phone Number<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="grow bg-white w-full p-2 text-black mt-2"
                />
              </div>
              <div className="mt-6 text-black">
                <label className="flex items-center gap-2">
                  Order Notes (Optional)<span className="text-red-400">*</span>
                </label>
                <textarea
                  className="textarea bg-white w-full p-2 text-black mt-2"
                  placeholder="Notes about order. e.g. special notes for delivery"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <label className="cursor-pointer flex items-center gap-6">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-info"
                  />
                  <span className="label-text text-black text-md">
                    Creat an Account?
                  </span>
                </label>
              </div>
              <div>
                <h1 className="text-black text-5xl font-bold mt-20">
                  Shipping Methods
                </h1>
                <div className="flex items-center mt-6 gap-6">
                  <input
                    type="radio"
                    name="radio-7"
                    className="radio radio-info"
                  />
                  <span className="label-text text-black text-md">
                    $5.00 Flat Rate
                  </span>
                </div>
                <button className="bg-[#ff6a68] text-white hover:bg-black ease-in duration-300 w-full py-6 rounded-full flex items-center justify-center  mt-6">
                  Place Order
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 border-t p-8 ">
            <h1 className="text-6xl font-bold text-black">Order Summary</h1>
            <div className="flex  mt-10">
              <div className="flex flex-1 flex-col text-lg font-semibold">
                <span>Subtotal:</span>
                <span>Discount:</span>
                <span>Shipping:</span>
                <span className="mt-16">Total:</span>
              </div>
              <div className="flex flex-1 flex-col text-lg font-semibold text-black">
                <span>$price</span>
                <span>-$Discount</span>
                <span>$livror</span>
                <span className="text-5xl mt-16">$total</span>
              </div>
            </div>
            <hr className="mt-10 border-b border-black" />
            <div>
              {cartItems.map((item) => (
                <div className="flex mt-10">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-auto"
                  />
                  <div className="ml-4">
                    <h1 className="text-black text-xl font-semibold">
                      {item.title}
                    </h1>
                    <p className="text-md">${item.price}</p>
                    <p>x2</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Login />
      <Footer />
    </div>
  );
}
