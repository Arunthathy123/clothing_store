import React from 'react';
import Banner from '/Image/banner/notifybanner.jpg';
import InputField from '../../CommonUtilities/InputFields/InputField';

const Notified = () => {
  const bannerStyle = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  };

  return (
    <div data-aos="zoom-in" className="mb-20 bg-gray-100 dark:bg-gray-800" style={bannerStyle}>
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white">
            Get Notified About New Products
          </h1>
          <InputField
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 mt-1 block focus:outline-none border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Notified;
