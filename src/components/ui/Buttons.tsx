import React from "react";
import "../../assets/css/button.css";

export const ButtonAppTheme = ({ children, onClick }: any) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};
