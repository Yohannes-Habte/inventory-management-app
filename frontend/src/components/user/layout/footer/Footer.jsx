import React from "react";
import "./Footer.scss";
import TabsInventoryMap from "../../../myTabs/TabsInventoryMap";
import InventoryMap from "../../../map/InventoryMap";

const Footer = () => {
  return (
    <footer>
      {/* Create many maps for each inventory management stores */}
      <section className="tabs-wrapper">
        <h2 className="tabs-wrapper-title">
          Navigate to Specific Inventory Location
        </h2>
        <TabsInventoryMap />
      </section>

      <InventoryMap />
    </footer>
  );
};

export default Footer;
