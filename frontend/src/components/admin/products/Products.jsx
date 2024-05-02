import React, { useState } from "react";
import "./Products.scss"
import AddProduct from "../newProduct/AddProduct";

const Products = () => {
  // Local state variable
  const [openProduct, setOpenProduct] = useState(false);
  return (
    <article className="All-products-container">
      <h2 className="products-title"> All Products </h2>

      <section className="add-product-wrapper">
        <h3 className="add-product-title">Add New Product</h3>
        <button
          onClick={() => setOpenProduct(true)}
          className="add-product-btn"
        >
          Add Product
        </button>
      </section>
      <hr />

      <section className="product-lists-table-wrapper">
        <h3 className="product-lists-table-title"> Products </h3>
      </section>

      {openProduct && <AddProduct setOpenProduct={setOpenProduct} />}
    </article>
  );
};

export default Products;
