import { Link } from "react-router";
import logoImg from '../assets/ad-dawah.png'
import { FaFacebookF, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";


const Footer = () => {
  return (
    <div className="w-full pt-10 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        {/* main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* logo and social link */}
          <div>
            {/* logo */}
            <div className="mb-4">
              <Link to={'/'} className={`flex items-center gap-2`}>
                <img src={logoImg} alt="Ad-Dawaah" className="lg:w-10 lg:h-10 w-8 h-8" />
                <div>
                  <h2 className="text-sm lg:text-xl text-gray-50 bangla">আদ-দাওয়াহ ইসলামী</h2>
                  <p className="text-xs lg:text-sm text-gray-400 bangla">পাঠাগার এন্ড দাওয়াহ সেন্টার</p>
                </div>
              </Link>
            </div>
            <p className="text-justify text-gray-300 mb-8 bangla">মুসলিম উম্মাহর জন্য একটি সমৃদ্ধ ইসলামি জ্ঞান ভান্ডার। আমরা ইসলামি জ্ঞান প্রচার ও প্রসারে নিবেদিত।</p>
            {/* social icon */}
            <div className="flex gap-6 items-center">
              <Link className="w-10 h-10 rounded-full bg-gray-600 transition-colors transform duration-300 hover:bg-emerald-500 text-white flex justify-center items-center group">
                <FaFacebookF className="text-xl" />
              </Link>
              <Link className="w-10 h-10 rounded-full bg-gray-600 transition-colors transform duration-300 hover:bg-emerald-500 text-white flex justify-center items-center group">
                <FaWhatsapp className="text-xl" />
              </Link>
              <Link className="w-10 h-10 rounded-full bg-gray-600 transition-colors transform duration-300 hover:bg-emerald-500 text-white flex justify-center items-center group">
                <FaRegEnvelope className="text-xl" />
              </Link>
              <Link className="w-10 h-10 rounded-full bg-gray-600 transition-colors transform duration-300 hover:bg-emerald-500 text-white flex justify-center items-center group">
                <FaMessage className="text-xl" />
              </Link>
            </div>
          </div>
          {/* quick link */}
          <div>
            <h4 className="text-xl font-bold text-gray-300 mb-4 bangla">দ্রুত লিংক</h4>
            <div className="flex flex-col gap-2">
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">হোম</Link>
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">আমাদের সম্পর্কে </Link>
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">ব্লগ</Link>
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">যোগাযোগ </Link>
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">প্রোজেক্টসমূহ</Link>
            </div>

          </div>
          {/* types of subjects */}
          <div>
            <h4 className="text-xl font-bold text-gray-300 mb-4 bangla">আমাদের ব্লগসমূহ </h4>
            <div className="flex flex-col gap-2">
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">ইসলামিক জ্ঞান </Link>
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">আমল ও ইবাদত </Link>
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">ইতিহাস </Link>
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">সাহিত্য </Link>
              <Link className="text-gray-400 transform transition-all duration-300 hover:text-green-700 hover:translate-x-2 bangla">সমসাময়িক</Link>
            </div>

          </div>
          {/* address */}
          <div>
            <h4 className="text-xl font-bold text-gray-300 mb-4 bangla">আমাদের ব্লগসমূহ </h4>
            <div className="flex flex-col gap-4">
              <p className="flex gap-2 items-center text-gray-400 bangla"><CiLocationOn className="text-lg text-green-600" /> শালমারা, গোবিন্দগঞ্জ, গাইবান্ধা </p>
              <p className="flex gap-2 items-center text-gray-400 bangla"><FaRegEnvelope className="text-lg text-green-600" /> info@addawah.org </p>
              <p className="flex gap-2 items-center text-gray-400"><FiPhone className="text-lg text-green-600" /> +880 1234 567890</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="border-t border-t-gray-600">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center flex-col lg:flex-row">
          <p className=" text-gray-400 bangla text-sm px-4 mb-6 lg:mb-0"> &copy; {new Date().getFullYear()} আদ-দাওয়াহ ইসলামি পাঠাগার এন্ড দাওয়াহ সেন্টার ।</p>
          <p className="text-gray-400 font-semibold">Design and Development by <span className="text-green-700">Sheikh Rasel</span></p>
          
        </div>

      </div>
    </div>
  );
};

export default Footer;