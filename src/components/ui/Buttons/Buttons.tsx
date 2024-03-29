import React from "react";
import "./buttons.css";

export const ButtonAppTheme = ({ children, onClick }: any) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};
