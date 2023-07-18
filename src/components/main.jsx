import React from 'react'
import HeroNavbar from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import Testimonial from './Testimonial';
import Footer from './Footer';


function Main() {
  return (
   <div className='bg-indigo-600 '>
<HeroNavbar/>
<Hero/>
<Projects/>
<Testimonial/>
<Footer/>
   </div>
  );
};

export default Main;