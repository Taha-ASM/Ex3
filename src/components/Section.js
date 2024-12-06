import { useState, useEffect } from "react";
import { ReactComponent as StarIcon } from "../img/icon/star.svg";
import { ReactComponent as HeartIcon } from "../img/icon/heart.svg";
import React from "react";

export default function App() {
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
    <div className="p-6 bg-white min-h-screen">
      <div className="container">
        <div className="Trending Products">
          <div className="flex items-center mb-4">
            <span className="h-4 w-4 bg-purple-500 rounded-full inline-block mr-2"></span>
            <h1 className="text-3xl text-black font-bold inline-block">
              Trending Products
            </h1>
          </div>
          <div className="w-full h-0.5 bg-gray-200 mb-4"></div>
          <div className="grid grid-cols-10 gap-6">
            <div className="col-span-10 md:col-span-3 p-4 bg-white rounded-lg drop-shadow shadow-xl border-2 border-black cursor-pointer">
              <a href={"./product?id=" + datas.id}>
                <h1 className="text-center pt-9 pb-5 text-black text-2xl">
                  OFFER ENDS AT
                </h1>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                  <div className="flex flex-col p-2 bg-[#f2f2f3] rounded-box text-black text-sm">
                    <span className="countdown font-mono text-3xl">
                      <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col p-2 bg-[#f2f2f3] rounded-box text-black text-sm">
                    <span className="countdown font-mono text-3xl">
                      <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col p-2 bg-[#f2f2f3] rounded-box text-black text-sm">
                    <span className="countdown font-mono text-3xl">
                      <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col p-2 bg-[#f2f2f3] rounded-box text-black text-sm">
                    <span className="countdown font-mono text-3xl">
                      <span style={{ "--value": 36 }}></span>
                    </span>
                    sec
                  </div>
                </div>
                {datas[0] && (
                  <div
                    key={datas[0].id}
                    className="mt-8 p-4 flex flex-col items-center"
                  >
                    <img
                      src={datas[0].thumbnail}
                      alt={datas[0].title}
                      className="w-64 h-64 object-cover rounded-lg bg-[#f2f2f3]"
                    />
                    <div className="flex flex-col mt-4">
                      <div className="flex gap-0.5 pb-3">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className="w-4 h-4 fill-[#ebc611]"
                          />
                        ))}
                        <p className="text-black text-xs ml-2">
                          {datas.rating}
                        </p>
                      </div>
                      <h3 className="font-semibold text-xl text-black">
                        {datas[0].title}
                      </h3>
                      <p className="text-[#fd6c69] font-bold text-xl">
                        ${datas[0].price}
                      </p>
                      <div className="flex items-center justify-between py-3">
                        <p className="text-sm text-gray-500 mt-1">
                          Stock: {datas[0].stock}
                        </p>
                        <p className="text-sm text-gray-500">
                          Sold: {datas[0].sold}
                        </p>
                      </div>
                      <progress
                        className="progress progress-primary  w-full"
                        value="40"
                        max="100"
                      ></progress>
                    </div>
                  </div>
                )}
              </a>
            </div>
            <div className="col-span-10 md:col-span-7 grid grid-cols-2 gap-4">
              {datas.slice(1, 9).map((product) => (
                <a href={"./product?id=" + product.id} className="flex">
                  <div>
                    <div className="relative">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-auto h-40 object-cover rounded-lg bg-[#f2f2f3]"
                      />
                      <div className="absolute top-0 right-0 mt-2 mr-2">
                        <HeartIcon className="w-9 h-9 rounded-full bg-white hover:bg-[#b6b6b6] ease-in duration-300 p-2" />
                      </div>
                    </div>
                  </div>
                  <div
                    key={product.id}
                    className="flex space-x-4 p-4 bg-white cursor-pointer"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-xl text-black hover:underline hover:text-[#545b90]">
                        {product.title}
                      </h3>
                      <p className="text-[#fd6c69] font-bold">
                        ${product.price}
                      </p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className="w-4 h-4 fill-[#ebc611]"
                          />
                        ))}
                        <p className="text-[#ebc611] text-xs ml-2">
                          {product.rating}
                        </p>
                      </div>
                      <p className="text-sm text-black">{product.stock} left</p>
                      <p className="text-sm text-black">{product.stock} sold</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="Featured Products py-20">
          <div className="flex items-center mb-4">
            <span className="h-4 w-4 bg-purple-500 rounded-full inline-block mr-2"></span>
            <h1 className="text-3xl text-black font-bold inline-block">
              Featured Products
            </h1>
          </div>
          <div className="w-full h-0.5 bg-gray-200 mb-4"></div>
          <div className="grid grid-rows-10 gap-6">
            <div className="row-span-10 md:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {datas.slice(0, 8).map((product) => (
                <a href={"/product?id=" + product.id} key={product.id}>
                  <div className="flex flex-col p-4 bg-white rounded-lg drop-shadow shadow-lg cursor-pointer w-full lg:w-auto">
                    <div className="relative">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-96 object-cover rounded-lg bg-[#f2f2f3]"
                      />
                      <div className="absolute top-0 right-0 mt-2 mr-2">
                        <HeartIcon className="w-9 h-9 rounded-full bg-white hover:bg-[#b6b6b6] ease-in duration-300 p-2" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-semibold text-xl text-black">
                        {product.title}
                      </h3>
                      <p className="text-[#fd6c69] font-bold">
                        ${product.price}
                      </p>
                      <div className="flex gap-0.5 items-center">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className="w-4 h-4 fill-[#ebc611]"
                          />
                        ))}
                        <p className="text-[#ebc611] text-xs ml-2">
                          {product.rating}
                        </p>
                      </div>
                      <p className="text-sm text-black">{product.stock} left</p>
                      <p className="text-sm text-black">{product.sold} sold</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
