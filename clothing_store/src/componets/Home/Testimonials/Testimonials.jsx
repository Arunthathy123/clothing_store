import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/datas/TestimonialsData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials data');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-10 mb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto flex flex-col gap-3">
          <p data-aos="fade-up" className="text-sm text-gray-900">
            What our customers are saying
          </p>
          <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-900">
            Testimonials
          </h2>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear what our happy clients have to say about our services.
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...sliderSettings}>
            {testimonials.map(({ id, name, text, img }) => (
              <div key={id} className="px-4">
                <div className="bg-[#e9eeff] shadow-lg rounded-xl p-6 flex flex-col items-start relative">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-full w-20 h-20 mb-4"
                  />
                  <p className="text-xs text-gray-500 mb-4 mt-4 text-start">{text}</p>
                  <h3 className="text-xl font-bold text-gray-950/80">{name}</h3>
                  <span className="absolute top-0 right-0 text-gray-950/20 text-9xl font-serif">,,</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
