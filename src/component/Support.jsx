import { motion } from 'framer-motion';
import { FaArrowRight, FaMosque, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router';

const Support = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-6">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{once: true}}
          className="flex items-center gap-2 text-sm lg:text-lg font-semibold text-white px-4 py-2 lg:px-6 lg:p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 lg:mb-6"><FaMosque className="text-orange-400" /> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</motion.button>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{once: true}}
          className='text-3xl lg:text-5xl font-bold english text-white whitespace-nowrap mb-3'>Make a Difference Today</motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{once: true}}
          className='text-2xl lg:text-4xl text-[#fbbf24] font-semibold english whitespace-nowrap mb-4'>Your Support Changes Lives</motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{once: true}}
          className='text-gray-50 text-center max-w-4xl mx-auto lg:text-xl font-semibold english mb-6'>Join thousands of supporters who are making a real impact in our community. Every donation, volunteer hour, and member strengthens our mission to spread authentic Islamic knowledge and serve those in need.</motion.p>
        {/* our member project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{once: true}}
          className='py-6 max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {/* lives impacted */}
          <div className='text-center'>
            <h1 className='lg:text-3xl text-2xl text-[#fbbf24] font-bold english mb-2 '>10,000+</h1>
            <p className='text-white english'>Lives Impacted</p>
          </div>
          {/* Volunteers */}
          <div className='text-center'>
            <h1 className='lg:text-3xl text-2xl text-[#fbbf24] font-bold english mb-2 '>500+</h1>
            <p className='text-white english'>Volunteers</p>
          </div>
          {/* Raised This Year */}
          <div className='text-center'>
            <h1 className='lg:text-3xl text-2xl text-[#fbbf24] font-bold english mb-2'>৳300K+</h1>
            <p className='text-white english'>Raised This Year</p>
          </div>
          {/* Projects Completed */}
          <div className='text-center'>
            <h1 className='lg:text-3xl text-2xl text-[#fbbf24] font-bold english mb-2 '>50+</h1>
            <p className='text-white english'>Projects Completed</p>
          </div>
        </motion.div>

        {/* card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{once: true}}
          className='mt-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          {/* make a donate */}
          <div className='p-6 flex flex-col group border border-gray-400 rounded-xl bg-white/10 backdrop-blur-sm transition-all transform duration-500 hover:-translate-y-2'>
            <div className='w-16 h-16 rounded-lg bg-orange-500 flex justify-center items-center transition-all transform duration-300 group-hover:scale-110 group-hover:bg-orange-400 mb-4'>
              <FaRegHeart className='text-2xl ' />
            </div>
            <h4 className='text-xl english font-bold text-white mb-3'>Make a Donation</h4>
            <p className='text-gray-100 english mb-4'>Your generous donations help us provide food, education, and healthcare to those in need. Every dollar makes a difference in someone's life.</p>
            <div className='space-y-2 mb-6'>
              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-orange-500 text-xl' /> Feed families during Ramadan</p>
              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-orange-500 text-xl' /> Support Islamic education programs</p>
              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-orange-500 text-xl' /> Provide medical aid and healthcare</p>
            </div>
            <div className='w-full'>
              <Link className='flex gap-1 justify-center items-center px-6 py-3 bg-linear-to-r from-orange-400 to-orange-500 rounded-lg text-center transition-all transform duration-300 hover:scale-105 hover:bg-orange-700 text-lg font-semibold'>
                <FaRegHeart className='' />
                Donate Now
                <FaArrowRight />
              </Link>

            </div>
          </div>
          {/* become a volunteer */}
          <div className='p-6 flex flex-col group border border-gray-400 rounded-xl bg-white/10 backdrop-blur-sm transition-all transform duration-500 hover:-translate-y-2'>
            <div className='w-16 h-16 rounded-lg bg-emerald-500 flex justify-center items-center transition-all transform duration-300 group-hover:scale-110 group-hover:bg-emerald-400 mb-4'>
              <FiUsers className='text-2xl text-white' />
            </div>
            <h4 className='text-xl english font-bold text-white mb-3'>Become a Volunteer</h4>
            <p className='text-gray-100 english mb-4'>Share your time and skills to help our community. Whether teaching, organizing events, or providing support services, your contribution matters.</p>
            <div className='space-y-2 mb-6'>
              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-emerald-500 text-xl' /> Teach Islamic studies and Quran</p>

              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-emerald-500 text-xl' /> Organize community events</p>

              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-emerald-500 text-xl' /> Help with food distribution</p>
            </div>
            <div className='w-full'>
              <Link className='flex gap-1 justify-center items-center px-6 py-3 bg-linear-to-r from-emerald-400 to-emerald-500 rounded-lg transition-all transform duration-300 hover:scale-105 hover:bg-emerald-700 text-lg text-white font-semibold'>
                <FaRegHeart className='' />
                Join as Volunteer
                <FaArrowRight />
              </Link>

            </div>
          </div>
          {/* become a member */}
          <div className='p-6 flex flex-col group border border-gray-400 rounded-xl bg-white/10 backdrop-blur-sm transition-all transform duration-500 hover:-translate-y-2'>
            <div className='w-16 h-16 rounded-lg bg-blue-500 flex justify-center items-center transition-all transform duration-300 group-hover:scale-110 group-hover:bg-blue-400 mb-4'>
              <FaRegStar className='text-2xl text-white' />
            </div>
            <h4 className='text-xl english font-bold text-white mb-3'>Become a Member</h4>
            <p className='text-gray-100 english mb-4'>Join our growing community of dedicated members who support our mission year-round. Get exclusive updates and be part of meaningful change.</p>
            <div className='space-y-2 mb-6'>
              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-blue-500 text-xl' /> Monthly newsletters and updates</p>
              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-blue-500 text-xl' /> Exclusive member events</p>
              <p className='flex gap-2 items-center lg:text-lg english text-gray-200'><GoDotFill className='text-blue-500 text-xl' /> Priority access to programs</p>
            </div>
            <div className='w-full'>
              <Link className='flex gap-1 justify-center items-center px-6 py-3 bg-linear-to-r from-blue-400 to-blue-500 rounded-lg text-center transition-all transform duration-300 hover:scale-105 hover:bg-blue-700 text-lg text-white font-semibold'>
                <FaRegHeart className='' />
                Join Our Community
                <FaArrowRight />
              </Link>

            </div>
          </div>

        </motion.div>
      </div>

    </div >
  );
};

export default Support;