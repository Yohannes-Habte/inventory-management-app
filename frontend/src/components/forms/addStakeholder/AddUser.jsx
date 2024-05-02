import React, { useState } from "react";
import "./AddUser.scss"
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  supplierRole: "",
  companyName: "",
  companyAddress: "",
  companyWebsite: "",
};

const AddUser = ({ setOpenSupplier }) => {
  // Global react icons
  const { userIcon, uploadIcon, phoneIcon, roleIcon, closeIcon } = ReactIcons();

  // Local state variables
  const [supplierInfos, setSupplierInfos] = useState(initialState);
  const [image, setImage] = useState("");
  const [agree, setAgree] = useState(false);

  // Destructing category data
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    supplierRole,
    companyName,
    companyAddress,
    companyWebsite,
  } = supplierInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierInfos({ ...supplierInfos, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setSupplierInfos({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      supplierRole: "",
      companyName: "",
      companyAddress: "",
      companyWebsite: "",
    });
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newCategory = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        supplierRole: supplierRole,
        companyName: companyName,
        companyAddress: companyAddress,
        companyWebsite: companyWebsite,
        image: image,
        agree: agree,
      };
      const { data } = await axios.post(
        `/categories/new-category`,
        newCategory
      );

      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="add-supplier-modal">
      <section className="add-supplier-popup-box">
        <span onClick={() => setOpenSupplier(false)} className="close">
          {closeIcon}
        </span>
        <h3 className="add-supplier-popup-box-title">Add New Customer</h3>
        <form className="add-supplier-form">
          <div className="inputs-container">
            {/* First Name */}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="text"
                name={"firstName"}
                id={"firstName"}
                autoComplete="name"
                required
                value={firstName}
                placeholder="Enter First Name"
                className="input-field"
              />

              <label htmlFor={"firstName"} className="input-label">
                First Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Middle Name*/}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="text"
                name={"middleName"}
                id={"middleName"}
                autoComplete="middleName"
                required
                value={middleName}
                placeholder="Enter Middle Name"
                className="input-field"
              />

              <label htmlFor={"middleName"} className="input-label">
                Middle Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Last Name */}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="text"
                name={"lastName"}
                id={"lastName"}
                autoComplete="lastName"
                required
                value={lastName}
                placeholder="Enter Last Name"
                className="input-field"
              />

              <label htmlFor={"lastName"} className="input-label">
                Last Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Email */}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="email"
                name={"email"}
                id={"email"}
                autoComplete="email"
                value={email}
                placeholder="Email Address"
                className="input-field"
              />

              <label htmlFor={"lastName"} className="input-label">
                Email Address
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* User Image */}
            <div className="input-container">
              <span className="input-icon"> {uploadIcon} </span>
              <input
                type="file"
                name="image"
                id="image"
                className="input-field"
              />
            </div>

            {/* Phone Number */}
            <div className="input-container">
              <span className="input-icon"> {phoneIcon} </span>
              <input
                type="text"
                name={"phoneNumber"}
                id={"phoneNumber"}
                autoComplete="phoneNumber"
                value={phoneNumber}
                placeholder="Enter Phone Number"
                className="input-field"
              />

              <label htmlFor={"profession"} className="input-label">
                Phone Number
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Select Supplier Role */}
            <div className="input-container">
              <span className="input-icon"> {roleIcon} </span>
              <select
                name="supplierRole"
                id="supplierRole"
                value={supplierRole}
                className="input-field"
              >
                <option value="Default">Select Customer Role </option>
                <option value="education"> Buyer </option>
                <option value="shopping"> Supplier </option>
                <option value="shopping"> Employee </option>
              </select>

              <label htmlFor={"supplierRole"} className="input-label">
                Select Customer Role
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Supplier Company Name */}
            <div className="input-container">
              <span className="input-icon"> {phoneIcon} </span>
              <input
                type="text"
                name={"companyName"}
                id={"companyName"}
                autoComplete="companyName"
                value={companyName}
                placeholder="Company Name"
                className="input-field"
              />

              <label htmlFor={"companyName"} className="input-label">
                Company Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Supplier Company Address */}
            <div className="input-container">
              <span className="input-icon"> {phoneIcon} </span>
              <input
                type="text"
                name={"companyAddress"}
                id={"companyAddress"}
                autoComplete="companyAddress"
                value={companyAddress}
                placeholder="Street, House No. Zip Code, City Name, State, Country"
                className="input-field"
              />

              <label htmlFor={"companyAddress"} className="input-label">
                Company Address
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Supplier Company Website */}
            <div className="input-container">
              <span className="input-icon"> {phoneIcon} </span>
              <input
                type="text"
                name={"companyWebsite"}
                id={"companyWebsite"}
                autoComplete="companyWebsite"
                value={companyWebsite}
                placeholder="Company Website"
                className="input-field"
              />

              <label htmlFor={"companyWebsite"} className="input-label">
                Company Website
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
              className="checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={"terms-of-user"}> Terms of Use</Link>
          </div>

          <button type="submit" className="add-supplier-btn">
            Submit
          </button>
        </form>
      </section>
    </article>
  );
};

export default AddUser;
