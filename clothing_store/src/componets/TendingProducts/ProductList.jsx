import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../CommonUtilities/Button/Button';
import { JSON_FILES } from '../../utils/constant';

function ProductList() {
  const [uniforms, setUniforms] = useState([]);
  const [filteredUniforms, setFilteredUniforms] = useState([]);
  const [selectedUniform, setSelectedUniform] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(JSON_FILES.PRODUCT_LIST);
        const data = await response.json();
        setUniforms(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };
    fetchData();
  }, []);

  useEffect(() => {
    const category = new URLSearchParams(location.search).get('category');
    const filteredData = category ? uniforms.filter(({ category: c }) => c === category) : uniforms;
    setFilteredUniforms(filteredData);
  }, [uniforms, location.search]);

  const handleViewDetails = (uniform) => {
    setSelectedUniform(uniform);
    setMainImage(uniform.image);
  };

  const handleOrderNow = () => {
    if (selectedUniform.availability === 'Out of Stock') {
      Swal.fire({
        title: 'Order Failed!',
        text: 'This item is currently out of stock.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        title: 'Order Placed Successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setSelectedUniform(null);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading products...</div>;
  }

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {filteredUniforms.map((uniform) => (
          <div key={uniform.id} className="border rounded-lg shadow-lg p-4 bg-gray-100">
            <img src={uniform.image} alt={uniform.title} className="max-h-72 w-full object-contain mb-6" />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{uniform.title}</h3>
              <p className="text-gray-700">Price: ₹{uniform.price}</p>
              <p className={uniform.availability === 'Out of Stock' ? 'text-red-600' : 'text-green-600'}>
                <span className="text-sm">{uniform.availability}</span>
              </p>
              <p className="text-sm text-yellow-500">{uniform.rating} ★</p>
              <Button
                label="View Details"
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                onClick={() => handleViewDetails(uniform)}
              />
            </div>
          </div>
        ))}
      </div>

      {selectedUniform && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3">{selectedUniform.title}</h2>
              <Button
                label="X"
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => setSelectedUniform(null)}
              />
            </div>

            <div className="flex gap-4 mt-6">
              <div className="flex flex-col gap-2">
                {[selectedUniform.image, ...(selectedUniform.additionalImages || [])].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Additional view ${index}`}
                    className={`w-16 h-16 cursor-pointer object-cover rounded-md border ${mainImage === img ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
              <div className="flex-1">
                <img src={mainImage} alt={selectedUniform.title} className="w-full h-60 object-contain rounded-md" />
              </div>
            </div>

            <p className="text-gray-700 mt-2">Price: ₹{selectedUniform.price}</p>
            <p className={selectedUniform.availability === 'Out of Stock' ? 'text-red-600' : 'text-green-600'}>
              Availability: {selectedUniform.availability}
            </p>
            <p className="text-yellow-500">Rating: {selectedUniform.rating} ★</p>
            <p className="text-gray-600 mt-2">
              <strong>Description:</strong> {selectedUniform.description}
            </p>
            <p className="text-gray-600">
              <strong>Available Sizes:</strong> {Array.isArray(selectedUniform.sizes) ? selectedUniform.sizes.join(', ') : 'N/A'}
            </p>

            <Button
              label="Order Now"
              className={`px-4 py-1 rounded mt-6 ${selectedUniform.availability === 'Out of Stock' ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
              onClick={handleOrderNow}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
