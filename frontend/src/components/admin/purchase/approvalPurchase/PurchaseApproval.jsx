import React from 'react'
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactIcons from "../../../reactIcons/ReactIcons";

const PurchaseApproval = () => {
  // Global react Icons
  const {checkIcon, addIcon} = ReactIcons()
  // Credit Customer header
  const columns = [
    { field: "id", headerName: "User ID", width: 130 },
    { field: "firstName", headerName: "Serial No", width: 100 },
    { field: "lastName", headerName: "Date", width: 150 },
    { field: "email", headerName: "Supplier Name", width: 150 },
    { field: "phone", headerName: "Category", width: 150 },
    { field: "street", headerName: "Product Name", width: 150 },
    { field: "zipCode", headerName: "Product Quanity", width: 100 },
    { field: "city", headerName: "Status", width: 100 },

    {
      field: "action",
      headerName: "Action",
      width: 70,
      renderCell: (params) => {
        return  <span className="print-icon"> {checkIcon} add </span>;
      },
    },
  ];

  const rows = [];

  return (
    <article className="credit-customers-container">
      <h2 className="credit-customers-container-title">Pending Purchases</h2>

      <section className="credit-customer-data-print-wrapper">
        <h3 className="credit-customer-data-print-wrapper-title">
          Purchase Pending Data
        </h3>
        <Link className="credit-customer-print">
          <span className="print-icon"> {addIcon} </span> Purchase Pending
        </Link>
      </section>

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
    </article>
  );
};



export default PurchaseApproval;
