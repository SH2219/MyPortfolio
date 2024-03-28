import React from 'react';

const ScrollbarHidden = ({ children }) => {
  return (
    <>
      <style>
        {`
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="scrollbar-hidden">
        {children}
      </div>
    </>
  );
};

export default ScrollbarHidden;
