import React, { useState } from "react";
import "../../assets/css/tooltip.css";

export const TooltipCursorFollow = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const showTooltip = (e) => {
    setPosition({ left: e.pageX, top: e.pageY });
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseMove={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          className="tooltip-text"
          style={{ left: position.left, top: position.top }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export const TooltipFixed = ({ text, children }) => {
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
