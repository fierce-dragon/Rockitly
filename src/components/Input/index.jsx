import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: {
    indigo_A700: "border border-indigo-A700 border-solid text-gray-900_75",
    deep_purple_A400_4c_gray_50_00:
      "border border-solid deep_purple_A400_4c_gray_50_00_border2 text-white-A700",
    indigo_A200_59_indigo_A200_59:
      "bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border3 text-white-A700",
  },
  fill: {
    indigo_A700: "bg-indigo-A700 shadow-bs text-white-A700",
    blue_50: "bg-blue-50 text-blue-400",
    teal_800_ad: "bg-teal-800_ad text-white-A700",
  },
  underline: { white_A700_7e: "border-b border-white-A700_7e text-white-A700" },
};
const shapes = { round: "rounded-[16px]" };
const sizes = {
  xl: "pb-[21px]",
  xs: "pb-[11px] pt-3 px-[11px]",
  sm: "pb-[11px] pt-[15px] px-[11px]",
  md: "pb-[15px] pt-4 px-[15px]",
  lg: "pb-3.5 pt-[19px] px-3.5",
  "2xl": "pb-[13px] pt-[22px] px-[13px]",
  "3xl": "pb-2.5 pt-[23px] px-2.5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xl", "xs", "sm", "md", "lg", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["outline", "fill", "underline"]),
  color: PropTypes.oneOf([
    "indigo_A700",
    "deep_purple_A400_4c_gray_50_00",
    "indigo_A200_59_indigo_A200_59",
    "indigo_A700",
    "blue_50",
    "teal_800_ad",
    "white_A700_7e",
  ]),
};

export { Input };
