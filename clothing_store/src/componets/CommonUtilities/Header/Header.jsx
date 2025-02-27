import React, { useState }  from 'react';
// import { IoMdSearch } from 'react-icons/io';
// import { FaCartShopping } from 'react-icons/fa6';

import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';

const MENU_ITEMS = [
  { id: 1, name: 'Home', link: '/Home' },
  { id: 2, name: 'About Us', link: '/AboutUs' },
];

const DROPDOWN_LINKS = [
  { id: 1, name: 'Uniforms', link: '/ProductList?category=uniform' },
  { id: 2, name: 'T-Shirts', link: '/ProductList?category=t_shirt' },
  { id: 3, name: 'Caps', link: '/ProductList?category=cap' },
  { id: 3, name: 'Hoodies', link: '/ProductList?category=Hoodie' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="shadow-md bg-white z-40 relative">
      <div className="bg-blue-600 px-10 py-5 ">
        <div className="container flex justify-between items-center gap-10 sm:gap-3">
          <a href="#" className="font-bold text-2xl sm:text-3xl text-white">
            <img src="/Image/banner/logo.jpg" alt="Logo" className="w-56" />
          </a>


          <button
            className="text-white text-2xl sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="hidden sm:flex">
            <ul className="flex items-center gap-6">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="text-white hover:text-blue-200 transition">
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-1 py-2 text-white">
                  Trending Products
                  <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute z-50 hidden group-hover:block w-48 rounded-md bg-white p-2 text-gray-700 shadow-md">
                  <ul>
                    {DROPDOWN_LINKS.map((data) => (
                      <li key={data.id}>
                        <a href={data.link} className="block w-full rounded-md p-2 hover:text-black hover:bg-gray-100">
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <a href="/Contact" className="text-white hover:text-blue-200 transition">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>


          {/* <div className="flex items-center gap-4">
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
          </div> */}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-blue-600 p-4 absolute w-full left-0 top-16 z-50">
          <ul className="flex flex-col gap-4 text-white">
            {MENU_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="block p-2 hover:bg-blue-700 rounded">
                  {item.name}
                </a>
              </li>
            ))}
            {/* Mobile Dropdown */}
            <li className="relative">
              <button
                className="w-full text-left flex items-center gap-1 py-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Trending Products
                <FaCaretDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="mt-2 bg-white text-gray-700 rounded-md shadow-md p-2">
                  <ul>
                    {DROPDOWN_LINKS.map((data) => (
                      <li key={data.id}>
                        <a href={data.link} className="block p-2 hover:bg-gray-100 rounded">
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="/Contact" className="block p-2 hover:bg-blue-700 rounded">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      )}

      <nav className="flex justify-center py-3">
        {/* <ul className="sm:flex hidden items-center gap-6">
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
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
