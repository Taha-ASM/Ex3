import { ReactComponent as EmailIcon } from "../img/icon/email.svg";

export default function Login() {
  return (
    <div className="bg-[#070017] p-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-white text-4xl font-bold">Join Our Newsletter</h1>
          <p className="pt-4 text-white">
            Get E-email updates about our latest shop and
            <span className="text-[#ff4e48] font-semibold ml-1">
              <a href="#">special offers.</a>
            </span>
          </p>
        </div>
        <div className="SearchBar flex items-center w-full max-w-lg md:mx-0">
          <div className="flex items-center flex-grow border rounded-l-lg px-4 py-3 shadow-md bg-white">
            <EmailIcon className="w-5 h-5 text-gray-500 mr-4 cursor-pointer" />
            <input
              className="flex-1 focus:outline-none text-black bg-white"
              type="text"
              placeholder="Search for Products"
            />
          </div>
          <button className="bg-[#ff6a68] text-white px-6 py-[0.825rem] rounded-r-lg hover:bg-black ease-in duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
