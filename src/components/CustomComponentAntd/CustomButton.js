// import React from "react";
// import { Button } from "antd";

// const CustomButton = ({ size }) => {
//   return (
//     <Button
//       className={`custom-button ${
//         size === "small" ? "custom-button--small" : ""
//       } ${size === "large" ? "custom-button--large" : ""}`}
//     >
//       Custom Button
//     </Button>
//   );
// };

// export default CustomButton;
import React from "react";
import { Button } from "antd";
import clsx from "clsx";
import styles from "./CustomButton.module.css";

const CustomButton = ({ size }) => {
  const buttonClass = clsx("custom-button", {
    "custom-button--small": size === "small",
    "custom-button--large": size === "large",
  });

  return <Button className={buttonClass}>Custom Button</Button>;
};

export default CustomButton;
