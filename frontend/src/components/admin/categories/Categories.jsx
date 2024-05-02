import React, { useState } from "react";
import "./Categories.scss";
import AddCategory from "../../forms/addCategory/AddCategory";

const Categories = () => {
  // Local state variable
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <article className="categories-wrapper">
      <h2 className="categories-title"> All Categories </h2>

      <section className="add-category-wrapper">
        <h3 className="add-category-title">Add New Category</h3>
        <button
          onClick={() => setOpenCategory(true)}
          className="add-category-btn"
        >
          Add Category
        </button>
      </section>
      <hr />

      <section className="category-wrapper">
        <h3 className="category-title"> Category Name</h3>
        <p className="category-description"> Category Description</p>
        <p className="category-keywords">Category Keywords</p>
        <p className="category-department">Category Department</p>
      </section>

      {openCategory && <AddCategory setOpenCategory={setOpenCategory} />}
    </article>
  );
};

export default Categories;
