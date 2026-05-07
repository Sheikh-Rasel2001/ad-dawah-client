import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { FaAngleDoubleRight, FaMosque, FaRegHeart, FaRegStar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";


const images = [
    "https://i.ibb.co.com/ksxkRKVX/blood-donation.webp",
    "https://i.ibb.co.com/35n36jPT/talimi-boithok.jpg",
    "https://i.ibb.co.com/sdsF7rYB/quran-distribution.jpg",
    "https://i.ibb.co.com/Q3Y6NHYP/free-medical-camp.jpg",
    "https://i.ibb.co.com/5WsG3WZJ/tree.jpg"
];

const status = [
    { id: 1, icon: FiBookOpen, value: '50+', label: 'Articles' },
    { id: 2, icon: LuUsers, value: '10K', label: 'Readers' },
    { id: 3, icon: FaRegStar, value: '5+', label: 'Reviews' }
]

const Hero = () => {
    const [index, setIndex] = useState(0);

    // auto change image
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Images */}
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={images[index]}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="absolute left-0 ">
                <div className=" max-w-7xl mx-auto p-8 lg:p-20 flex justify-center items-center flex-col text-center">
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-2 text-sm lg:text-lg font-semibold text-white px-4 py-2 lg:px-6 lg:p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl mb-4 lg:mb-6"><FaMosque className="text-orange-400" /> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</motion.button>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl lg:text-5xl text-white font-bold bangla">আদ-দাওয়াহ ইসলামী পাঠাগার এন্ড দাওয়াহ সেন্টার</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-gray-200 text-xs lg:text-lg font-semibold mt-2">শাখাহাতী, গোবিন্দগঞ্জ,  গাইবান্ধা</motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl mt-4 lg:mt-6 text-sm lg:text-xl bangla text-center text-white/60">জ্ঞান, দাওয়াহ ও মানবসেবায় নিবেদিত একটি বিশ্বস্ত প্রতিষ্ঠান।
                        ইসলামের আলো ছড়িয়ে দিতে এবং মানবকল্যাণে কাজ করাই আমাদের অঙ্গীকার।</motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-4 lg:mt-6 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                        <Link className="group flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-4 bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl text-sm lg:text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform shadow-lg hover:shadow-xl hover:-translate-y-1 ">
                            <FaRegHeart /> Donate Now <FaAngleDoubleRight className="text-sm lg:text-xl group-hover:translate-x-1" />
                        </Link>
                        <Link className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm lg:px-6 lg:py-4 px-4 py-2 text-sm rounded-xl lg:text-lg text-white font-semibold transform transition-all border border-white/30 hover:bg-white/20 hover:-translate-y-1">
                            <LuUsers /> Join Us <FaAngleDoubleRight className=" text-sm lg:text-xl group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center mt-4 lg:mt-6 gap-6"
                    >
                        {
                            status.map((stat) => (
                                <div key={stat.id} className="flex items-center gap-2 text-white/70">
                                    <stat.icon className="text-amber-400 text-lg"/>
                                    <span className="text-lg font-bold text-white">{stat.value}</span>
                                    <span>{stat.label}</span>
                                </div>
                            ))
                        }
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Hero;