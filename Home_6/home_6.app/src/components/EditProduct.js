// components/EditProduct.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../reducer/productsSlice";

const EditProduct = ({ productId }) => {
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === productId)
  );
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={updatedProduct.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="description"
        value={updatedProduct.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="price"
        value={updatedProduct.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          name="available"
          checked={updatedProduct.available}
          onChange={() =>
            setUpdatedProduct({
              ...updatedProduct,
              available: !updatedProduct.available,
            })
          }
        />
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
