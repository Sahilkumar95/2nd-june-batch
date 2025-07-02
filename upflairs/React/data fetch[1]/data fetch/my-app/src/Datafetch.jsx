import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Datafetch() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://dummyjson.com/products');
        setProducts(res.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ width: '90%', margin: '20px auto' }}>
      <h2> Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            padding: '15px',
            borderRadius: '10px'
          }}
        >
          <h3>{product.title} - ${product.price}</h3>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Datafetch;
