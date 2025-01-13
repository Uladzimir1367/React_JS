// App.js
import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
    console.log('App component rendered');
    return (
        <div>
            <AddProduct />
            <ProductList />
        </div>
    );
};

export default App;


