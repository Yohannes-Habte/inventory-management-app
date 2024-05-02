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
  productQuantity: "",
  categoryName: "",
};
const AddPurchase = ({ setOpenPurchase }) => {
  // Global icons
  const { closeIcon, categoryIcon, depIcon, paragraphIcon } = ReactIcons();

  // Local state variables
  const [purchaseInfos, setPurchaseInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructing category data
  const {
    purchaseNo,
    purchaseDate,
    supplierName,
    productName,
    productQuantity,
    categoryName,
  } = purchaseInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchaseInfos({ ...purchaseInfos, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setPurchaseInfos({
      purchaseNumber: "",
      date: "",
      supplierName: "",
      productName: "",
      quantity: "",
      categoryName: "",
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
        productQuantity: productQuantity,
        categoryName: categoryName,
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
              <span className="icon"> {categoryIcon} </span>
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
              <span className="icon"> {categoryIcon} </span>
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
              <span className="icon"> {categoryIcon} </span>
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
              <span className="icon"> {categoryIcon} </span>
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

               {/* Product Qunatity */}
               <div className="input-container">
              <span className="icon"> {categoryIcon} </span>
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

            {/* Category Name */}
            <div className="input-container">
              <span className="icon"> {categoryIcon} </span>
              <select
                name="categoryName"
                id="categoryName"
                value={categoryName}
                onChange={handleChange}
                className="input-field"
              >
                <option value="default">Select Product Category</option>
              </select>

              <label htmlFor={"firstName"} className="input-label">
                Categrory Name
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
              className="consent-checkbox"
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
