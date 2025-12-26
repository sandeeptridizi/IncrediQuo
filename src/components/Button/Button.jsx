import React from "react";
import "./Button.css";
import { FaArrowRight } from "react-icons/fa";

export const Button = ({
  name,
  paddingXL = "8.6vw",
  paddingXM = "24.5vw",
  widthL = "10.7vw",
  widthM = "30.3vw",
  bacgrounClr = "#022447",
  bacgrounArrow = "#ffff",
  colorArrow = "#022447",
  colorText = "#ffff",
  colorTextHover = "#022447",
  }) =>{
  return (
<<<<<<< HEAD
    <div
=======
    <div className="About_btn_container">
      <div
>>>>>>> 257eebe4b752f0ea3dc665b5d0ed017e3a3770c4
        className="About_bbcontainer"
        style={{
          "--bacgrounClr": bacgrounClr,
        }}
<<<<<<< HEAD
        >
=======
      >
>>>>>>> 257eebe4b752f0ea3dc665b5d0ed017e3a3770c4
        <button
          className="About_contact_btn"
          style={{
            "--colorText": colorText,
            "--colorTextHover": colorTextHover,
          }}
        >
          {name}
        </button>
        <FaArrowRight
          className="About_Arrow_Icon"
          style={{
            "--paddingXL": paddingXL,
            "--paddingXM": paddingXM,
            "--widthL": widthL,
            "--widthM": widthM,
            "--bacgrounArrow": bacgrounArrow,
            "--colorArrow": colorArrow,
          }}
        />
      </div>
<<<<<<< HEAD
    );
=======
     </div>
  );
>>>>>>> 257eebe4b752f0ea3dc665b5d0ed017e3a3770c4
};
