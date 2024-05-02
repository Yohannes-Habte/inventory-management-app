import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AddPurchase from "../../../forms/addPurchase/AddPurchase";

const Purchases = () => {
  // Local state variable
  const [openPurchase, setOpenPurchase] = useState(false);

  // Credit Customer header
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
    <article className="All-products-container">
      <h2 className="products-title"> All Purchases </h2>

      <section className="add-product-wrapper">
        <h3 className="add-product-title">Add New Purchase</h3>
        <button
          onClick={() => setOpenPurchase(true)}
          className="add-product-btn"
        >
          Add Purchase
        </button>
      </section>
      <hr />

      <section className="product-lists-table-wrapper">
        <h3 className="product-lists-table-title"> List of Purchases </h3>

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
      </section>

      {openPurchase && <AddPurchase setOpenPurchase={setOpenPurchase} />}
    </article>
  );
};

export default Purchases;
