import React, { useEffect } from "react";
import "../../assets/css/imageOptimize.css";

export const OptimizeImage = ({
  src,
  alt = "",
  classNameContainer = "",
  clasNameImg = "",
  onClick = () => {},
}: any) => {
  useEffect(() => {
    // TODO: Mejorar esto
    const blurDivs = document.querySelectorAll(".optimize-img-container");
    blurDivs.forEach((element) => {
      const img = element.querySelector("img");
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
    <div className={`${classNameContainer} optimize-img-container`}>
      <img
        src={src}
        className={`${clasNameImg} optimize-img`}
        alt={alt}
        loading="lazy"
        onClick={onClick}
      />
    </div>
  );
};
