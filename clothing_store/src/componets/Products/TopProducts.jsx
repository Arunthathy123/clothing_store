import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Button from '../Button/Button';

const TopProducts = ({ handleOrderPopup }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/datas/TopProductsData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-10 bg-blue-100">
      <div className="text-left mb-24  flex flex-col gap-2" >
        <p data-aos="fade-up" className="text-sm text-blue-800">
        Best Products
        </p>
        <h1 data-aos="fade-up" className="text-3xl text-gray-800 font-bold">Top Rated Products for You </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Discover our top-rated products, selected just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28 place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-gray-100 hover:bg-gray-600 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
          >
            <div className="h-[150px] flex justify-center items-center -mt-6">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-[140px] block transform group-hover:scale-105 duration-300 drop-shadow-md rounded-md"
              />
            </div>

            <div className="p-4 text-center mt-6">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>

              <h1 className="text-xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-500 group-hover:text-white text-sm line-clamp-2">
                {product.description}
              </p>

              <Button
                className="mb-4  bg-gray-950 hover:scale-105 duration-300 text-white hover:text-gray-500 py-1 px-4 rounded-full mt-6 group-hover:bg-white group-hover:text-gray-950"
                onClick={() => handleOrderPopup()}
                label="Order Now"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;