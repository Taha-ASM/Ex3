import Mininav from "../components/Mininav";
import Navbar from "../components/Navbar";
import Searchdown from "../components/Searchdown";
import Ads from "../components/Ads";
import Categorie from "../components/Categorie";
import Login from "../components/Login";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ReactComponent as HeartIcon } from "../img/icon/heart.svg";
import { ReactComponent as StarIcon } from "../img/icon/star.svg";

export default function Shop() {
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
    <div>
      <Mininav />
      <Navbar />
      <Searchdown />
      <div className="bg-white py-20">
        <div className="container">
          <div className="flex items-center mb-4">
            <span className="h-4 w-4 bg-purple-500 rounded-full inline-block mr-2"></span>
            <h1 className="text-3xl text-black font-bold inline-block">
              Related Products
            </h1>
          </div>
          <div className="w-full h-0.5 bg-gray-200 mb-4"></div>
          <div className="grid grid-cols-4 gap-6">
            {datas.map((product) => (
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
                    <p className="text-[#fd6c69] font-bold">${product.price}</p>
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
      <Ads />
      <Categorie />
      <Login />
      <Footer />
    </div>
  );
}
