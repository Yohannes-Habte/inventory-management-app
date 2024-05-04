import React, { useState } from "react";
import "./AddPurchase.scss";
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  purchaseNo: "",
  purchaseDate: "",
  supplierName: "",
  productName: "",
  productPrice: "",
  productQuantity: "",
  productCategory: "",
  productTag: "",
  productDescription: "",
};
const AddPurchase = ({ setOpenPurchase }) => {
  // Global icons
  const {
    closeIcon,
    categoryIcon,
    serialIcon,
    messageIcon,
    priceIcon,
    dateIcon,
    userIcon,
    productIcon,
    quantityIcon,
    tagIcon,
  } = ReactIcons();

  // Local state variables
  const [purchaseInfos, setPurchaseInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructing category data
  const {
    purchaseNo,
    purchaseDate,
    supplierName,
    productName,
    productPrice,
    productQuantity,
    productCategory,
    productTag,
    productDescription,
  } = purchaseInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchaseInfos({ ...purchaseInfos, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setPurchaseInfos({
      purchaseNo: "",
      purchaseDate: "",
      supplierName: "",
      productName: "",
      productPrice: "",
      productQuantity: "",
      productCategory: "",
      productTag: "",
      productDescription: "",
    });
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPurchase = {
        purchaseNo: purchaseNo,
        purchaseDate: purchaseDate,
        supplierName: supplierName,
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity,
        productCategory: productCategory,
        productTag: productTag,
        productDescription: productDescription,
        agree: agree,
      };
      const { data } = await axios.post(
        `/categories/new-category`,
        newPurchase
      );

      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="add-purchase-modal">
      <section className="add-purchase-popup-box">
        <span onClick={() => setOpenPurchase(false)} className="close">
          {closeIcon}{" "}
        </span>
        <h3 className="add-purchase-popup-box-title">Add New Purchase</h3>
        <form action="" className="add-purchase-form">
          <div className="inputs-wrapper">
            {/* Purchase No */}
            <div className="input-container">
              <span className="icon"> {serialIcon} </span>
              <input
                type="text"
                name={"purchaseNo"}
                id={"purchaseNo"}
                autoComplete="purchaseNo"
                value={purchaseNo}
                onChange={handleChange}
                placeholder="Enter Purchase No."
                className="input-field"
              />

              <label htmlFor={"purchaseNo"} className="input-label">
                Purchase No.
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Purchase Date */}
            <div className="input-container">
              <span className="icon"> {dateIcon} </span>
              <input
                type="date"
                name={"purchaseDate"}
                id={"purchaseDate"}
                autoComplete="purchaseDate"
                value={purchaseDate}
                onChange={handleChange}
                placeholder="Enter Purchase Date"
                className="input-field"
              />

              <label htmlFor={"purchaseDate"} className="input-label">
                Purchase Date
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Supplier Name */}
            <div className="input-container">
              <span className="icon"> {userIcon} </span>
              <input
                type="text"
                name={"supplierName"}
                id={"supplierName"}
                autoComplete="supplierName"
                value={supplierName}
                onChange={handleChange}
                placeholder="Enter Supplier Name"
                className="input-field"
              />

              <label htmlFor={"supplierName"} className="input-label">
                Supplier Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Product Name */}
            <div className="input-container">
              <span className="icon"> {productIcon} </span>
              <input
                type="text"
                name={"productName"}
                id={"productName"}
                autoComplete="productName"
                value={productName}
                onChange={handleChange}
                placeholder="Enter Product Name"
                className="input-field"
              />

              <label htmlFor={"productName"} className="input-label">
                Product Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Product Price */}
            <div className="input-container">
              <span className="icon"> {priceIcon} </span>
              <input
                type="number"
                name={"productPrice"}
                id={"productQuantity"}
                autoComplete="productQuantity"
                value={productQuantity}
                onChange={handleChange}
                placeholder="Enter Product Price"
                className="input-field"
              />

              <label htmlFor={"productPrice"} className="input-label">
                Product Price
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Product Qunatity */}
            <div className="input-container">
              <span className="icon"> {quantityIcon} </span>
              <input
                type="number"
                name={"productQuantity"}
                id={"productQuantity"}
                autoComplete="productQuantity"
                value={productQuantity}
                onChange={handleChange}
                placeholder="Enter Product Qunatity"
                className="input-field"
              />

              <label htmlFor={"productQuantity"} className="input-label">
                Product Qunatity
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Product tag */}
            <div className="input-container">
              <span className="icon"> {tagIcon} </span>
              <input
                type="text"
                name={"productTag"}
                id={"productTag"}
                autoComplete="productTag"
                value={productTag}
                onChange={handleChange}
                placeholder="Enter Product Tag"
                className="input-field"
              />

              <label htmlFor={"productTag"} className="input-label">
                Product Tage
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Product Category */}
            <div className="input-container">
              <span className="icon"> {categoryIcon} </span>
              <select
                name="text"
                id="productCategory"
                value={productCategory}
                onChange={handleChange}
                className="input-field"
              >
                <option value="default">Select Product Category</option>
              </select>

              <label htmlFor={"productCategory"} className="input-label">
                Product Categrory
              </label>
              <span className="input-highlight"></span>
            </div>
          </div>

          <div className="input-textarea-container">
            <span className="icon"> {messageIcon} </span>
            <textarea
              name="productDescription"
              id="productDescription"
              rows={6}
              cols={30}
              value={productDescription}
              onChange={handleChange}
              placeholder="Enter Product Description"
              className="textarea-input-field"
            ></textarea>

            <label
              htmlFor={"productDescription"}
              className="textarea-input-label"
            >
              Product Description
            </label>
            <span className="textarea-input-highlight"></span>
          </div>

          {/* Consent */}
          <div className="input-consent">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={"terms-of-user"}> Terms of Use</Link>
          </div>

          {/* Add Purchase Button */}
          <button className="add-new-purchase-btn"> Add Purchase </button>
        </form>
      </section>
    </article>
  );
};

export default AddPurchase;
