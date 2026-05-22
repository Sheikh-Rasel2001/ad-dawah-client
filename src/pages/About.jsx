import { motion } from 'framer-motion';
import { FiCalendar, FiTrendingUp } from 'react-icons/fi';
import { RiGlobalLine } from 'react-icons/ri';

const About = () => {
  const milestones = [
    {
      year: '২০১৮',
      title: 'প্রতিষ্ঠা',
      description: 'আদ দাওয়াহ ইসলামি পাঠাগারের যাত্রা শুরু হয়। প্রাথমিকভাবে কয়েকজন উৎসাহী তরুণের উদ্যোগে।'
    },
    {
      year: '২০১৯',
      title: 'প্রথম ওয়েবসাইট',
      description: 'প্রথম অনলাইন প্ল্যাটফর্ম চালু করা হয়। মাসিক ৫০০+ পাঠকের সমাগম ঘটে।'
    },
    {
      year: '২০২০',
      title: 'অনলাইন কোর্স চালু',
      description: 'কোভিড-১৯ মহামারির সময় অনলাইন শিক্ষা কার্যক্রম শুরু করা হয়।'
    },
    {
      year: '২০২১',
      title: 'মোবাইল অ্যাপ',
      description: 'পাঠকদের জন্য মোবাইল অ্যাপ্লিকেশন উন্নয়ন ও চালু করা হয়।'
    },
    {
      year: '২০২২',
      title: 'আন্তর্জাতিক সম্প্রসারণ',
      description: 'বিশ্বের বিভিন্ন দেশে আমাদের বিষয়বস্তু পৌঁছে দেওয়ার কাজ শুরু হয়।'
    },
    {
      year: '২০২৩',
      title: 'সম্প্রদায় ভিত্তিক প্রকল্প',
      description: 'স্থানীয় সম্প্রদায়ের জন্য বিশেষ প্রকল্প ও কর্মসূচি গ্রহণ করা হয়।'
    }
  ]
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* about us header */}
          <div className='text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-5xl text-[#001931] font-bold mb-6 bangla">আমাদের সম্পর্কে </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-gray-500 px-4 bangla"><span className="font-bold text-emerald-600">"আদ দাওয়াহ ইসলামি পাঠাগার এন্ড দাওয়াহ সেন্টার"</span> একটি ইসলামিক শিক্ষা ও দাওয়াহভিত্তিক প্রতিষ্ঠান। ইসলামের সঠিক জ্ঞান প্রচার, দ্বীনি শিক্ষা বিস্তার এবং সমাজে নৈতিক মূল্যবোধ গড়ে তোলার লক্ষ্যে আমরা কাজ করে যাচ্ছি। পাঠাগার, কুরআন শিক্ষা, ইসলামী আলোচনা ও বিভিন্ন দাওয়াহ কার্যক্রমের মাধ্যমে মানুষকে কুরআন ও সুন্নাহর আলোয় আলোকিত করাই আমাদের উদ্দেশ্য।</motion.p>

            <div className='py-10 mt-8 mb-10'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl lg:text-4xl text-[#001931] font-bold mb-6 bangla">আমাদের ইতিহাস </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='bangla text-gray-600 '>আদ দাওয়াহ ইসলামি পাঠাগার এন্ড দাওয়াহ সেন্টার-এর যাত্রা শুরু থেকে বর্তমান পর্যন্ত যে পথ অতিক্রম করেছে</motion.p>

            </div>
            {/* history content */}
            <div className='max-w-4xl mx-auto py-8 px-6 bg-white rounded-xl shadow-md space-y-6'>
              {/* start date */}
              <div className='flex items-start gap-8'>
                <div className='w-16 h-16 rounded-full bg-[#e8f2ef] flex justify-center items-center flex-shrink-0'>
                  <FiCalendar className='text-green-700 text-2xl' />
                </div>
                <div className='text-left'>
                  <h3 className='text-xl font-bold mb-2 text-[#001931] bangla'>প্রতিষ্ঠার শুরু</h3>
                  <p className='text-gray-600 bangla'>২০১৮ সালে কয়েকজন উৎসাহী তরুণের হাত ধরে আদ দাওয়াহ ইসলামি পাঠাগারের যাত্রা শুরু হয়। তখনকার সময়ে অনলাইনে সঠিক ইসলামি জ্ঞানের অভাব অনুভব করে এই উদ্যোগ নেওয়া হয়েছিল। প্রাথমিকভাবে সামাজিক যোগাযোগ মাধ্যমে কিছু লেখা ও ভিডিও শেয়ার করা থেকে শুরু হয়েছিল আমাদের কার্যক্রম।</p>
                </div>
              </div>
              {/* growth */}
              <div className='flex items-start gap-8'>
                <div className='w-16 h-16 rounded-full bg-[#eafbf8] flex justify-center items-center flex-shrink-0'>
                  <FiTrendingUp className='text-[#2dd4bf] text-2xl' />
                </div>
                <div className='text-left'>
                  <h3 className='text-xl font-bold mb-2 text-[#001931] bangla'>প্রতিষ্ঠার শুরু</h3>
                  <p className='text-gray-600 bangla'>২০১৮ সালে কয়েকজন উৎসাহী তরুণের হাত ধরে আদ দাওয়াহ ইসলামি পাঠাগারের যাত্রা শুরু হয়। তখনকার সময়ে অনলাইনে সঠিক ইসলামি জ্ঞানের অভাব অনুভব করে এই উদ্যোগ নেওয়া হয়েছিল। প্রাথমিকভাবে সামাজিক যোগাযোগ মাধ্যমে কিছু লেখা ও ভিডিও শেয়ার করা থেকে শুরু হয়েছিল আমাদের কার্যক্রম।</p>
                </div>
              </div>
              {/* present and future */}
              <div className='flex items-start gap-8'>
                <div className='w-16 h-16 rounded-full bg-[#fef5e6] flex justify-center items-center flex-shrink-0'>
                  <RiGlobalLine className='text-[#f59e0b] text-2xl' />
                </div>
                <div className='text-left'>
                  <h3 className='text-xl font-bold mb-2 text-[#001931] bangla'>প্রতিষ্ঠার শুরু</h3>
                  <p className='text-gray-600 bangla'>২০১৮ সালে কয়েকজন উৎসাহী তরুণের হাত ধরে আদ দাওয়াহ ইসলামি পাঠাগারের যাত্রা শুরু হয়। তখনকার সময়ে অনলাইনে সঠিক ইসলামি জ্ঞানের অভাব অনুভব করে এই উদ্যোগ নেওয়া হয়েছিল। প্রাথমিকভাবে সামাজিক যোগাযোগ মাধ্যমে কিছু লেখা ও ভিডিও শেয়ার করা থেকে শুরু হয়েছিল আমাদের কার্যক্রম।</p>
                </div>
              </div>
            </div>
            {/* timeline */}
            <div className='relative mt-8 px-4'>
              <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#cce1dd]'></div>
              <div className='space-y-8'>
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className='bg-white rounded-lg p-6 shadow-sm'>
                        <h4 className='text-lg font-bold text-green-600 mb-2 bangla'>{milestone.year}</h4>
                        <h4 className='text-lg font-semibold text-[#001931] mb-2 bangla'>{milestone.title}</h4>
                        <p className='text-gray-500 bangla text-xs lg:text-sm'>{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-green-700 rounded-full border-4 border-white shadow-md"></div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;