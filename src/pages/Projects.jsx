import { useEffect, useState } from "react";
import { FiBookOpen, FiCalendar, FiFilter, FiGlobe, FiGrid, FiHeart, FiMapPin, FiSearch, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
import { Link, useLoaderData } from "react-router";
import { motion } from 'framer-motion';
import { TbCurrencyTaka } from "react-icons/tb";

const categories = [
    { value: 'all', label: 'সব প্রকল্প', icon: FiGrid },
    { value: 'শিক্ষা', label: 'শিক্ষা', icon: FiBookOpen },
    { value: 'ধর্মীয়', label: 'ধর্মীয়', icon: FiGlobe },
    { value: 'স্বাস্থ্য', label: 'স্বাস্থ্য', icon: FiHeart },
    { value: 'সমাজকল্যাণ', label: 'সমাজকল্যাণ', icon: FiTarget },
    { value: 'পরিবেশ', label: 'পরিবেশ', icon: FiTrendingUp }
]
const statuses = [
    { value: 'all', label: 'সব অবস্থা' },
    { value: 'চলমান', label: 'চলমান' },
    { value: 'সম্পন্ন', label: 'সম্পন্ন' },
    { value: 'পরিকল্পনা', label: 'পরিকল্পনা' }
]
const sortOptions = [
    { value: 'newest', label: 'নতুন প্রথম' },
    { value: 'oldest', label: 'পুরানো প্রথম' },
    { value: 'budget-high', label: 'বাজেট (উচ্চ থেকে নিচু)' },
    { value: 'budget-low', label: 'বাজেট (নিচু থেকে উচ্চ)' },
    { value: 'participants', label: 'অংশগ্রহণকারী (বেশি থেকে কম)' }
]

const Projects = () => {
    const sampleProjects = useLoaderData();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectStatus, setSelectStatus] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProjects(sampleProjects);
            setLoading(false);
        }, 1000)
    }, [])
// filter logic
   const filteredProjects = projects
    .filter(project => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === 'all' || project.category === selectedCategory;

        const matchesStatus =
            selectStatus === 'all' || project.status === selectStatus;

        return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return new Date(b.startDate) - new Date(a.startDate);
            case 'oldest':
                return new Date(a.startDate) - new Date(b.startDate);
            case 'budget-high':
                return b.budget - a.budget;
            case 'budget-low':
                return a.budget - b.budget;
            case 'participants':
                return b.participants - a.participants;
            default:
                return 0;
        }
    });

    // get percentage
    const getProgressPercentage = (funded, budget) => {
        return Math.round((funded / budget) * 100)
    }

    // loading
    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary"></div>
                    <p className="mt-4 text-lg">প্রকল্প লোড হচ্ছে...</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            {/* header */}
            <div className="w-full py-20 bg-linear-to-l from-emerald-50 to-emerald-100">
                <div className="max-w-7xl mx-auto text-center bangla px-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#001931] mb-4">আমাদের প্রকল্পসমূহ </h1>
                    <p className="text-gray-800 text-sm lg:text-lg">আদ দাওয়াহ ইসলামি পাঠাগারের বিভিন্ন উদ্যোগ ও প্রকল্প যা সমাজের উন্নয়নে অবদান রাখছে। প্রত্যেক প্রকল্প ইসলামি মূল্যবোধের আলোকে পরিচালিত হয়।</p>
                </div>
            </div>
            {/* search and filter section */}
            <section className="w-full bg-white py-8 border-b border-b-gray-400">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
                        {/* search */}
                        <div className="relative flex-1 max-w-md">
                            <FiSearch className="absolute left-3 top-1/2 text-gray-600 transform -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="প্রকল্প খুজুন"
                                className="pl-10 border border-gray-400 py-2 text-lg bangla rounded-lg outline-gray-500 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {/* filters */}
                        <div className="flex flex-wrap gap-4">
                            {/* category filter */}
                            <details className="dropdown">
                                <summary className="btn m-1 flex items-center gap-2 text-gray-700"><FiFilter /> বিভাগ: {categories.find(cat => cat.value === selectedCategory)?.label}</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    {
                                        categories.map(category => (
                                            <li key={category.value}>
                                                <a onClick={() => setSelectedCategory(category.value)}>
                                                    <category.icon className="mr-2" />
                                                    {category.label}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </details>
                            {/* status filter */}
                            <select
                                value={selectStatus}
                                onChange={(e) => setSelectStatus(e.target.value)}
                                className="px-3 py-2 border border-gray-400 text-gray-500 outline-none rounded-lg "
                            >
                                {
                                    statuses.map(status => (
                                        <option value={status.value} key={status.value} className="">
                                            {status.label}
                                        </option>
                                    ))
                                }
                            </select>
                            {/* filter sort */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border border-gray-400 text-gray-500 outline-none rounded-lg"
                            >
                                {
                                    sortOptions.map(sort => (
                                        <option key={sort.value} value={sort.value}>
                                            {sort.label}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* filters end */}
                    </div>
                    {/* result count */}
                    <div className="mt-6 text-gray-600">
                        <p>{filteredProjects.length} টি প্রকল্প পাওয়া গেছে </p>
                    </div>
                </div>

            </section>

            {/* projects card */}
            <div className="w-full py-8 bg-linear-to-l from-emerald-50 to-emerald-100">
                <div className="max-w-7xl mx-auto px-6">
                    {
                        filteredProjects.length === 0 ? (
                            <div className="py-12 text-center">
                                <FiTarget className="text-6xl text-gray-500 mb-4 mx-auto" />
                                <h1 className="text-xl font-bold text-gray-500 mb-4 bangla">কোন প্রকল্প পাওয়া যায়নি</h1>
                                <p className="text-gray-400 ">আপনার ফিল্টার অনুসারে কোন প্রকল্প নেই।</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    filteredProjects.map((project, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            key={project.id}
                                            className="bg-white shadow-lg hover:shadow-2xl rounded-xl group transition-all duration-300 bangla"
                                        >
                                            {/* image */}
                                            <div className="w-full h-48 overflow-hidden relative rounded-t-xl">
                                                <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition duration-500' />
                                                <div className='absolute top-4 left-4'>
                                                    <span className='px-3 py-1 bg-emerald-500 text-xs text-white font-semibold rounded-xl'>{project.status}</span>
                                                </div>
                                                <div className='absolute top-4 right-4'>
                                                    <span className='px-3 py-1 bg-emerald-500 text-xs text-white font-semibold rounded-xl'>{project.category}</span>
                                                </div>
                                            </div>
                                            {/* description */}
                                            <div className='p-6'>
                                                <h3 className='text-[#001931] text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors'>{project.title}</h3>
                                                <p className='text-sm text-gray-800 mb-4'>{project.description}</p>
                                                {/* projects state */}
                                                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <FiUsers className="text-emerald-500" />
                                                        <span>{project.participants} জন </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <FiMapPin className="text-emerald-500" />
                                                        <span>{project.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <FiCalendar className="text-emerald-500" />
                                                        <span>{new Date(project.startDate).getFullYear()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <TbCurrencyTaka className="text-emerald-500" />
                                                        <span>{project.budget.toLocaleString()} টাকা</span>
                                                    </div>

                                                </div>
                                                {/* funding progress */}
                                                <div className="mb-4">
                                                    <div className="flex justify-between items-center">
                                                        <span>অর্থায়ন</span>
                                                        <span>{getProgressPercentage(project.funded, project.budget)}%</span>
                                                    </div>
                                                    <progress
                                                        className="progress progress-success w-full"
                                                        value={getProgressPercentage(project.funded, project.budget)}
                                                        max="100"
                                                    ></progress>
                                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                                        <span>{project.funded.toLocaleString()} টাকা</span>
                                                        <span>{project.budget.toLocaleString()} টাকা</span>
                                                    </div>
                                                </div>
                                                {/* impact */}
                                                <div className="bangla px-4 py-3 rounded-lg bg-emerald-50 mb-4">
                                                    <h4 className="font-bold text-emerald-700">প্রভাব:</h4>
                                                    <p className="text-sm text-emerald-950">{project.impact}</p>
                                                </div>
                                                {/* objectives */}
                                                <div className="mb-4">
                                                <h4 className="text-emerald-950 font-bold">লক্ষ্যসমূহ:</h4>
                                                <ul>
                                                    {project.objectives.map((object, index) => (
                                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                            <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                                        {object}
                                                        </li>
                                                    ))}
                                                </ul>
                                                </div>
                                                {/* action for details */}
                                                <div className="w-full">
                                                    <Link >
                                                    <button className="w-full text-center bg-emerald-700 text-white bangla font-semibold py-1 rounded-lg">বিস্তারিত দেখুন</button>
                                                    </Link>
                                                </div>
                                            </div>


                                        </motion.div>
                                    ))
                                }
                            </div>
                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default Projects;