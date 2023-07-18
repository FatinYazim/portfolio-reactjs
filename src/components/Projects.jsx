import React from 'react';
import HospitalPic from '../assets/hospitalicon.png';
import SchoolPic from '../assets/school.png';
import PosPic from '../assets/pos.png';
import InventoryPic from '../assets/inventory.png';

const Projects = () => {
  return (
    <div className='bg-indigo-800 m-20 max-w-full'>
      <div className='grid justify-items-center m-10'>
        <h1 className='text-3xl text-white mt-10'>Projects</h1>
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
          <div className='max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
            <div className='md:flex'>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Hospital Management System
                </div>
                <a href='#'>Subheading</a>
                <p className='mt-2 text-slate-500'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quibusdam quam rem.
                </p>
              </div>
              <div className='md:shrink-0 p-5'>
                <img src={HospitalPic} alt='Project1' width={150} height={150} />
              </div>
            </div>
          </div>

          <div className='max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
            <div className='md:flex'>
              <div className='md:shrink-0 p-5'>
                <img src={SchoolPic} alt='Project1' width={150} height={150} />
              </div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  School Management System
                </div>
                <a href='#'>Subheading</a>
                <p className='mt-2 text-slate-500'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quibusdam quam rem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
          <div className='max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
            <div className='md:flex'>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Inventory Management System
                </div>
                <a href='#'>Subheading</a>
                <p className='mt-2 text-slate-500'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quibusdam quam rem.
                </p>
              </div>
              <div className='md:shrink-0 p-5'>
                <img src={InventoryPic} alt='Project1' width={150} height={150} />
              </div>
            </div>
          </div>

          <div className='max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
            <div className='md:flex'>
              <div className='md:shrink-0 p-5'>
                <img src={PosPic} alt='Project1' width={150} height={150} />
              </div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  POS Management System
                </div>
                <a href='#'>Subheading</a>
                <p className='mt-2 text-slate-500'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quibusdam quam rem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

