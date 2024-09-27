import React from "react";

const DropShadow = ({ isOpen }) => {
  return <div className={`sidebar__drop-shadow ${isOpen ? "open" : ""}`}></div>;
};

export default DropShadow;
