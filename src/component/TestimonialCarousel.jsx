import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    text: "This platform has transformed how our community connects and supports each other. The impact is truly remarkable.",
    name: "MD Masum Prodhan",
    role: "Community Supporter"
  },
  {
    text: "As a donor, I'm proud to support initiatives that make a real difference. This organization delivers results.",
    name: "MD Abdul Momin",
    role: "Regular Donor"
  },
  {
    text: "The transparency and dedication shown by this team is inspiring. They've built something special here.",
    name: "MD Jahangir Islam",
    role: "Community Member"
  },
  {
    text: "I've seen firsthand how this platform helps people in need. It's more than just a website—it's a lifeline.",
    name: "MD Ziaur Rahman",
    role: "Long-time Supporter"
  },
  {
    text: "The positive change in our community since this initiative started has been incredible. Keep up the great work!",
    name: "MD Abdullah",
    role: "Community Advocate"
  }
];

const TestimonialCarousel = () => {

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-2xl lg:text-4xl text-[#001931] font-bold mb-4 english'
        >
          What People Say
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=' english text-gray-800'
        >
          Reviews from our supporters, donors, and community members
        </motion.p>
      </div>
      {/* carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='relative max-w-4xl mx-auto px-4 py-8'>
        <h1 className='text-xl lg:text-3xl font-bold text-[#001931] text-center english mb-6'>What Our Community Says</h1>

        <div className='relative overflow-hidden rounded-lg bg-white shadow-xl hover:shadow-2xl py-6'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {
              testimonials.map((testimonial, index) => (
                <div key={index} className='w-full flex flex-col items-center flex-shrink-0 px-4 lg:px-8'>
                  <div className='mb-4'>
                    <FaStar className='text-4xl text-orange-400' />
                  </div>
                  <blockquote className='italic english lg:text-lg loading-relaxed text-center mb-4 px-2'>
                    {testimonial.text}
                  </blockquote>
                  <h4 className='text-xl font-bold english text-[#001931] mb-0.5'>{testimonial.name}</h4>
                  <p className='text-sm text-gray-700 font-medium'>{testimonial.role}</p>

                </div>
              ))
            }

          </div>
        </div>
        {/* navigation arrow */}
        <button
          onClick={prev}
          aria-label='Previous Slide'
          className='absolute -left-2 top-1/2 -translate-y-1/2 transform bg-gray-100 rounded-full p-3 hover:bg-gray-200 z-2'
        >
          <FaAngleLeft className='text-2xl' />
        </button>
        <button
          onClick={next}
          aria-label='Next Slide'
          className='absolute -right-2 top-1/2 -translate-y-1/2 transform bg-gray-100 rounded-full p-3 hover:bg-gray-200 z-2'
        >
          <FaAngleRight className='text-2xl'/>
        </button>
        {/* dot indicator */}
        <div className='flex justify-center items-center space-x-2 mt-6'>
          {
            testimonials.map((_, index) => (
              <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === current ? 'bg-blue-500' : 'bg-gray-500'
              }`}
              >

              </button>
            ))
          }
        </div>
      </motion.div>

    </div>
  );
};

export default TestimonialCarousel;