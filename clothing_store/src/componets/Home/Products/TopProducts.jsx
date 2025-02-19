import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../../CommonUtilities/Button/Button';
import { JSON_FILES } from '../../../utils/constant';

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(JSON_FILES.TOP_PRODUCT_DATA);
        if (!response.ok) throw new Error('Failed to fetch product data');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleNavigate = (category) => navigate(`/ProductList?category=${category}`);

  return (
    <div className="p-10 bg-blue-100">
      <div className="text-left mb-24 space-y-2">
        <p data-aos="fade-up" className="text-sm text-blue-800">Best Products</p>
        <h1 data-aos="fade-up" className="text-3xl text-gray-800 font-bold">Top Rated Products for You</h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">Discover our top-rated products, selected just for you.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28 place-items-center">
        {products.map(({ id, img, title, description, category }) => (
          <div
            key={id}
            data-aos="zoom-in"
            className="relative max-w-[300px] rounded-2xl bg-gray-100 hover:bg-gray-900 hover:text-white shadow-xl duration-300 group"
          >
            <div className="h-[150px] flex justify-center items-center -mt-6">
              <img
                src={img}
                alt={title}
                className="max-w-[140px] rounded-md drop-shadow-md transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 text-center mt-6">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>

              <h1 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white">{title}</h1>
              <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-white">{description}</p>

              <Button
                className="mt-6 mb-4 py-1 px-4 rounded-full bg-blue-950 text-white hover:scale-105 transition-transform duration-300 group-hover:bg-white group-hover:text-gray-950"
                onClick={() => handleNavigate(category)}
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
