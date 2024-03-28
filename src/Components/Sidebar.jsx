import React from "react";

const Sidebar = ({ children }) => {
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm ">
          <div className="p-4 pb-2 flex justify-between items-center ">
            <img className="w-10" src="/svg.png" alt="" />
            <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200">
              back
            </button>
          </div>
        </nav>
        <ul className="flex-1 px-3">{children}</ul>
        <div className="border-t flex p-3">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
