import React from 'react'
import Header from '../../componets/CommonUtilities/Header/Header'
import Footer from '../../componets/CommonUtilities/Footer/Footer'
import Banner from '../../componets/AboutUs/Banner/Banner'
import BannerImg from '/Image/banner/AddBanner.jpg';
import AboutUs1 from '/Image/aboutUs/about2.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiCheckMark } from 'react-icons/gi';

const features = [
  { icon: <GiCheckMark className="text-4xl h-10 w-10 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-blue-400" />, text: 'Uniforms: Comfortable and professional attire designed for a neat and cohesive look.' },
  { icon: <GiCheckMark className="text-4xl h-10 w-10 shadow-sm p-3 rounded-full bg-orange-100 dark:bg-blue-400" />, text: 'T-Shirts: Comfortable, versatile t-shirts in a wide range of designs, colors, and materials.' },
  { icon: <GiCheckMark className="text-4xl h-10 w-10 shadow-sm p-3 rounded-full bg-green-100 dark:bg-blue-400" />, text: 'Caps: Stylish and functional caps for branding, team sports, or everyday wear.' },
];

const WhyChooseUs = [
    { icon: <GiCheckMark className="text-4xl h-10 w-10 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-blue-400" />, text: 'Quality First: We prioritize top-notch materials and craftsmanship to ensure every product meets your expectations.' },
    { icon: <GiCheckMark className="text-4xl h-10 w-10 shadow-sm p-3 rounded-full bg-orange-100 dark:bg-blue-400" />, text: 'Customization: Bring your vision to life with embroidery and printing services for logos and unique designs.' },
    { icon: <GiCheckMark className="text-4xl h-10 w-10 shadow-sm p-3 rounded-full bg-green-100 dark:bg-blue-400" />, text: 'Affordable Prices: Enjoy competitive pricing without compromising quality.' },
  ];

function AboutUs() {
  return (
    <div>
        <Header />
        <Banner />
        <p data-aos="fade-up" className="text-md text-gray-900 mt-12 p-10">
            Discover our stylish and customizable t-shirts, perfect for any occasion with high-quality prints. Stay trendy and protected with our caps, designed for everyday wear. Achieve a professional and cohesive look with our comfortable uniforms. Embrace warmth and versatility with our hoodies, ideal for casual and outdoor wear.
        </p>
        <section className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 px-10 bg-blue-100">
        
              <div className="container mx-auto">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  <div data-aos="zoom-in">
                    <img
                      src={AboutUs1}
                      alt="Winter Sale Banner"
                      className="w-full h-[450px] object-contain "
                    />
                  </div>
                  
        
                  <div className="flex flex-col justify-center gap-6">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-gray-900">
                    OUR MISSION
                    </h1>
                    <p data-aos="fade-up" className="text-sm text-gray-500 leading-relaxed">
                    Our mission is simple: to help you look and feel your best, whether you’re on the job, on the field, or making a statement with your brand. We are committed to delivering products that combine functionality with fashion, ensuring you’re always ready for the moment.
                    </p>
        
                    <div className="flex flex-col gap-8 mt-4">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-gray-900 ">
                    WHAT WE OFFER
                    </h1>
                      {features.map((feature, index) => (
                        <div key={index} data-aos="fade-up" className="flex items-center gap-4 ">
                          {feature.icon}
                          <p className="text-base font-medium text-gray-500 ">{feature.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 px-10 ">
        
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            
            
  
            <div className="flex flex-col justify-center gap-6">

  
              <div className="flex flex-col gap-8 mt-4">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-gray-900 ">
              WHY CHOOSE US?
              </h1>
                {WhyChooseUs.map((WhyChoose, index) => (
                  <div key={index} data-aos="fade-up" className="flex items-center gap-4 ">
                    {WhyChoose.icon}
                    <p className="text-base font-medium text-gray-500 ">{WhyChoose.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="zoom-in">
              <img
                src={BannerImg}
                alt="Winter Sale Banner"
                className="w-full h-[350px] object-contain "
              />
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  )
}

export default AboutUs
