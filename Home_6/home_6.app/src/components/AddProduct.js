// components/AddProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reducer/productsSlice';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: '', description: '', price: '', available: false });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({ ...product, id: Date.now() }));
        setProduct({ name: '', description: '', price: '', available: false });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
            <label>
                Available:
                <input type="checkbox" name="available" checked={product.available} onChange={() => setProduct({ ...product, available: !product.available })} />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
