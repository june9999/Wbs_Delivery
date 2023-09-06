import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen bg-primary-50/00 dark:bg-gray-900">
      <div className="max-w-xxl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;