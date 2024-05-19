import React, { useState } from "react";
import "./AllInvoices.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AddInvoice from "../../../forms/addInvoice/AddInvoice";
import ReactIcons from "../../../reactIcons/ReactIcons";

const AllInvoices = ({ setOpenPurchase }) => {
  // Global icons
  const { closeIcon, addIcon } = ReactIcons();

  // Local state variable
  const [openSupplier, setOpenSupplier] = useState(false);

  // Credit Customer header
  const columns = [
    { field: "id", headerName: "Invoice ID", width: 130 },
    { field: "firstName", headerName: "Invoice No", width: 100 },
    { field: "firstName", headerName: "Date", width: 100 },
    { field: "lastName", headerName: "Customer Name", width: 100 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "phone", headerName: "Phone", width: 100 },
    { field: "description", headerName: "Description", width: 100 },
    { field: "amount", headerName: "Amount", width: 100 },
   
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
    <article className="All-invoices-container">
      <h2 className="invoices-title"> All Inoices </h2>

      <section className="add-invoice-wrapper">
        <h3 className="add-invoice-title">Add New Invoice</h3>
        <button
          onClick={() => setOpenSupplier(true)}
          className="add-invoice-btn"
        >
          <strong className="icon">{addIcon}</strong>
          Add Invoice
        </button>
      </section>
      <hr />

      <section className="invoices-list-table-wrapper">
        <h3 className="invoices-list-table-title"> List of Invoice </h3>
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

      {openSupplier && <AddInvoice setOpenSupplier={setOpenSupplier} />}
    </article>
  );
};

export default AllInvoices;
