import { FaMosque } from "react-icons/fa";
import { motion } from "motion/react";

const Hero = () => {
    return (
        <div className="w-full min-h-screen bg-linear-to-r from-[#1a4d3c] to-[#4a7c6c] relative overflow-hidden">

            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px), radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                }}
            ></div>
            <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full"></div>
            <div className="absolute bottom-32 right-20 w-32 h-32 border border-white/10 rounded-full"></div>
            <div className="absolute top-40 right-40 w-16 h-16 border border-white/10 rounded-full"></div>
            <div className="max-w-7xl mx-auto p-20">
                <div className="flex justify-center items-center flex-col max-w-4xl mx-auto">
                    <motion.button 
                    initial={{opacity: 0, y: 20}}
                    animate= {{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="bg-white/10 backdrop-blur-sm px-6 py-3 border border-gray-400 rounded-2xl text-gray-300 flex items-center gap-2"><FaMosque className="text-[#f59e0b] text-xl" /> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</motion.button>

                    <motion.h1 
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="text-2xl lg:text-4xl text-white text-shadow-emerald-400 font-normal lg:font-bold text-center mt-6 bangla">আদ-দাওয়াহ ইসলামী পাঠাগার এন্ড দাওয়াহ সেন্টার</motion.h1>
                    <motion.p 
                    initial={{opacity: 0, y: 30}}
                    animate= {{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="text-gray-300 font-semibold bangla"> শাখাহাতী, গোবিন্দগঞ্জ,  গাইবান্ধা</motion.p>
                    <motion.p
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.6}} 
                    className="max-w-2xl mt-6 text-xl bangla text-center text-white/60">জ্ঞান, দাওয়াহ ও মানবসেবায় নিবেদিত একটি বিশ্বস্ত প্রতিষ্ঠান।
                        ইসলামের আলো ছড়িয়ে দিতে এবং মানবকল্যাণে কাজ করাই আমাদের অঙ্গীকার।</motion.p>
                </div>
            </div>
        </div>
    );
};

export default Hero;