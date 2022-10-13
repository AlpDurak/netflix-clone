import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function Slider({ children, id, className }) {
  const [slideRow, setSlideRow] = useState(0);

  useEffect(() => {
    //just a basic slider
    const slider = document.getElementById(id);
    const slideElements = slider.getElementsByClassName("slideElements")[0];

    const chevronLeft = slider.getElementsByClassName("slider-slideLeft")[0];
    if ((slideRow - 1) * 5 < 0) {
      chevronLeft.style.display = "none";
    } else {
      chevronLeft.style.display = "flex";
    }

    const chevronRight = slider.getElementsByClassName("slider-slideRight")[0];
    if ((slideRow + 1) * 5 >= slideElements.children.length) {
      chevronRight.style.display = "none";
    } else {
      chevronRight.style.display = "flex";
    }

    slideElements.style.left = `calc(4.5vw + ${-(slideRow * 91.4)}vw)`;
  }),
    [slideRow];

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div id={id} className="slider">
        <div
          onClick={() => setSlideRow((oldRow) => oldRow - 1)}
          className="slider-slideLeft"
        >
          <Icon icon="ci:chevron-big-left" color="white" fontSize={45} />
        </div>
        <div
          onClick={() => setSlideRow((oldRow) => oldRow + 1)}
          className="slider-slideRight"
        >
          <Icon icon="ci:chevron-big-right" color="white" fontSize={45} />
        </div>
        <div className={`slideElements ${className}`}>{children}</div>
      </div>
    </div>
  );
}
