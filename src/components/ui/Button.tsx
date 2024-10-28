import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children = 'View More', 
  width = 'w-32', 
  height= 'h-10',
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`bg-orange-700 hover:bg-orange-600 transition-colors duration-300 text-white rounded-full text-base ${width} ${height || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button