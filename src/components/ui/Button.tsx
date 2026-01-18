import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
  icon: ReactNode;
  name: string;
  url: string;
}

const Button = ({ icon, name, url }: ButtonProps) => {
  const handleClick = () => {
    window.open(url, "_blank"); // opens in new tab
  };
  return (
    <div
      className="inline-flex items-center gap-2 border border-dotted rounded-lg px-3 py-1.5 cursor-pointer border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-0.5"
      onClick={handleClick}
    >
      {icon}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
        {name}
      </span>
    </div>
  );
};

export default Button;
