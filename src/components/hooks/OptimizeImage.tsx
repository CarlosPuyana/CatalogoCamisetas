import React, { useEffect } from "react";
import "../../css/imageOptimize.css";

export const OptimizeImage = ({
  src,
  alt = "",
  onClick = () => {}
}) => {
  useEffect(() => {
    // TODO: Mejorar esto
    const blurDivs = document.querySelectorAll(".cardi-img-container");
    blurDivs.forEach((element) => {
      const img = element.querySelector("img");
      console.log(img);
      function loaded() {
        element.classList.add("loaded");
      }

      if (img?.complete) {
        loaded();
      } else {
        img?.addEventListener("load", loaded);
      }
    });
  });
  return (
    <div className="cardi-img-container">
      <img
        src={src}
        className="cardi-img"
        alt={alt}
        loading="lazy"
        onClick={onClick}
      />
    </div>
  );
};
