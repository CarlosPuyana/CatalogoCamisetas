import React, { useState } from "react";

export const TooltipHook = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="tooltip-general" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
            {isVisible && <div className="tooltip-text">{text}</div>}
        </div>
    )
}