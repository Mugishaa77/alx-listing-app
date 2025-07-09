import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={clsx("bg-white p-4 rounded-xl shadow-md", className)}>
      {children}
    </div>
  );
};

export default Card;
