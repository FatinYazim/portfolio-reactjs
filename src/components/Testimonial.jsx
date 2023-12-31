import React from 'react';
import tes1 from '../assets/tes1.jpg';
import tes2 from '../assets/tes2.jpg';
import tes3 from '../assets/tes3.jpg';
import tes4 from '../assets/tes4.jpg';

const Testimonial = () => {
  return (
    <div className='flex bg-indigo-800 m-20 ssm:flex-col lg:flex-row'>
      <div className='flex-1'>
        <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
          <div className='overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:ring-indigo-800'>
            <img src={tes1} alt='Testimonial 1' className='absolute -left-6 w-28 h-28 rounded-full shadow-lg' />
            <div className='min-w-0 py-5 pl-28 pr-5'>
              <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
                Name Goes here
              </div>
              <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400'>
                Assistant Manager
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
          <div className='overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:ring-indigo-800'>
            <img src={tes2} alt='Testimonial 2' className='absolute -left-6 w-28 h-28 rounded-full shadow-lg' />
            <div className='min-w-0 py-5 pl-28 pr-5'>
              <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
                Name Goes here
              </div>
              <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400'>
                Assistant Manager
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
          <div className='overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:ring-indigo-800'>
            <img src={tes3} alt='Testimonial 3' className='absolute -left-6 w-28 h-28 rounded-full shadow-lg' />
            <div className='min-w-0 py-5 pl-28 pr-5'>
              <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
                Name Goes here
              </div>
              <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400'>
                Assistant Manager
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
          <div className='overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:ring-indigo-800'>
            <img src={tes4} alt='Testimonial 4' className='absolute -left-6 w-28 h-28 rounded-full shadow-lg' />
            <div className='min-w-0 py-5 pl-28 pr-5'>
              <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
                Name Goes here
              </div>
              <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400'>
                Assistant Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
  