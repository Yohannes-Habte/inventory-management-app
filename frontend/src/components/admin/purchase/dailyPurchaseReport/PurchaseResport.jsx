import React, { useState } from "react";
import "./PurchaseResport.scss";

const PurchaseResport = () => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [purchaseReports, setPurchaseReports] = useState([])
  
  return (
    <section className="purchase-reports-container">
      <h2 className="purchase-reports-title"> Daily Purchase Report </h2>

      <form action="" className="purchase-report-form">
        <div className="input-container">
          <label htmlFor="startDate" className="input-label">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label htmlFor="endDate" className="input-label">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            className="input-field"
          />
        </div>

        <button className="purchase-report-btn">Search </button>
      </form>
    </section>
  );
};

export default PurchaseResport;
