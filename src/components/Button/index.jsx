import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  fill: {
    teal_900_05: "bg-teal-900_05 text-white-A700",
    indigo_A700: "bg-indigo-A700 shadow-bs text-white-A700",
    white_A700: "bg-white-A700",
    blue_gray_900_05: "bg-blue_gray-900_05 text-white-A700",
    blue_gray_400_75: "bg-blue_gray-400_75 text-white-A700",
    lime_900_75: "bg-lime-900_75 text-white-A700",
    teal_900_75: "bg-teal-900_75 text-white-A700",
    indigo_A200_01: "bg-indigo-A200_01",
    yellow_700: "bg-yellow-700",
    yellow_900: "bg-yellow-900",
    indigo_A700_75: "bg-indigo-A700_75 text-white-A700",
  },
  outline: {
    indigo_A700_7e: "border border-indigo-A700_7e border-solid text-white-A700",
    indigo_A200_59_indigo_A200_59:
      "bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border4 text-white-A700",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-3.5",
  xl: "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "teal_900_05",
    "indigo_A700",
    "white_A700",
    "blue_gray_900_05",
    "blue_gray_400_75",
    "lime_900_75",
    "teal_900_75",
    "indigo_A200_01",
    "yellow_700",
    "yellow_900",
    "indigo_A700_75",
    "indigo_A700_7e",
    "indigo_A200_59_indigo_A200_59",
  ]),
};

export { Button };
