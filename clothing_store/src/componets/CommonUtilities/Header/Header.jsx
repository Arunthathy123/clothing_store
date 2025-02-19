import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { usePopup } from '../../../context/PopupProvider';

const MENU_ITEMS = [
  { id: 1, name: 'Home', link: '/Home' },
  { id: 2, name: 'Top Rated', link: '/TopRated' },
];

const DROPDOWN_LINKS = [
  { id: 1, name: 'Uniforms', link: '/ProductList?category=uniform' },
  { id: 2, name: 'T-Shirts', link: '/ProductList?category=t-shirt' },
  { id: 3, name: 'Caps', link: '/ProductList?category=cap' },
];

const Header = () => {
  const { handleOrderPopup } = usePopup();

  return (
    <header className="shadow-md bg-white z-40 relative">
      <div className="bg-blue-600 px-10 py-5">
        <div className="container flex justify-between items-center">
          <a href="#" className="font-bold text-2xl sm:text-3xl text-white">
            Shopsizzle
          </a>

          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-600"
              />
              <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-800" />
            </div>

            <button
              onClick={handleOrderPopup}
              className="transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group bg-blue-700 hover:bg-blue-800"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      <nav className="flex justify-center py-3">
        <ul className="sm:flex hidden items-center gap-6">
          {MENU_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="hover:text-blue-600 transition">
                {item.name}
              </a>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-1 py-2">
              Trending Products
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute z-50 hidden group-hover:block w-48 rounded-md bg-white p-2 text-gray-700 shadow-md">
              <ul>
                {DROPDOWN_LINKS.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block w-full rounded-md p-2 hover:text-black hover:bg-gray-100"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <a href="/Contact" className="hover:text-blue-600 transition">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
