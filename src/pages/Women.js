import { ReactComponent as StarIcon } from "../img/icon/star.svg";
import { ReactComponent as HeartIcon } from "../img/icon/heart.svg";
import { useState, useEffect } from "react";
import Mininav from "../components/Mininav";
import Navbar from "../components/Navbar";
import Searchdown from "../components/Searchdown";
import Ads from "../components/Ads";
import Categorie from "../components/Categorie";
import Login from "../components/Login";
import Footer from "../components/Footer";

export default function Women() {
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
    <div className="bg-white">
      <Mininav />
      <Navbar />
      <Searchdown />
      <div className="container mx-auto flex py-8">
        <div className="w-1/4 pr-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Category</h2>
            <ul className="space-y-2">
              {["Bags", "Beauty", "Clothing", "Jewelry", "Shoes"].map(
                (category) => (
                  <li key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-gray-600"
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Activity</h2>
            <ul className="space-y-2">
              {["Athletic", "Lounge", "Outdoor", "Travel", "Urban"].map(
                (activity) => (
                  <li key={activity} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-gray-600"
                    />
                    <span className="ml-2 text-gray-700">{activity}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Brands</h2>
            <ul className="space-y-2">
              {["Nike", "Louis Vuitton", "Hermes", "Gucci", "Zara"].map(
                (brand) => (
                  <li key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-gray-600"
                    />
                    <span className="ml-2 text-gray-700">{brand}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="w-3/4">
          <div className="breadcrumbs text-sm mb-7">
            <ul>
              <li>
                <a href="#" className="text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Documents</a>
              </li>
            </ul>
          </div>
          <h1 className="text-5xl text-black font-bold mb-4">Women</h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
            repellat voluptatum, quos deleniti ut esse sequi nobis harum et!
          </p>
          <div className="grid grid-cols-3 gap-8">
            {datas.slice(1, 9).map((product) => (
              <a
                href={"./product?id=" + product.id}
                key={product.id}
                className="block"
              >
                <div className="relative">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <HeartIcon className="absolute top-2 right-2 w-8 h-8 p-1 bg-white rounded-full" />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-red-500 font-bold">${product.price}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className="fill-yellow-400 w-3 h-3"
                      />
                    ))}
                    <span className="ml-2 text-yellow-400">
                      {product.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{product.stock} left</p>
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
