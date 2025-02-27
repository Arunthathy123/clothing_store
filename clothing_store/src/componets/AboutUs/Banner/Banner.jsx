import React from 'react';
import Button from '../../CommonUtilities/Button/Button';

const Banner = () => (
  <div
    className="relative bg-cover bg-center h-auto md:h-[50vh] flex flex-col items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url('/Image/banner/aboutUsBanner.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-blue-900 bg-opacity-50" />
    <div className="relative z-10">
      <h1 className="text-2xl md:text-4xl font-bold">About Us</h1>
      <p className="mt-2 text-sm md:text-lg">
      Discover who we are and what we stand for at VMaxO.

      </p>
      {/* <Button label="Contact Us" className="bg-orange-700 text-white mt-4 px-4 py-2 rounded" /> */}
    </div>
  </div>
);

export default Banner;
