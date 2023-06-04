import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient 
    font-poppins font-medium text-[18x] text-primary outline-none rounded-lg ${props.styles}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
