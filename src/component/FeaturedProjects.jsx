import {motion} from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router';
const FeaturedProjects = ({project}) => {
    const {id, title, image, description, category} = project
    return (
        <motion.div 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: id * 0.1}}
        viewport={{once: true}}
        className="bg-white shadow-lg hover:shadow-2xl rounded-xl group transition-all duration-300 bangla">
            {/* image */}
            <div className="w-full h-48 overflow-hidden relative rounded-t-xl">
                <img src={image} alt={title} className='w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition duration-500'/>
                <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-emerald-500 text-xs text-white font-semibold rounded-xl'>{category}</span>
                </div>
            </div>
            {/* description */}
            <div className='p-6'>
                <h3 className='text-[#001931] text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors'>{title}</h3>
                <p className='text-sm text-gray-800'>{description}</p>
            </div>
            <div className='px-6 py-3 mb-4'>
                <Link className='flex items-center gap-2 text-lg font-semibold text-emerald-600 english'>Learn More <FaArrowRightLong /></Link>
            </div>
        </motion.div>
    );
};

export default FeaturedProjects;