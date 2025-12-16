"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  loading?: boolean;

  icon?: string;
  iconClass?: string;
  iconPosition?: "left" | "right";
  iconWidth?: number | string;
  iconHeight?: number | string;

  imgSrc?: string;
  imgWidth?: number;
  imgHeight?: number;
  imgAlt?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  loading = false,
  className = "",
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt = "",
  icon,
  iconClass = "",
  iconPosition = "right",
  iconWidth = 24,
  iconHeight = 24,
  type = "button",
 
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
     
      className={`flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {loading ? (
        <Icon
          icon="line-md:loading-twotone-loop"
          width={iconWidth}
          height={iconHeight}
          className={iconClass}
        />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <Icon icon={icon} width={iconWidth} height={iconHeight} className={iconClass} />
          )}

          {text && <span>{text}</span>}

          {icon && iconPosition === "right" && (
            <Icon icon={icon} width={iconWidth} height={iconHeight} className={iconClass} />
          )}

          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
              className="object-contain"
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
