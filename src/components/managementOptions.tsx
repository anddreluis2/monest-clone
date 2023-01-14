import { ReactNode } from "react";

export interface ManagementOptionsInterface {
  title: string;
  text: string;
  icon: ReactNode;
}

export const ManagementOptions: React.FC<ManagementOptionsInterface> = ({
  title,
  text,
  icon,
}) => {
  return (
    <>
      <div className="border-b p-8 border-gray-low w-full h-fit">
        <div className="flex gap-2 items-center">
          <span className="text-purple-high">{icon}</span>
          <h5 className="text-gray-high text-lg font-semibold">{title}</h5>
        </div>
        <div className="mt-2 text-md font-medium text-gray-high">{text}</div>
      </div>
    </>
  );
};
