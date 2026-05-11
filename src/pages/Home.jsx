import { useEffect, useState } from "react";
import Hero from "../component/Hero";
import { motion } from 'framer-motion'
import Mission from "../component/Mission";
import Statistic from "../component/Statistic";
import { FiActivity, FiGlobe, FiGrid, FiUsers } from "react-icons/fi";
import FeaturedProjects from "../component/FeaturedProjects";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const statistics = [
    { icon: <FiGrid />, value: 50, suffix: '+', label: 'Total Projects', suffixText: '' },
    { icon: <FiUsers />, value: 10000, suffix: '+', label: 'Beneficiaries', suffixText: 'K' },
    { icon: <FiActivity />, value: 25000, suffix: '+', label: 'Donations', suffixText: 'K' },
    { icon: <FiGlobe />, value: 50000, suffix: '+', label: 'Visitors', suffixText: 'K' }
]


const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data)
            })
    }, [])

    const featuredProjects = projects.slice(0, 3);
    console.log(featuredProjects);

    return (
        <div>
            <Hero></Hero>
            {/* statistic section */}
            <div className="w-full bg-linear-to-r from-emerald-600 to-teal-700 py-16 ">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {
                        statistics.map((stat, index) => <Statistic key={index} stat={stat}></Statistic>)
                    }
                </div>
            </div>
            {/* our mission and vision section */}
            <div className="w-full bg-[#ecfdf5] py-16">
                <Mission></Mission>
            </div>
            {/* featured project section */}
            <section className="w-full bg-white py-16">
                <div className=" max-w-6xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-4xl text-center font-bold bangla mb-4">আমাদের বিশেষ কার্যক্রম</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-4xl mx-auto text-center mb-8 text-emerald-800 bangla"
                    >
                        আদ-দাওয়াহ ইসলামী পাঠাগার এন্ড দাওয়াহ সেন্টার সমাজের কল্যাণে শিক্ষা, দাওয়াহ, মানবসেবা ও সামাজিক উন্নয়নমূলক বিভিন্ন কার্যক্রম পরিচালনা করে আসছে। আমাদের এই উদ্যোগগুলো মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে এবং ইসলামের সৌন্দর্য ছড়িয়ে দিতে গুরুত্বপূর্ণ ভূমিকা রাখছে।
                    </motion.p>
                    <div className=" px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {
                            featuredProjects.map(project => (
                                <FeaturedProjects key={project.id} project={project}></FeaturedProjects>
                            ))
                        }
                    </div>
                    <div className="flex justify-center items-center my-10">
                        <Link to={'/projects'} className="flex items-center gap-2 px-6 py-2 text-emerald-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 english border border-emerald-800 rounded-lg">View All Project <FaArrowRightLong /></Link>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;