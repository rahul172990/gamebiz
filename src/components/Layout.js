import React, { Children } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ sidebar, children }) => {
  return (
    <div className="layout-style">
      {sidebar && (
        <div>
          <Sidebar />
        </div>
      )}
      <div className={` ${sidebar ? "layout_right" : "layout_right_top"}  `}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
