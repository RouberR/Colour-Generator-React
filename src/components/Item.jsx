import React, { useEffect, useState } from "react";
// import rgbToHex from "../utils";
import "../App.css";
export const Item = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
//   const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;

  const onClickColor = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={onClickColor}
    >
      <p className="percentage-value">{weight}</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};
