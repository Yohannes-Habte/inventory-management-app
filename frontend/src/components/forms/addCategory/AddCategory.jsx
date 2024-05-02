import React, { useState } from "react";
import "./AddCategory.scss";
import axios from "axios";
import ReactIcons from "../../reactIcons/ReactIcons";
import { Link } from "react-router-dom";

const initialState = {
  categoryName: "",
  description: "",
  keywords: "",
  department: "",
};
const AddCategory = ({ setOpenCategory }) => {
  // Global icons
  const { closeIcon, categoryIcon, depIcon, paragraphIcon } = ReactIcons();

  // Local state variables
  const [categoryInfos, setCategoryInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructing category data
  const { categoryName, description, keywords, department } = categoryInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryInfos({ ...categoryInfos, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setCategoryInfos({
      categoryName: "",
      description: "",
      keywords: "",
      department: "",
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newCategory = {
        categoryName: categoryName,
        description: description,
        keywords: keywords,
        department: department,
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
    <article className="category-modal">
      <section className="new-category-popup-Box">
        <span onClick={() => setOpenCategory(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-category-title"> Add New Category</h2>

        <form action="" onSubmit={handleSubmit} className="add-category-form">
          {/* Category Name */}
          <div className="input-container">
            <span className="icon"> {categoryIcon} </span>
            <input
              type="text"
              name={"categoryName"}
              id={"categoryName"}
              autoComplete="categoryName"
              value={categoryName}
              onChange={handleChange}
              placeholder="Enter Category Name"
              className="input-field"
            />

            <label htmlFor={"firstName"} className="input-label">
              Categrory Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Department Description */}
          <div className="input-container">
            <span className="icon"> {paragraphIcon} </span>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={handleChange}
              cols="30"
              rows="6"
              placeholder="Enter Paragraph"
              className="input-field"
            ></textarea>

            <label htmlFor={"description"} className="input-label">
              Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Department Keywords */}
          <div className="input-container">
            <span className="icon"> {paragraphIcon} </span>
            <textarea
              name="keywords"
              id="keywords"
              value={keywords}
              onChange={handleChange}
              cols="30"
              rows="6"
              placeholder="Enter Keywords"
              className="input-field"
            ></textarea>

            <label htmlFor={"keywords"} className="input-label">
              Keywords
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Department */}
          <div className="input-container">
            <span className="icon"> {depIcon} </span>
            <select
              name="department"
              id="department"
              value={department}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Default"> Select Department </option>
            </select>

            <label htmlFor={"firstName"} className="input-label">
              Select Department
            </label>
            <span className="input-highlight"></span>
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

          <button className="add-new-category-btn">Add Category</button>
        </form>
      </section>
    </article>
  );
};

export default AddCategory;
