import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary-50/00 dark:bg-gray-900 m-0 p-0">
        {children}
    </div>
  );
};

export default Layout;