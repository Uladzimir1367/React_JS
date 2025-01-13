// components/ProductList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from '../reducer/productsSlice';
import EditProduct from './EditProduct'; // Импортируем компонент EditProduct

const ProductList = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Available: {product.available ? 'Yes' : 'No'}</p>
                    <button onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
                    <button onClick={() => dispatch(toggleAvailability(product.id))}>Toggle Availability</button>
                    <EditProduct productId={product.id} /> {/* Добавляем компонент EditProduct */}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
