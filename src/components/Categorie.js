import MakeupImage from "../img/image/makeup.webp";
import IphoneImage from "../img/image/iphone.png";
import PlantImage from "../img/image/plant.webp";
import { ReactComponent as ArrowIcon } from "../img/icon/arrow.svg";

export default function Categorie() {
  return (
    <div className="bg-white p-20">
      <div className="container mx-auto p-4 flex flex-col gap-10 md:flex-row md:gap-20 justify-evenly">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <img
            src={MakeupImage}
            alt="Makeup"
            className="w-40 h-auto md:w-56 object-cover rounded-md"
          />
          <div className="flex flex-col items-center md:items-start gap-3">
            <h1 className="text-black font-bold text-xl md:text-2xl">Beauty</h1>
            <ul className="p-1 leading-7 text-[#939896] text-sm md:text-base">
              {[
                "Makeup",
                "Skin Care",
                "Hair Care",
                "Fragrance",
                "Foot & Hand Care",
              ].map((item) => (
                <li key={item} className="hover:underline ease-in duration-300">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <button className="text-black">View all</button>
              <ArrowIcon className="w-3 h-auto stroke-black" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <img
            src={IphoneImage}
            alt="Gadgets"
            className="w-24 h-auto md:w-32 object-cover rounded-md"
          />
          <div className="flex flex-col items-center md:items-start gap-3">
            <h1 className="text-black font-bold text-xl md:text-2xl">
              Gadgets
            </h1>
            <ul className="p-1 leading-7 text-[#939896] text-sm md:text-base">
              {[
                "Camera",
                "Cell Phones",
                "Computers",
                "GPS & Navigation",
                "Headphones",
              ].map((item) => (
                <li key={item} className="hover:underline ease-in duration-300">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <button className="text-black">View all</button>
              <ArrowIcon className="w-3 h-auto stroke-black" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <img
            src={PlantImage}
            alt="Home Decor"
            className="w-40 h-auto md:w-56 object-cover rounded-md"
          />
          <div className="flex flex-col items-center md:items-start gap-3">
            <h1 className="text-black font-bold text-xl md:text-2xl">
              Home Decor
            </h1>
            <ul className="p-1 leading-7 text-[#939896] text-sm md:text-base">
              {[
                "Kitchen",
                "Dining Room",
                "Living Room",
                "Pantry",
                "Breakfast Nook",
              ].map((item) => (
                <li key={item} className="hover:underline ease-in duration-300">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <button className="text-black">View all</button>
              <ArrowIcon className="w-3 h-auto stroke-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
