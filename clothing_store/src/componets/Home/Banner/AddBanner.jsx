import React from 'react';
import BannerImg from '/Image/banner/AddBanner.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const features = [
  { icon: <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />, text: 'Quality Products' },
  { icon: <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />, text: 'Fast Delivery' },
  { icon: <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />, text: 'Easy Payment Method' },
  { icon: <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />, text: 'Get Offers' },
];

const AddBanner = () => {
  return (
    <section className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Winter Sale Banner"
              className="w-full h-[350px] object-contain drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Our Service
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 leading-relaxed">
            We are dedicated to providing top-quality uniforms tailored to your industry. Whether in hospitality, retail, or corporate settings, our range of comfortable, durable, and customizable uniforms will meet your needs. Partner with us for a seamless experience from ordering to delivery.            </p>

            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div key={index} data-aos="fade-up" className="flex items-center gap-4">
                  {feature.icon}
                  <p className="text-base font-medium text-gray-900">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBanner;



