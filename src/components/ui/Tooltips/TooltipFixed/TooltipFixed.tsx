import { useState } from "react";
import "../tooltip.css"

export const TooltipFixed = ({ text, children }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-general"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltip-text">{text}</div>}
    </div>
  );
};
