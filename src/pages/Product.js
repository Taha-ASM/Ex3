import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Mininav from "../components/Mininav";
import Navbar from "../components/Navbar";
import Searchdown from "../components/Searchdown";
import Ads from "../components/Ads";
import Categorie from "../components/Categorie";
import Login from "../components/Login";
import Footer from "../components/Footer";
import { ReactComponent as StarIcon } from "../img/icon/star.svg";
import { ReactComponent as HeartIcon } from "../img/icon/heart.svg";
import { ReactComponent as ShareIcon } from "../img/icon/share.svg";
import { ReactComponent as ArrowIcon } from "../img/icon/arrow.svg";

export default function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [data, setData] = useState();
  const [items, setItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = [40, 41, 42, 43];
  const colors = [
    { colorCode: "#576571", name: "color1" },
    { colorCode: "#549ffe", name: "color2" },
    { colorCode: "#1bd1a0", name: "color3" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=10");
        const products = await res.json();
        setAllProducts(products.products);
        const product = products.products.find((i) => i.id == id) || null;
        setData(product);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=4");
        const products = await res.json();
        setItems(products.products);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    }

    fetchItems();
  }, []);

  if (data === "makaynch") return <p>your product is not exist</p>;
  if (data === undefined) return <p>loading...</p>;
  return (
    <>
      <Mininav />
      <Navbar />
      <Searchdown />
      <div className="bg-white">
        <div className="container">
          <div>
            <div className="text-lg breadcrumbs pt-10">
              <ul>
                <li className="text-black">
                  <a href="#">Home</a>
                </li>
                <li className="text-black">
                  <a href="#">exemple</a>
                </li>
                <li>exemple</li>
              </ul>
            </div>
            <div className="flex py-12">
              <div className="md:w-1/2 image-product flex items-center justify-center flex-col relative">
                <div className="relative w-full md:w-4/5">
                  <h1 className="absolute top-4 right-4 bg-black text-white px-2 py-1 rounded-full">
                    {data.discountPercentage}%
                  </h1>
                  <img
                    src={data.thumbnail}
                    alt={data.name}
                    className="w-full bg-[#e1fdfd]"
                  />
                </div>
                <div className="carousel gap-10 pt-10">
                  <div className="carousel-item w-44">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                      alt="image-changer"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="carousel-item w-44">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                      alt="image-changer"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="carousel-item w-44">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                      alt="image-changer"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 info-product md:pl-4">
                <div className="top flex flex-col items-start gap-2">
                  <h1 className="text-black text-4xl md:text-5xl font-bold">
                    {data.title}
                  </h1>
                  <div className="flex items-center gap-1 pt-4">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className="w-4 h-4 fill-yellow-400"
                      />
                    ))}

                    <p className="ml-1 text-xs">{data.rating} Reviews</p>
                    <button className="text-black text-lg ml-3">
                      Add Your Review
                    </button>
                  </div>
                  <div className="flex items-center gap-4 ">
                    <p className="text-lg text-[#1bd1a0] font-bold">In Stock</p>
                    <p className="text-xs">SKU-{data.sku}</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <p className="text-[#ff7066] text-2xl py-5 font-bold">
                      ${data.price}
                    </p>
                    <p className="line-through text-lg">$190.90</p>
                  </div>
                  <div>
                    <h1 className="text-black text-xl font-semibold">
                      Colors:
                    </h1>
                    <div className="flex gap-2 pt-2.5">
                      {colors.map((color) => (
                        <div
                          key={color.name}
                          className={`rounded-full w-10 h-10 cursor-pointer ${
                            selectedColor === color.name
                              ? "outline outline-offset-1 outline-2 outline-[#8f8f8f]"
                              : ""
                          }`}
                          style={{ backgroundColor: color.colorCode }}
                          onClick={() => setSelectedColor(color.name)}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="py-5">
                    <h1 className="text-black text-xl font-semibold">Size:</h1>
                    <div className="flex text-black gap-2 pt-2.5">
                      {sizes.map((size) => (
                        <p
                          key={size}
                          className={`cursor-pointer bg-[#f2f7f9] hover:bg-[#bbeafa] rounded-full text-center w-10 h-10 flex items-center justify-center ${
                            selectedSize === size
                              ? "outline outline-offset-1 outline-2 outline-[#8f8f8f]"
                              : ""
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mid flex items-center gap-2 py-7">
                    <div className="flex items-center gap-4 border p-2">
                      <button
                        className="cursor-pointer text-2xl text-black bg-[#f2f7f9] hover:bg-[#bbeafa] rounded-full text-center w-10 h-10 flex items-center justify-center"
                        onClick={() => count > 0 && setCount(count - 1)}
                      >
                        -
                      </button>
                      <p className="text-xl text-black">{count}</p>
                      <button
                        className="cursor-pointer text-2xl text-black bg-[#f2f7f9] hover:bg-[#bbeafa] rounded-full text-center w-10 h-10 flex items-center justify-center"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button className="bg-[#fd6c69] text-white py-4 px-40 rounded-full mx-3">
                      Add to Cart
                    </button>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="flex items-center text-black gap-4 font-bold cursor-pointer hover:bg-[#e6e6e6] ease-in duration-300 rounded-lg p-3">
                      <HeartIcon className="w-8 h-8" />
                      <p>WISHLIST</p>
                    </div>
                    <div className="flex items-center text-black gap-4 font-bold cursor-pointer hover:bg-[#e6e6e6] ease-in duration-300 rounded-lg p-3">
                      <ShareIcon className="w-8 h-8" />
                      <p>SHARE</p>
                    </div>
                  </div>
                  <div className="w-full mt-8">
                    <div className="collapse collapse-plus border-b">
                      <input
                        type="radio"
                        name="my-accordion-3"
                        id="info"
                        defaultChecked
                      />
                      <div className="collapse-title text-xl text-black font-bold">
                        Information
                      </div>
                      <div className="collapse-content">
                        <div className="flex items-center gap-16 text-black">
                          <h1 className="font-bold">BRANDS</h1>
                          <p>Nike</p>
                        </div>
                        <div className="flex items-center gap-16 text-black">
                          <h1 className="font-bold">ACTIVITY</h1>
                          <p>Running</p>
                        </div>
                        <div className="flex items-center gap-16 text-black">
                          <h1 className="font-bold">MATERIAL</h1>
                          <p>Fleece</p>
                        </div>
                        <div className="flex items-center gap-16 text-black">
                          <h1 className="font-bold">GENDER</h1>
                          <p>Men</p>
                        </div>
                      </div>
                    </div>
                    <div className="collapse collapse-plus border-b mt-2">
                      <input type="radio" name="my-accordion-3" id="details" />
                      <div className="collapse-title text-xl text-black font-bold">
                        Details
                      </div>
                      <div className="collapse-content text-black">
                        <p>
                          Ipsum consequat dolore laboris tempor sunt
                          reprehenderit mollit occaecat qui.
                        </p>
                        <p className="pt-3">
                          Ipsum consequat dolore laboris tempor sunt
                          reprehenderit mollit occaecat qui.Ipsum consequat
                          dolore laboris tempor sunt reprehenderit mollit
                          occaecat qui.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus border-b mt-2">
                      <input type="radio" name="my-accordion-3" id="custom" />
                      <div className="collapse-title text-xl text-black font-bold">
                        Custom
                      </div>
                      <div className="collapse-content">
                        <table className="w-full mt-4 text-left border-t border-gray-300">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 text-black">Size</th>
                              <th className="px-4 py-2 text-black">
                                Bust{" "}
                                <span className="text-[#acacac]">(cm)</span>
                              </th>
                              <th className="px-4 py-2 text-black">
                                Waist{" "}
                                <span className="text-[#acacac]">(cm)</span>
                              </th>
                              <th className="px-4 py-2 text-black">
                                Hip <span className="text-[#acacac]">(cm)</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-black">
                            <tr>
                              <td className="px-4 py-2">XS</td>
                              <td className="px-4 py-2">82.5</td>
                              <td className="px-4 py-2">62</td>
                              <td className="px-4 py-2">87.5</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">S</td>
                              <td className="px-4 py-2">85</td>
                              <td className="px-4 py-2">63.5</td>
                              <td className="px-4 py-2">89</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">M</td>
                              <td className="px-4 py-2">87.5</td>
                              <td className="px-4 py-2">67.5</td>
                              <td className="px-4 py-2">93</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">L</td>
                              <td className="px-4 py-2">90</td>
                              <td className="px-4 py-2">72.5</td>
                              <td className="px-4 py-2">98</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">XL</td>
                              <td className="px-4 py-2">93</td>
                              <td className="px-4 py-2">77.5</td>
                              <td className="px-4 py-2">103</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="collapse collapse-plus border-b mt-2">
                      <input type="radio" name="my-accordion-3" id="reviews" />
                      <div className="collapse-title text-xl text-black font-bold">
                        Reviews
                      </div>
                      <div className="collapse-content">
                        <div className="py-4">
                          <div className="flex items-center">
                            <div className="text-5xl font-bold text-black">
                              4.9
                            </div>
                            <div className="ml-4 text-sm text-black">
                              2,251 Reviews
                            </div>
                          </div>
                          <button className="mt-4 w-full py-4 bg-[#443c5b] hover:bg-[#eceeed] ease-in duration-300 text-white hover:text-black rounded-full">
                            Write review
                          </button>
                          <div className="mt-4 border-b">
                            <div className="mb-4 border-t border-gray-300 pt-4">
                              <h3 className="text-lg font-bold text-black">
                                Review by Sarah
                              </h3>
                              <p className="text-xs text-gray-600">On 7/7/22</p>
                              <div className="flex items-center py-4">
                                <div className="flex gap-0.5">
                                  {Array(5)
                                    .fill()
                                    .map((_, i) => (
                                      <StarIcon className="w-4 h-4 fill-yellow-500" />
                                    ))}
                                </div>
                              </div>
                              <p className="mt-2 text-xl text-black font-bold">
                                Works like charm
                              </p>
                              <p className="text-md pt-1 text-black">
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit. Molestiae voluptas dignissimos,
                                aperiam blanditiis delectus dicta.
                              </p>
                            </div>
                            <div className="border-t border-gray-300 pt-4">
                              <h3 className="text-lg font-bold text-black">
                                Review by Faizal
                              </h3>
                              <p className="text-xs text-gray-600">On 7/7/22</p>
                              <div className="flex items-center py-4">
                                <div className="flex gap-0.5">
                                  {Array(5)
                                    .fill()
                                    .map((_, i) => (
                                      <StarIcon className="w-4 h-4 fill-yellow-500" />
                                    ))}
                                </div>
                              </div>
                              <p className="mt-2 text-xl text-black font-bold">
                                Awesome product!
                              </p>
                              <p className="text-md pt-1 text-black">
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit. Voluptates eos modi assumenda
                                quia nisi cumque optio velit, sequi temporibus
                                ad doloribus consectetur!
                              </p>
                              <div className="flex items-center justify-end text-black py-8">
                                <button>View all reviews</button>
                                <ArrowIcon className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                          <div className="py-4">
                            <h1 className="text-4xl text-[#7a95a6] pb-2">
                              Write a review
                            </h1>
                            <div className="flex gap-2 pt-4">
                              <p className="text-black font-bold">
                                Are you satisfied enough?
                              </p>
                              <div className="rating rating-md rating-half">
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="rating-hidden"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-1"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-2"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-1"
                                  checked
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-2"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-1"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-2"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-1"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-2"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-1"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-[#443c5c] mask mask-star-2 mask-half-2"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col mt-6 text-black">
                            <input
                              type="text"
                              placeholder="Name"
                              className="bg-white border-black mb-2 px-4 py-2 border  rounded-lg"
                            />
                            <input
                              type="text"
                              placeholder="Summary"
                              className="bg-white border-black mb-2 px-4 py-2 border  rounded-lg"
                            />
                            <textarea
                              placeholder="Review"
                              rows="4"
                              className="bg-white border-black px-4 py-2 border rounded-lg"
                            ></textarea>
                            <button className="mt-4 px-6 py-2 bg-[#fd6c67] hover:bg-[#cb5652] ease-in duration-300 text-white rounded-full self-start">
                              Submit Review
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 justify-center">
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
                  {items.slice(0, 8).map((product) => (
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
                          <h3 className="font-semibold text-xl text-black hover:underline hover:text-[#545b90]">
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
                          <p className="text-sm text-black">
                            {product.stock} left
                          </p>
                          <p className="text-sm text-black">
                            {product.sold} sold
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ads />
      <Categorie />
      <Login />
      <Footer />
    </>
  );
}
