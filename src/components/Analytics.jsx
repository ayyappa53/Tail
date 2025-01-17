import React from "react"
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WEB DEVELOPMENT DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Crafting Beautiful Web Experiences with Tailwind CSS</h1>
          <p>
            Our website is built using Tailwind CSS, ensuring a modern, responsive, and visually stunning user interface. Tailwind CSS allows us to create flexible designs that adapt seamlessly to any screen size while maintaining a clean, minimalistic aesthetic.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-3 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;