import { useState } from "react";
import "../tooltip.css"

export const TooltipCursorFollow = ({ text, children }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ left: 0, top: 0 });
  
    const showTooltip = (e: any) => {
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