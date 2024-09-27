import React from "react";

const DropShadow = ({ isOpen, onClose }) => {
  return (
    <div
      className={`sidebar__drop-shadow ${isOpen ? "open" : ""}`}
      onClick={onClose}
    ></div>
  );
};

export default DropShadow;
