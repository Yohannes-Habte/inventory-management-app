import React, { useState } from "react";
import "./Categories.scss";
import AddCategory from "../../forms/addCategory/AddCategory";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactIcons from "../../reactIcons/ReactIcons";


const Categories = () => {
  // Global react Icons
  const { printIcon } = ReactIcons();

  // Local state variable
  const [openCategory, setOpenCategory] = useState(false);

  const columns = [
    { field: "id", headerName: "User ID", width: 130 },
    { field: "firstName", headerName: "First Name", width: 100 },
    { field: "lastName", headerName: "Last Name", width: 100 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "phone", headerName: "Phone", width: 100 },
    { field: "street", headerName: "Street Name", type: "number", width: 100 },
    { field: "zipCode", headerName: "Zip Code", width: 100 },
    { field: "city", headerName: "City", width: 100 },
    { field: "state", headerName: "State", width: 100 },
    { field: "country", headerName: "Country", width: 100 },

    {
      field: "action",
      headerName: "Action",
      width: 70,
      renderCell: (params) => {
        return <div className="action-wrapper"></div>;
      },
    },
  ];

  const rows = [];

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

      <DataGrid
        // Rows
        rows={rows}
        // Columns
        columns={columns}
        // Initial state
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        // Create search bar
        slots={{ toolbar: GridToolbar }}
        // Search a specific user
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        // Page size optons
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        //
      />

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
