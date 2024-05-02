import React, { useState } from 'react'
import AddUser from '../../../forms/addStakeholder/AddUser';
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactIcons from "../../../reactIcons/ReactIcons";


const Customers = () => {
    // Global react Icons
    const {printIcon} = ReactIcons()

      // Local state variable
  const [openSupplier, setOpenSupplier] = useState(false);
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
    <article className="All-suppliers-container">
      <h2 className="suppliers-title"> All Customers </h2>

      <section className="add-supplier-wrapper">
        <h3 className="add-supplier-title">Add New Customer</h3>
        <button
          onClick={() => setOpenSupplier(true)}
          className="add-supplier-btn"
        >
          Add Customer
        </button>
      </section>
      <hr />

      <section className="suppliers-list-table-wrapper">
        <h3 className="suppliers-list-table-title"> Customers </h3>

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

      {openSupplier && <AddUser setOpenSupplier={setOpenSupplier} />}
    </article>
  )
}

export default Customers
