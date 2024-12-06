import Theme1Image from "../img/image/theme1.jpg";
import Theme2Image from "../img/image/theme2.jpg";

export default function Ads() {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={Theme1Image}
              alt="Living Room Chair"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-100"></div>
            <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center p-6">
              <p className="text-black font-bold">Brutal Sale!</p>
              <p className="text-gray-600 text-lg sm:text-2xl mb-2 pt-2">
                Get the deal in here
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
                Living Room Chair
              </h1>
              <button className="bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-black ease-in duration-300">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative text-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={Theme2Image}
              alt="Office Outfit"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-100"></div>
            <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center p-6">
              <p className="text-black font-bold">Brutal Sale!</p>
              <p className="text-gray-600 text-lg sm:text-2xl mb-2 pt-2">
                Discount everyday
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
                Office Outfit
              </h1>
              <button className="bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-black ease-in duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
