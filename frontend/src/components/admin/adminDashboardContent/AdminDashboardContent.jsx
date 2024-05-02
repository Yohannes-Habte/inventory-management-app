import React from "react";
import "./AdminDashboardContent.scss";
import Categories from "../categories/Categories";
import Products from "../products/Products";
import Suppliers from "../suppliers/Suppliers";
import Purchases from "../purchase/allPurchases/Purchases";
import PurchaseApproval from "../purchase/approvalPurchase/PurchaseApproval";
import PurchaseResport from "../purchase/dailyPurchaseReport/PurchaseResport";
import Customers from "../customers/allCustomers/Customers";
import CreditCustomers from "../customers/creditCustomers/CreditCustomers";
import CustomerWiseReport from "../customers/customerWiseReport/CustomerWiseReport";
import PaidCustomers from "../customers/paidCustomers/PaidCustomers";
import AllInvoices from "../invoice/allInvoices/AllInvoices";
import ApprovalInvoice from "../invoice/approvalInvoice/ApprovalInvoice";
import InvoiceReport from "../invoice/dailyInvoiceReport/InvoiceReport";
import PrintInvoiceList from "../invoice/printInvoiceList/PrintInvoiceList";
import StockReport from "../stock/stockReport/StockReport";
import SupplierProduct from "../stock/supplierProductWise/SupplierProduct";
import Support from "../support/Support";

const AdminDashboardContent = ({ isActive }) => {
  return (
    <article className="admin-dashboar-content-container">
      {isActive === 1 && (
        <section className="admin-dashboar-summary-wrapper">
          <h2 className="admin-dashboar-summary-title">
            Admin Dashboard Summary
          </h2>
        </section>
      )}

      {isActive === 2 && <Categories />}

      {isActive === 3 && <Products />}

      {isActive === 4 && <Suppliers />}

      {/* Customers */}

      {isActive === 5 && <Customers />}

      {isActive === 6 && <PaidCustomers />}

      {isActive === 7 && <CreditCustomers />}

      {isActive === 8 && <CustomerWiseReport />}

      {/* Purches */}

      {isActive === 9 && <Purchases />}

      {isActive === 10 && <PurchaseApproval />}

      {isActive === 11 && <PurchaseResport />}

      {/* Invoice */}

      {isActive === 12 && <AllInvoices />}

      {isActive === 13 && <ApprovalInvoice />}

      {isActive === 14 && <InvoiceReport />}

      {isActive === 15 && <PrintInvoiceList />}

      {/* Stock */}

      {isActive === 16 && <StockReport />}

      {isActive === 17 && <SupplierProduct />}


      {/* Support */}

      {isActive === 18 && <Support />}
   
    </article>
  );
};

export default AdminDashboardContent;
