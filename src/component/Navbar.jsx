import { useEffect, useState } from "react";
import logoImg from '../assets/ad-dawah.jpeg';
import { Link, NavLink } from "react-router";
import { FaAngleDown, FaAngleRight, FaRegHeart } from "react-icons/fa";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`w-full fixed left-0 top-0 z-50 transition-all duration-300 ${isScrolled ?
            'bg-white/20 backdrop-blur-sm shadow-sm py-3' :
            'bg-white shadow-lg py-1'
            }`}>
            <nav className="max-w-7xl mx-auto py-3 px-4 flex justify-between items-center">
                {/* logo */}
                <div>
                    <Link to={'/'} className={`flex items-center gap-2`}>
                        <img src={logoImg} alt="Ad-Dawaah" className="w-10 h-10" />
                        <div>
                            <h2 className="text-xl">আদ-দাওয়াহ ইসলামী</h2>
                            <p className="text-sm text-gray-700">পাঠাগার</p>
                        </div>
                    </Link>
                </div>
                {/* menu bar */}
                <div>
                    <ul className=" flex items-center gap-5">
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Blog</NavLink>
                        <NavLink>Projects</NavLink>
                        <div className="relative">
                            <NavLink onClick={() => setOpen(!open)} className={'flex items-center gap-1 '}>
                                Home
                                {open ? <FaAngleDown /> : <FaAngleRight />}
                            </NavLink>
                            <ul className={`absolute top-full left-0 w-40 p-3 flex flex-col gap-2 transform transition-all duration-300 ${open ?
                                'opacity-100 scale-100 translate-y-0 visible' :
                                'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                                <NavLink className={'hover:underline'}>Home 1</NavLink>
                                <NavLink className={'hover:underline'}>Home 1</NavLink>
                                <NavLink className={'hover:underline'}>Home 1</NavLink>
                                <NavLink className={'hover:underline'}>Home 1</NavLink>
                            </ul>

                        </div>


                    </ul>
                </div>
                {/* contact and log in info */}
                <div>
                    <button className="flex gap-1 items-center py-2 px-4 bg-[#f59e0b] border border-gray-300 rounded-lg text-white font-bold"><FaRegHeart /> Donate</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;