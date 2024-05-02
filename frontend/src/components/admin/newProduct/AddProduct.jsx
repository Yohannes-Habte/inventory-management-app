import React, { useState } from "react";
import "./AddProduct.scss";
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  productName: "",
  description: "",
  keywords: "",
  originalPrice: "",
  discountPrice: "",
  productImages: "",
  tag: "",
  department: "",
  category: "",
  stock: "",
  agree: false,
};
const AddProduct = ({ setOpenProduct }) => {
  // Global icons
  const {
    closeIcon,
    depIcon,
    categoryIcon,
    messageIcon,
    productIcon,
    priceIcon,
    uploadIcon,
  } = ReactIcons();

  // Local state variables
  const [productInfos, setProductInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Update change input data
  const updateChange = (e) => {
    const { name, value } = e.target;
    setProductInfos({ ...productInfos, [name]: value });
  };

  // Destructing the courseInfos
  const {
    productName,
    description,
    keywords,
    originalPrice,
    discountPrice,
    productImages,
    department,
    category,
    stock,
    tag,
  } = productInfos;

  // Reset courseInfos variables
  const reset = () => {
    setProductInfos({
      productName: "",
      description: "",
      keywords: "",
      originalPrice: "",
      discountPrice: "",
      productImages: "",
      department: "",
      category: "",
      stock: "",
      tag: "",
    });
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newProduct = {
        productName: productName,
        description: description,
        keywords: keywords,
        originalPrice: originalPrice,
        discountPrice: discountPrice,
        productImages: productImages,
        department: department,
        category: category,
        stock: stock,
        tag: tag,
        agree: agree,
      };
      const { data } = await axios.post(`products/new-product`, newProduct);

      reset();
    } catch (err) {}
  };

  return (
    <article className="add-product-modal">
      <section className="add-product-popup-box">
        <span onClick={() => setOpenProduct(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-product-title"> Add New Product</h2>
        <form action="" onSubmit={handleSubmit} className="add-product-form">
          <div className="inputs-wrapper">
            {/* Prodauct Name */}
            <div className="input-container">
              <span className="input-icon"> {productIcon} </span>
              <input
                type="text"
                name={"productName"}
                id={"productName"}
                autoComplete="productName"
                value={productName}
                onChange={updateChange}
                placeholder="Enter Product Name"
                className="input-field"
              />

              <label htmlFor={"productName"} className="input-label">
                Product Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Product Description */}
            <div className="input-container">
              <span className="input-icon"> {messageIcon} </span>
              <input
                type="text"
                name={"description"}
                id={"description"}
                autoComplete="description"
                value={description}
                onChange={updateChange}
                placeholder="Enter Description"
                className="input-field"
              />

              <label htmlFor={"description"} className="input-label">
                Product Description
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Keywords */}
            <div className="input-container">
              <span className="input-icon"> {messageIcon} </span>
              <input
                type="text"
                name={"keywords"}
                id={"keywords"}
                autoComplete="keywords"
                value={keywords}
                onChange={updateChange}
                placeholder="Enter Keywords"
                className="input-field"
              />

              <label htmlFor={"keywords"} className="input-label">
                Product Keywords
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Original Price */}
            <div className="input-container">
              <span className="input-icon"> {priceIcon} </span>
              <input
                type="number"
                name={"originalPrice"}
                id={"originalPrice"}
                autoComplete="originalPrice"
                value={originalPrice}
                onChange={updateChange}
                placeholder="Enter Original Price"
                className="input-field"
              />

              <label htmlFor={"originalPrice"} className="input-label">
                Original Price
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Discounted  Price */}
            <div className="input-container">
              <span className="input-icon"> {priceIcon} </span>
              <input
                type="number"
                name={"discountPrice"}
                id={"discountPrice"}
                autoComplete="discountPrice"
                value={discountPrice}
                onChange={updateChange}
                placeholder="Enter Discount Price"
                className="input-field"
              />

              <label htmlFor={"discountPrice"} className="input-label">
                Original Price
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Product Images */}
            <div className="input-container">
              <span className="input-icon"> {uploadIcon} </span>
              <input
                type="file"
                name={"eventImages"}
                id={"eventImages"}
                autoComplete="eventImages"
                value={productImages}
                onChange={updateChange}
                className="input-field"
              />

              <label htmlFor={"discountPrice"} className="input-label">
                Product Images
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Stock */}
            <div className="input-container">
              <span className="input-icon"> {productIcon} </span>
              <input
                type="number"
                name={"stock"}
                id={"stock"}
                autoComplete="stock"
                value={stock}
                onChange={updateChange}
                placeholder="Enter Product Stock"
                className="input-field"
              />

              <label htmlFor={"stock"} className="input-label">
                Stock
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Tag */}
            <div className="input-container">
              <span className="input-icon"> {productIcon} </span>
              <input
                type="number"
                name={"tag"}
                id={"tag"}
                autoComplete="tag"
                value={tag}
                onChange={updateChange}
                placeholder="Enter Product Tag"
                className="input-field"
              />

              <label htmlFor={"tag"} className="input-label">
                Tag
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Select Department */}
            <div className="input-container">
              <span className="input-icon"> {depIcon} </span>
              <select
                name="department"
                id="department"
                value={department}
                onChange={updateChange}
                className="input-field"
              >
                <option value="Default">Select a Department</option>
              </select>

              <label htmlFor={"firstName"} className="input-label">
                Select Department
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Select Category */}
            <div className="input-container">
              <span className="input-icon"> {categoryIcon} </span>
              <select
                name="category"
                id="category"
                value={category}
                onChange={updateChange}
                className="input-field"
              >
                <option value="Default">Select a Category</option>
              </select>

              <label htmlFor={"firstName"} className="input-label">
                Select Category
              </label>
              <span className="input-highlight"></span>
            </div>
          </div>

          {/* Consent */}
          <div className="input-consent">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={agree}
              onChange={updateChange}
              className="checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={"terms-of-user"}> Terms of Use</Link>
          </div>

          <button className="add-new-product-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddProduct;
