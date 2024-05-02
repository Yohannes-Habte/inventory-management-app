import React, { useState } from "react";
import "./Suppliers.scss";
import AddUser from "../../forms/addStakeholder/AddUser";


const Suppliers = () => {
  // Local state variable
  const [openSupplier, setOpenSupplier] = useState(false);
  return (
    <article className="All-suppliers-container">
      <h2 className="suppliers-title"> All Suppliers </h2>

      <section className="add-supplier-wrapper">
        <h3 className="add-supplier-title">Add New Supplier</h3>
        <button
          onClick={() => setOpenSupplier(true)}
          className="add-supplier-btn"
        >
          Add Supplier
        </button>
      </section>
      <hr />

      <section className="suppliers-list-table-wrapper">
        <h3 className="suppliers-list-table-title"> Suppliers </h3>
      </section>

      {openSupplier && <AddUser setOpenSupplier={setOpenSupplier} />}
    </article>
  );
};

export default Suppliers;
