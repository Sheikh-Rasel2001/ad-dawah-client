import { motion } from "framer-motion"
import { FiEye, FiTarget } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const missions = 
{
  "mission": {
    "title": "আমাদের লক্ষ্য (Mission)",
    "description": "সঠিক ইসলামিক জ্ঞান মানুষের মাঝে পৌঁছে দেওয়া এবং কুরআন ও সুন্নাহভিত্তিক জীবন গঠনে সহায়তা করাই আমাদের প্রধান লক্ষ্য। আমরা শিক্ষা, দাওয়াহ এবং মানবসেবার মাধ্যমে একটি সচেতন ও নৈতিক সমাজ গড়ে তুলতে কাজ করছি।",
    "points": [
      "সহীহ ইসলামিক জ্ঞান প্রচার করা",
      "কুরআন ও হাদীস শিক্ষার সুযোগ বৃদ্ধি করা",
      "সমাজে নৈতিকতা ও মানবিক মূল্যবোধ জাগ্রত করা",
      "তরুণ প্রজন্মকে দ্বীনি শিক্ষায় উৎসাহিত করা",
      "পাঠাগার ও দাওয়াহ কার্যক্রম সম্প্রসারণ করা"
    ]
  },
  "vision": {
    "title": "আমাদের ভিশন (Vision)",
    "description": "আমাদের স্বপ্ন হলো এমন একটি আলোকিত সমাজ প্রতিষ্ঠা করা যেখানে মানুষ ইসলামের সঠিক জ্ঞান অর্জন করবে, নৈতিক জীবন গঠন করবে এবং মানবকল্যাণে ভূমিকা রাখবে।",
    "points": [
      "সবার জন্য ইসলামিক শিক্ষার সহজ সুযোগ তৈরি করা",
      "জ্ঞানভিত্তিক ও আদর্শ সমাজ গঠন করা",
      "মুসলিম উম্মাহর মাঝে ঐক্য ও সচেতনতা বৃদ্ধি করা",
      "বই, শিক্ষা ও দাওয়াহর মাধ্যমে আলোকিত প্রজন্ম গড়া",
      "ইসলামিক মূল্যবোধসম্পন্ন মানবিক সমাজ প্রতিষ্ঠা করা"
    ]
  }
}


const Mission = () => {

    const {mission, vision} = missions

    return (
        <div className="max-w-7xl mx-auto px-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bangla text-center text-2xl lg:text-4xl whitespace-nowrap font-bold text-gray-900 mb-4">আমাদের লক্ষ্য ও উদ্দেশ্য</motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-gray-700 bangla font-semibold">খাঁটি ইসলামী জ্ঞান দ্বারা মুসলিম উম্মাহকে পথপ্রদর্শন করা। ইসলামের আলো ছড়িয়ে দিতে এবং মানবকল্যাণে কাজ করাই আমাদের অঙ্গীকার।</motion.p>

            <div className="mt-16 max-w-6xl mx-auto ">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* mission card */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white shadow-md p-8 border-t-4 rounded-xl hover:shadow-2xl border-t-emerald-500 transition-all duration-300 group"
                >
                    <div className="w-16 h-16 flex justify-center items-center bg-emerald-100 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 mb-6">
                        <FiTarget className="text-3xl text-emerald-700 group-hover:text-white transition-colors"/>
                    </div>
                    <h1 className="text-gray-900 font-bold mb-6">{mission.title}</h1>
                    <p className="text-sm text-gray-700 text-justify mb-6">{mission.description}</p>
                    {/* point */}
                    <div className="space-y-4">
                        {
                            mission.points.map((point, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <GoDotFill className="text-green-600 "/>
                                    <p className="text-sm text-gray-500">{point}</p>
                                </div>
                            ))
                        }

                    </div>
                </motion.div>
                {/* vision card */}
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white shadow-md p-8 border-t-4 rounded-xl hover:shadow-2xl border-t-amber-500 transition-all duration-300 group"
                >
                    <div className="w-16 h-16 flex justify-center items-center bg-amber-100 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500 mb-6">
                        <FiEye className="text-3xl text-amber-700 group-hover:text-white transition-colors"/>
                    </div>
                    <h1 className="text-gray-900 font-bold mb-6">{vision.title}</h1>
                    <p className="text-sm text-gray-700 text-justify mb-6">{vision.description}</p>
                    {/* point */}
                    <div className="space-y-4">
                        {
                            vision.points.map((point, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <GoDotFill className="text-amber-600 "/>
                                    <p className="text-sm text-gray-500">{point}</p>
                                </div>
                            ))
                        }

                    </div>
                </motion.div>
               </div>
            </div>

        </div>
    );
};

export default Mission;