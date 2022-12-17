import { FaCheck } from "react-icons/fa";
import { ReactNode } from "react";

export interface CardProps {
  title: string;
  text: string;
  icon: ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, text, icon }) => {
  const content = {
    title,
    text,
    icon,
  };
  return (
    <>
      <div className="shadow-inactive rounded-lg divide-y divide-gray-low w-full">
        <div className="px-4 py-6">
          <h1 className="font-bold">{content.title}</h1>
        </div>
        <ul className="p-4">
          <li className="flex gap-2 items-center p-2">
            {content.icon}
            {content.text}
          </li>
        </ul>
      </div>
    </>
  );
};
