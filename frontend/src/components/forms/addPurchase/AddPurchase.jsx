import React, { useState } from "react";
import "./AddPurchase.scss";
import ReactIcons from "../../reactIcons/ReactIcons";
// import axios from "axios";

const initialState = {
  purchaseDate: "",
  purchaseNo: "",
  supplierName: "",
  description: "",
  productCategory: "",
  productName: "",
  productPrice: "",
  productQuantity: 1,
  deliveryDate: "",
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
    trashIcon,
  } = ReactIcons();

  // Local state variables
  const [purchaseInfos, setPurchaseInfos] = useState(initialState);
  const [morePurchases, setMorePurchases] = useState([]);

  console.log(morePurchases);

  // Destructing category data
  const {
    purchaseDate,
    purchaseNo,
    supplierName,
    description,
    productName,
    productPrice,
    productQuantity,
    productCategory,
    deliveryDate,
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
      deliveryDate: "",
      description: "",
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const additionalPurchase = {
        purchaseDate: purchaseDate,
        purchaseNo: purchaseNo,
        supplierName: supplierName,
        productCategory: productCategory,
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity,
        deliveryDate: deliveryDate,
      };
      setMorePurchases([...morePurchases, additionalPurchase]);
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
        <form onSubmit={handleSubmit} action="" className="add-purchase-form">
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

          {/* Product Category will be desplayed when the supplier name is selected */}
          <div className="input-container">
            <span className="icon"> {categoryIcon} </span>
            <select
              name="productCategory"
              id="productCategory"
              value={productCategory}
              onChange={handleChange}
              className="input-field"
            >
              <option value="default">Select Product Category</option>
              <option value="laptop">Laptop</option>
              <option value="printer">Printer</option>
            </select>

            <label htmlFor={"productCategory"} className="input-label">
              Product Category
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Product Description */}
          <div className="input-container">
            <span className="icon"> {messageIcon} </span>
            <input
              type="text"
              name={"description"}
              id={"description"}
              autoComplete="description"
              value={description}
              onChange={handleChange}
              placeholder="Enter Product Description"
              className="input-field"
            />

            <label htmlFor={"description"} className="input-label">
              Product Description
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
              id={"productPrice"}
              autoComplete="productPrice"
              value={productPrice}
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

          {/* Purchase Date */}
          <div className="input-container">
            <span className="icon"> {dateIcon} </span>
            <input
              type="date"
              name={"deliveryDate"}
              id={"deliveryDate"}
              autoComplete="deliveryDate"
              value={deliveryDate}
              onChange={handleChange}
              placeholder="Enter Delivery Date"
              className="input-field"
            />

            <label htmlFor={"deliveryDate"} className="input-label">
              Delivery Date
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Add Purchase Button */}
          <button className="add-new-purchase-btn"> Add More </button>
        </form>

        <article className="new-purchase-products-container">
          <h3> Total Purchased Products </h3>
          <form action="" className="purchase-form">
            <table className="purchase-table">
              <thead className="table-head">
                <tr className="head-row">
                  <th className="head-cell"> Purchase Date</th>
                  <th className="head-cell"> Serial No. </th>
                  <th className="head-cell"> Supplier Name</th>
                  <th className="head-cell"> Category</th>
                  <th className="head-cell"> Description</th>
                  <th className="head-cell"> Product</th>
                  <th className="head-cell"> Price </th>
                  <th className="head-cell"> Quantity</th>
                  <th className="head-cell"> Delivery Date </th>
                  <th className="head-cell"> Subtotal </th>
                  <th className="head-cell"> Action</th>
                </tr>
              </thead>

              {morePurchases.map((product, index) => {
                return (
                  <tbody className="purchase-table-body">
                    <tr className="purchase-body-row">
                      <td className="body-cell"> {product.purchaseDate} </td>
                      <td className="body-cell"> {product.purchaseNo} </td>
                      <td className="body-cell"> {product.supplierName}</td>
                      <td className="body-cell"> {product.productCategory} </td>
                      <td className="body-cell"> {product.description} </td>
                      <td className="body-cell"> {product.productName} </td>
                      <td className="body-cell"> {product.productPrice}</td>
                      <td className="body-cell"> {product.productQuantity} </td>
                      <td className="body-cell">{product.deliveryDate}</td>
                      <td className="body-cell">
                        ${product.productPrice * product.productQuantity}
                      </td>

                      <td className="body-cell">
                        <span className="delete-icon"> {trashIcon} </span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            <h2>Total Price = $500</h2>

            {/* Add Purchase Button */}
            <button className="add-new-purchase-btn"> Submit </button>
          </form>
        </article>
      </section>
    </article>
  );
};

export default AddPurchase;
