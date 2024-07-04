import React from 'react';

const Button = ({ children, onClick, variant = 'default', className = '' }) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold text-sm";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;