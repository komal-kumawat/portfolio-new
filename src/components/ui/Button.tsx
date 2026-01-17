import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
  icon: ReactNode;
  name: string;
  url:string
}

const Button = ({ icon, name , url }: ButtonProps) => {
    const handleClick = () => {
    window.open(url, "_blank"); // opens in new tab
  };
  return (
    <div className="inline-flex items-center gap-1 align-middle border border-dotted rounded-md px-2 py-[2px] hover:border-gray-400 cursor-pointer"
    onClick={handleClick}
    >
        {icon}
      <span className="text-[0.9em] hover:text-gray-400">{name}</span>
    </div>
  );
};

export default Button;
