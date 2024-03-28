import React from 'react';
import "../App.css";
const CustomScrollbar = ({ children }) => {
  return (
    <>
    <div className="custom-scrollbar overflow-y-scroll">
      {children}
    </div>
    </>
  );
};

export default CustomScrollbar;
