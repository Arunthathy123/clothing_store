import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import Button from '../../CommonUtilities/Button/Button';
import { JSON_FILES } from '../../../utils/constant';

const categoryDescriptions = {
  t_shirt: 'Stylish and customizable t-shirts with high-quality prints for any occasion.',
  cap: 'Trendy and functional caps for everyday wear, offering style and sun protection.',
  uniform: 'Comfortable and professional attire designed for a neat and cohesive look.',
  hoodies: 'Cozy and versatile hoodies, perfect for casual and outdoor wear.'
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(JSON_FILES.PRODUCT_LIST);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleToggleView = () => {
    setVisibleCount(isExpanded ? 5 : products.length);
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="mt-14 mb-12 p-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto flex flex-col gap-3">
          <p data-aos="fade-up" className="text-sm text-blue-900">
            Top Selling Products for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-gray-900">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500">
          Discover our stylish and customizable t-shirts, perfect for any occasion with high-quality prints. Stay trendy and protected with our caps, designed for everyday wear. Achieve a professional and cohesive look with our comfortable uniforms. Embrace warmth and versatility with our hoodies, ideal for casual and outdoor wear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {products.slice(0, visibleCount).map(({ id, image, price, title, description, category, material, rating, aosDelay }) => (
            <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className="space-y-3">
              <img src={image} alt={title} className="h-[300px] w-[400px] object-fill rounded-lg" />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{categoryDescriptions[category.toLowerCase()] || description}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length > 5 && (
          <div className="flex justify-center mt-10">
            <Button
              className="bg-blue-600 text-white py-1 px-5 rounded-md"
              label={isExpanded ? 'View Less' : 'View More'}
              onClick={handleToggleView}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
