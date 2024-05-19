import React, { useState } from "react";
import "./AddInvoice.scss";
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";
const initialState = {
  invoiceNo: "",
  invoiceDate: "",
  categoryName: "",
  productName: "",
  productPrice: "",
  stock: "",
  description: "",
  status: "",
  customerName: "",
};
const AddInvoice = () => {
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
  const [invoiceInfos, setInvoiceInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructing category data
  const {
    invoiceNo,
    invoiceDate,
    categoryName,
    productName,
    productPrice,
    stock,
    description,
    status,
    customerName,
  } = invoiceInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceInfos({ ...invoiceInfos, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setInvoiceInfos({
      invoiceNo: "",
      invoiceDate: "",
      categoryName: "",
      productName: "",
      productPrice: "",
      stock: "",
      description: "",
      status: "",
      customerName: "",
    });
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPurchase = {
        invoiceNo: invoiceNo,
        invoiceDate: invoiceDate,
        categoryName: categoryName,
        productName: productName,
        productPrice: productPrice,
        stock: stock,
        description: description,
        status: status,
        customerName: customerName,
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
    <article className="add-invoice-modal">
      <section className="add-invoice-popup-box">
        <span className="close">{closeIcon}</span>

        <h3 className="add-purchase-popup-box-title">Add New Invoice</h3>

        <form action="" className="add-invoice-form">
          <fieldset></fieldset>
          <fieldset>
            {/* Invoice No */}
            <div className="input-container">
              <span className="icon"> {serialIcon} </span>
              <input
                type="text"
                name={"invoiceNo"}
                id={"invoiceNo"}
                autoComplete="invoiceNo"
                value={invoiceNo}
                onChange={handleChange}
                placeholder="Enter Invoice No."
                className="input-field"
              />

              <label htmlFor={"invoiceNo"} className="input-label">
                Invoice No.
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Invoice Date */}
            <div className="input-container">
              <span className="icon"> {dateIcon} </span>
              <input
                type="date"
                name={"invoiceDate"}
                id={"invoiceDate"}
                autoComplete="invoiceDate"
                value={invoiceDate}
                onChange={handleChange}
                placeholder="Enter Invoice Date"
                className="input-field"
              />

              <label htmlFor={"invoiceDate"} className="input-label">
                Invoice Date
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Product Category */}

            <div className="input-container">
              <span className="icon"> {categoryIcon} </span>
              <select
                name="categoryName"
                id="categoryName"
                value={categoryName}
                onChange={handleChange}
                className="input-field"
              >
                <option value="default">Select Category</option>
              </select>

              <label htmlFor={"categoryName"} className="input-label">
                Categrory
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

            {/* Stock */}
            <div className="input-container">
              <span className="icon"> {productIcon} </span>
              <input
                type="text"
                name={"stock"}
                id={"stock"}
                autoComplete="stock"
                value={stock}
                onChange={handleChange}
                placeholder="Enter Stock"
                className="input-field"
              />

              <label htmlFor={"stock"} className="input-label">
                Stock
              </label>
              <span className="input-highlight"></span>
            </div>
          </fieldset>
          <fieldset>
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
                autoComplete="productQuantity"
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
          </fieldset>

          <fieldset>
            {/* Description */}
            <div className="input-textarea-container">
              <span className="icon"> {messageIcon} </span>
              <textarea
                name="description"
                id="description"
                rows={6}
                cols={30}
                value={description}
                onChange={handleChange}
                placeholder="Enter Description"
                className="textarea-input-field"
              ></textarea>

              <label htmlFor={"description"} className="textarea-input-label">
                Description
              </label>
              <span className="textarea-input-highlight"></span>
            </div>
          </fieldset>

          <fieldset>
            {/* Select Status */}
            <div className="input-container">
              <span className="icon"> {categoryIcon} </span>
              <select
                name="status"
                id="status"
                value={status}
                onChange={handleChange}
                className="input-field"
              >
                <option value="default">Select Status</option>
              </select>

              <label htmlFor={"status"} className="input-label">
                Select Status
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Select Customer */}
            <div className="input-container">
              <span className="icon"> {categoryIcon} </span>
              <select
                name="customerName"
                id="customerName"
                value={customerName}
                onChange={handleChange}
                className="input-field"
              >
                <option value="default">Select Customer</option>
              </select>

              <label htmlFor={"customerName"} className="input-label">
                Select Customer
              </label>
              <span className="input-highlight"></span>
            </div>
          </fieldset>
          <button>Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddInvoice;
