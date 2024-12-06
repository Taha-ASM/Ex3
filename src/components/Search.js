import { ReactComponent as SearchIcon } from "../img/icon/search.svg";
import React from "react";

export default function Search() {
  return (
    <div className="bg-[#443c59] p-3">
      <div className="container flex justify-between items-center">
        <div className="bg-[#fd6c69] rounded-t-lg relative top-3 px-24 py-5">
          <h1 className="text-white text-xl flex items-center">
            All Departments
          </h1>
          <p className="text-[#f0e1e1] text-sm">Total 1059 Products</p>
        </div>
        <div className="SearchBar flex">
          <div className="flex items-center w-96 h-14 border rounded-l-lg px-4 py-2 shadow-md bg-white">
            <SearchIcon className="w-5 h-5 text-gray-500 mr-6 cursor-pointer" />
            <input
              className="flex-1 focus:outline-none text-black bg-white"
              type="text"
              placeholder="Search for Products"
            />
          </div>
          <button className="bg-[#ff6a68] hover:bg-[#0a0016] ease-in duration-300 text-white px-4 pl-5 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
