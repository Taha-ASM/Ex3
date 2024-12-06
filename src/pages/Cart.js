import Mininav from "../components/Mininav";
import Navbar from "../components/Navbar";
import Searchdown from "../components/Searchdown";
import Login from "../components/Login";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { ReactComponent as CancelIcon } from "../img/icon/cancel.svg";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  async function getCartItmes() {
    const res = await fetch("https://dummyjson.com/products?limit=4");
    const cartItems = await res.json();
    setCartItems(cartItems.products);
  }

  useEffect(() => {
    getCartItmes();
  });

  return (
    <>
      <Mininav />
      <Navbar />
      <Searchdown />
      <div className="bg-white">
        <div className="container">
          <div className="text-lg breadcrumbs pt-5">
            <ul>
              <li className="text-black">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
          </div>
          <h1 className="text-5xl pt-3 text-black font-bold">Shopping Cart</h1>
          <div className="flex items-center bg-white shadow-md rounded-lg p-4">
            <table className="flex-1">
              <thead className="bg-[#f0f3f2]">
                <tr className="text-black flex items-center justify-between">
                  <th className="py-2 px-4 w-2/5">Item</th>
                  <th className="py-2 px-4 w-1/5">Price</th>
                  <th className="py-2 px-4 w-1/5">Qty</th>
                  <th className="py-2 px-4 w-1/5">Subtotal</th>
                  <th className="py-2 px-4 w-1/5"></th> {/* Cancel Icon */}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="text-black flex items-center justify-between"
                  >
                    <td className="py-2 px-4 w-2/5">
                      <div className="flex items-center">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-20 h-auto mr-4"
                        />
                        <h1>{item.title}</h1>
                      </div>
                    </td>
                    <td className="py-2 px-4 w-1/5 text-center">
                      ${item.price}
                    </td>
                    <td className="py-2 px-4 w-1/5">
                      <div className="flex items-center justify-center">
                        <button
                          className="cursor-pointer text-2xl text-black rounded-full w-10 h-10 flex items-center justify-center"
                          onClick={() => count > 0 && setCount(count - 1)}
                        >
                          -
                        </button>
                        <p className="text-xl text-black mx-2">{count}</p>
                        <button
                          className="cursor-pointer text-2xl text-black rounded-full w-10 h-10 flex items-center justify-center"
                          onClick={() => setCount(count + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-4 w-1/5 text-center">
                      ${item.price * count}
                    </td>
                    <td className="py-2 px-4 w-1/5">
                      <CancelIcon className="w-5 h-5" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-white shadow-md rounded-lg p-4 w-full lg:w-1/3">
              <div className="flex items-center justify-center py-6">
                <input
                  type="text"
                  placeholder="Enter coupon"
                  className="px-10 py-[0.67rem] bg-white text-black outline outline-[#08011a] text-lg"
                />
                <button className="px-10 py-4 bg-[#08011a] text-white text-md">
                  Apply
                </button>
              </div>
              <div className="bg-[#f0f3f2] p-9">
                <div className="border-b pb-2 mb-2">
                  <h2 className="text-2xl font-bold text-black">
                    Estimate Shipping and Tax
                  </h2>
                </div>
                <form className="space-y-4 text-black">
                  <div>
                    <label className="block text-md font-bold text-black">
                      Country
                    </label>
                    <select className="block w-full mt-1 bg-gray-100 shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3">
                      <option>United States</option>
                      <option>Palestian</option>
                      <option>Morocco</option>
                      <option>Canada</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black">
                      State/Province
                    </label>
                    <select className="block w-full mt-1 bg-gray-100 shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3">
                      <option>Select a region, state or province</option>
                      <option>Alaska</option>
                      <option>American Samoa</option>
                      <option>Arizone</option>
                      <option>Arkansas</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-md font-bold text-black">
                      ZIP/Postal Code
                    </label>
                    <input
                      type="text"
                      className="block w-full mt-1 bg-gray-100 shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
                    />
                  </div>
                  <div className="space-y-2 pt-7">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary"
                        checked
                      />
                      <label
                        htmlFor="flat"
                        className="ml-5 block text-sm font-medium text-black"
                      >
                        Flat: $10.00
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary"
                      />
                      <label
                        htmlFor="best"
                        className="ml-5 block text-sm font-mediu"
                      >
                        Best: $0.00
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="bg-[#e4e8ea] mt-4 border-t p-8 text-black ">
                <div className="flex justify-between text-lg">
                  <span>Subtotal:</span>
                  <span>$price</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Discount:</span>
                  <span>-$Discount</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Shipping:</span>
                  <span>$livror</span>
                </div>
                <div className="flex justify-between text-xl font-bold mt-2">
                  <span>Total:</span>
                  <span>$total</span>
                </div>
                <a href="./address" className="flex justify-center">
                  <button className="mt-10 bg-[#443c59] text-white px-40 py-7 rounded-full hover:bg-black ease-in duration-300">
                    View Cart
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Login />
      <Footer />
    </>
  );
}
