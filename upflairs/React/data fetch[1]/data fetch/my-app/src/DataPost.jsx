import axios from 'axios';
import React, { useState } from 'react';

function DataPost() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    category: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://dummyjson.com/products/add', product);
      console.log('Product added:', res.data);
      alert('Product added successfully!');
      setProduct({ title: '', description: '', price: '', brand: '', category: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div style={{ width: '60%', margin: '20px auto', border: '1px solid #ccc', padding: '20px' }}>
      <h2>Add New </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleChange} required /><br /><br />
        <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required /><br /><br />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required /><br /><br />
        <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} required /><br /><br />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required /><br /><br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
}

export default DataPost;
