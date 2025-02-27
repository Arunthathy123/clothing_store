import React from 'react';
import Banner from '/Image/banner/footerBanner.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const footerLinks = [
  { title: 'Home', link: '/Home' },
  { title: 'Uniforms', link: '/ProductList?category=uniform' },
  { title: 'T-shirts', link: '/ProductList?category=t-shirt' },
  { title: 'Caps', link: '/ProductList?category=cap' },
  { title: 'Hoodies', link: '/ProductList?category=Hoodie' },
  { title: 'Contact', link: '/Contact' },
];

const Footer = () => (
  <footer
    style={{
      backgroundImage: `url(${Banner})`,
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100%',
      width: '100%',
    }}
    className="text-white"
  >
    <div className="container mx-auto px-4">
      <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
        <div className="py-8 px-4">
          <h2 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3"><a href="#" className="font-bold text-2xl sm:text-3xl text-white">
            <img src="/Image/banner/logo.jpg" alt="Logo" className="w-56" />
          </a></h2>
          <p className="text-gray-300">Your trusted source for quality uniforms. We provide a wide range of professional attire tailored to your needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 md:pl-10">
          {['Important Links'].map((heading) => (
            <div key={heading} className="py-8 px-4">
              <h3 className="text-xl font-bold mb-3">{heading}</h3>
              <ul className="space-y-2">
                {footerLinks.map(({ title, link }) => (
                  <li key={title} className="text-gray-200 hover:text-primary transition-transform duration-300 transform hover:translate-x-1">
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col justify-between py-12 px-4">
            <div className="flex space-x-4 mb-2">
              {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, index) => (
                <a key={index} href="#" aria-label={Icon.name}>
                  <Icon className="text-3xl" />
                </a>
              ))}
            </div>

            <div className="space-y-4 mt-6">
              {[{ icon: FaLocationArrow, text: '67/781 FAHIN ARCADE, Broadway, Ernakulam, kochi - 682031 Kerala, India' },{ icon: FaEnvelope, text: 'vmaxocompany@gmail.com' }, { icon: FaMobileAlt, text: '9061093399, 9061613998' }].map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
