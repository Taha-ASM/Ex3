import { ReactComponent as TwitterIcon } from "../img/icon/twitter.svg";
import { ReactComponent as FacebookIcon } from "../img/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../img/icon/instagram.svg";
import { ReactComponent as InIcon } from "../img/icon/in.svg";
import { ReactComponent as YoutubeIcon } from "../img/icon/youtube.svg";
import LogoImage from "../img/image/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#f0f3f2] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold mb-3 text-black text-xl">
              Help & Contact
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Your Account
              </li>

              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Your Orders
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Shipping Rates
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Returns
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Help
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-3 text-black text-xl">
              Product Categories
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Beauty
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Electronic
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Women's Fashion
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Men's Fashion
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Girl's Fashion
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Boy's Fashion
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Health & Household
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Home & Kitchen
              </li>
              <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer">
                Pet Supplies
              </li>
              <li className="hover:text-[#919398] ease-in-out duration-300 cursor-pointer">
                Sportsf
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-3 text-black text-xl">Payment Info</h2>
            <ul className="space-y-2">
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Buissness Card
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Shop with Points
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Reload Your Balance
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Paypal
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-3 text-black text-xl">About Us</h2>
            <ul className="space-y-2">
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Company info
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                News
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Investors
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Careers
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Policies
              </li>
              <li className="hover:text-[#919398] hover:underline ease-in-out duration-300 cursor-pointer">
                Customer reviews
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center pt-10 gap-6">
            <img src={LogoImage} alt="" className="w-28  cursor-pointer" />
            <div className="flex gap-2">
              <div className="inline-block p-2 rounded-full hover:bg-[#8e8c8c] cursor-pointer">
                <TwitterIcon className="w-4 h-4" />
              </div>
              <div className="inline-block p-2 rounded-full hover:bg-[#8e8c8c] cursor-pointer">
                <FacebookIcon className="w-4 h-4" />
              </div>
              <div className="inline-block p-2 rounded-full hover:bg-[#8e8c8c] cursor-pointer">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="inline-block p-2 rounded-full hover:bg-[#8e8c8c] cursor-pointer">
                <InIcon className="w-4 h-4" />
              </div>
              <div className="inline-block p-2 rounded-full hover:bg-[#8e8c8c] cursor-pointer">
                <YoutubeIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8">
            <p className="text-center text-gray-600">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
