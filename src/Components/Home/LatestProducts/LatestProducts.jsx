// LatestProduct.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../Card/ProductCard';

const LatestProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        const latest = response.data
          .sort((a, b) => new Date(b.creationAt) - new Date(a.creationAt))
          .slice(0, 4);
        setProducts(latest);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  console.log(products)
  if (loading) {
    return (
      <section className="bg-[#e7e7e3] p-8 md:p-16">
        <div className="text-center py-20 uppercase font-black text-gray-600">
          Loading Drops...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#e7e7e3] px-4 py-8 md:px-8 md:py-16 lg:px-16">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#222] leading-none uppercase">
          Don't miss out <br /> New Drops
        </h1>
        <button className="bg-[#5c7cf2] hover:bg-[#4a68d4] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-lg uppercase text-xs md:text-sm transition-colors whitespace-nowrap">
          Shop New Drops
        </button>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestProduct;