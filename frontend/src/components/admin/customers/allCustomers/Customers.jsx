import React, { useState } from 'react'
import AddUser from '../../../forms/addStakeholder/AddUser';


const Customers = () => {
  // Local state variable
  const [openSupplier, setOpenSupplier] = useState(false);

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
      </section>

      {openSupplier && <AddUser setOpenSupplier={setOpenSupplier} />}
    </article>
  )
}

export default Customers
