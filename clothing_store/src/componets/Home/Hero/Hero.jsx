import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../../CommonUtilities/Button/Button';
import { usePopup } from '../../../context/PopupProvider';
import { JSON_FILES } from '../../../utils/constant';
const Hero = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const response = await fetch(JSON_FILES.BANNER_LIST);
        const data = await response.json();
        setImageList(data);
      } catch (error) {
        console.error('Failed to fetch banner images:', error);
      }
    };

    fetchBannerImages();
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section
      className="relative overflow-hidden w-full h-auto sm:h-[500px] md:h-[550px] flex justify-center items-center text-white transition duration-200"
      style={{
        backgroundImage: `url('/Image/banner/bannerBg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute right-0 w-[700px] h-[700px] bg-primary/40 rounded-3xl rotate-45 opacity-30" />

      <div className="w-full h-full mt-10 md:mt-0 md:p-10">
        <Slider {...sliderSettings}>
          {imageList.map(({ id, title, description, img }) => (
            <div key={id} className="w-full h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                <div className="flex flex-col justify-center gap-4 px-4 text-center sm:text-left order-2 sm:order-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl font-bold text-[#005c86] leading-relaxed"
                  >
                    {title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm sm:text-base text-[#005c86]"
                  >
                    {description}
                  </p>
                  {/* <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                    <Button
                      label="Order Now"
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-blue-800 to-blue-500 text-white text-xl py-2 px-4 rounded-full mt-6 hover:scale-105 transition duration-200 w-auto md:w-full lg:w-1/2 xl:w-1/4"
                    />
                  </div> */}
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="flex justify-center items-center order-1 sm:order-2"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-[300px] sm:h-[550px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
