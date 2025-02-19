import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Button from "../../CommonUtilities/Button/Button";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [expanded, setExpanded] = useState(false); // Track if "View More" is clicked

  useEffect(() => {
    fetch("/datas/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const toggleView = () => {
    if (expanded) {
      setVisibleCount(5); // Show only 5 products
    } else {
      setVisibleCount(products.length); // Show all products
    }
    setExpanded(!expanded);
  };

  return (
    <div className="mt-14 mb-12 p-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto flex flex-col gap-3">
          <p data-aos="fade-up" className="text-sm text-blue-900">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-gray-900">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {products.slice(0, visibleCount).map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[300px] w-[400px] object-fill rounded-lg"
                />

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">₹ {data.price}</h3>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.description}</p>
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-950 text-base">Material:</span> {data.material}
                  </p>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {products.length > 5 && (
            <div className="flex justify-center">
              <Button
                className="text-center mt-10 cursor-pointer bg-blue-600 text-white py-1 px-5 rounded-md"
                label={expanded ? "View Less" : "View More"}
                onClick={toggleView}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
