import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`${className} px-8 py-5 bg-secondary text-[16px] uppercase text-center align-middle whitespace-nowrap touch-manipulation font-semibold text-white rounded-full cursor-pointe transition-all duration-300 ease-in-out hover:bg-background hover:text-accent flex justify-center items-center gap-3`}
    >
      {children}
      <IoIosArrowForward width={20} height={20} />
    </Link>
  );
};

export default Button;
