import React from "react";
import "./CreditCustomers.scss";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactIcons from "../../../reactIcons/ReactIcons";

const CreditCustomers = () => {
  // Global react Icons
  const {printIcon} = ReactIcons()
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
    <article className="credit-customers-container">
      <h2 className="credit-customers-container-title">Credit Customers</h2>

      <section className="credit-customer-data-print-wrapper">
        <h3 className="credit-customer-data-print-wrapper-title">
          Credit Customer Data
        </h3>
        <Link className="credit-customer-print">
          <span className="print-icon"> {printIcon} </span> Print Credit Customers
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

export default CreditCustomers;
