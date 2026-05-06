import { useEffect, useState } from "react";
import logoImg from '../assets/ad-dawah.png';
import { Link, NavLink } from "react-router";
import { FaAngleDown, FaAngleRight, FaRegHeart, FaRegUser } from "react-icons/fa";
import { DiGhostSmall } from "react-icons/di";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeAll = () => {
        setShowMenu(false)
        setOpen(false)
    }

    return (
        <header className={`w-full fixed left-0 top-0 z-100 transition-all duration-300 ${isScrolled ?
            'bg-white/20 backdrop-blur-sm shadow-sm py-3' :
            'bg-white shadow-lg py-1'
            }`}>
            <nav className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
                {/* logo */}
                <div>
                    <Link to={'/'} className={`flex items-center gap-2`}>
                        <img src={logoImg} alt="Ad-Dawaah" className="lg:w-10 lg:h-10 w-8 h-8" />
                        <div>
                            <h2 className="text-sm lg:text-xl">আদ-দাওয়াহ ইসলামী</h2>
                            <p className="text-xs lg:text-sm text-gray-700">পাঠাগার</p>
                        </div>
                    </Link>

                </div>
                {/* menu bar */}
                <div className="">
                    <ul className="hidden lg:flex items-center gap-5">
                        <NavLink className={'text-lg font-semibold text-gray-700 hover:text-[#f59e0b]'}>Home</NavLink>
                        <NavLink className={'text-lg font-semibold text-gray-700 hover:text-[#f59e0b]'}>About</NavLink>
                        <NavLink className={'text-lg font-semibold text-gray-700 hover:text-[#f59e0b]'}>Blog</NavLink>
                        <NavLink className={'text-lg font-semibold text-gray-700 hover:text-[#f59e0b]'}>Projects</NavLink>
                        <div className="relative">
                            <NavLink onClick={() => setOpen(!open)} className={'flex items-center gap-1 text-xl font-semibold text-gray-700 hover:text-[#f59e0b]'}>
                                More
                                {open ? <FaAngleDown /> : <FaAngleRight />}
                            </NavLink>
                            <ul className={`absolute top-14 left-0 w-40 bg-white/60 backdrop-blur-md p-3 rounded flex flex-col gap-2 transform transition-all duration-300 ${open ?
                                'opacity-100 scale-100 translate-y-0 visible' :
                                'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                                <NavLink className={'hover:underline text-lg font-semibold text-gray-700 hover:text-[#f59e0b]'}>Gallery</NavLink>
                                <NavLink className={'hover:underline text-lg font-semibold text-gray-700 hover:text-[#f59e0b]'}>Testimonial</NavLink>
                                <NavLink className={'hover:underline text-lg font-semibold text-gray-700 hover:text-[#f59e0b]'}>Contact</NavLink>
                                
                            </ul>

                        </div>

                        {/* contact and log in info */}
                        <div className="flex gap-8 items-center">
                            <button className="flex gap-1 items-center py-2 px-4 bg-[#f59e0b] border border-gray-300 text-lg rounded-lg text-white font-bold"><FaRegHeart /> Donate</button>
                            <button className="flex gap-1 items-center py-2 px-4 border-2 border-green-700 rounded-lg text-green-400 text-lg font-bold hover:bg-white"><FaRegUser /> Log In</button>
                        </div>
                    </ul>
                </div>

                {/* mobile button */}
                <div className="lg:hidden">
                    <button>
                        {
                            showMenu ? <IoClose onClick={() => setShowMenu(false)} size={24} /> : <DiGhostSmall onClick={() => setShowMenu(true)} size={24} />
                        }
                    </button>
                </div>
            </nav>
            {/* mobile nav */}
            <div className={`fixed top-[72] right-0 w-full transform lg:hidden transition-transform duration-300 ease-in-out
                ${isScrolled ?
                    'bg-white/10 backdrop-blur-sm shadow-sm py-3' :
                    'bg-white shadow-lg py-2'
                }
                ${showMenu ? 'translate-x-0' : 'translate-x-full'}
                `}>
                <ul className="flex flex-col items-center gap-5">
                    <NavLink onClick={closeAll} className={'text-xl font-semibold text-gray-900'}>Home</NavLink>
                    <NavLink onClick={closeAll} className={'text-xl font-semibold text-gray-900'}>About</NavLink>
                    <NavLink onClick={closeAll} className={'text-xl font-semibold text-gray-900'}>Blog</NavLink>
                    <NavLink onClick={closeAll} className={'text-xl font-semibold text-gray-900'}>Projects</NavLink>
                    <div className="relative">
                        <NavLink onClick={() => setOpen(!open)} className={'flex items-center gap-1 text-xl font-semibold text-gray-900'}>
                            Home
                            {open ? <FaAngleDown /> : <FaAngleRight />}
                        </NavLink>
                        <ul className={`absolute bottom-0 left-full w-40 p-3 flex flex-col gap-2 transform transition-all duration-300 ${open ?
                            'opacity-100 scale-100 translate-y-0 visible' :
                            'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                            <NavLink onClick={closeAll} className={'text-xl font-semibold text-gray-900'}>Home 1</NavLink>
                            <NavLink onClick={closeAll} className={'text-xl font-semibold text-gray-900'}>Home 1</NavLink>
                            <NavLink onClick={closeAll} className={'text-xl font-semibold text-gray-900'}>Home 1</NavLink>
                            <NavLink onClick={closeAll} className={'text-xl font-semibold text-gray-900'}>Home 1</NavLink>
                        </ul>

                    </div>

                    {/* contact and log in info */}
                    <div>
                        <button className="flex gap-1 items-center py-2 px-4 bg-[#f59e0b] border border-gray-300 rounded-lg text-white font-bold"><FaRegHeart /> Donate</button>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;