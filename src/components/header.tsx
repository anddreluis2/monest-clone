import Logo from "./logo";
import { FaCaretDown } from "react-icons/fa";

export const Header: React.FC = ({}) => {
  return (
    <div className="flex text-white h-16 items-center bg-purple-high p-6">
      {/*Logo*/}
      <span className="hover:cursor-pointer">
        <Logo />
      </span>

      {/*PATH AND ICON DIV*/}
      <div className="flex justify-between w-full">
        {/*Paths*/}
        <div className="text-white flex gap-10 text-lg px-4 font-medium ml-6">
          <h5 className="flex items-center gap-2">
            Comunicação <FaCaretDown size={14} />
          </h5>
          <h5 className="flex items-center gap-2">
            Gestão <FaCaretDown size={14} />
          </h5>
          <h5 className="flex items-center gap-2">
            Cobrança <FaCaretDown size={14} />
          </h5>
        </div>

        {/*Icon*/}
        <div className="flex items-center gap-2">
          <div className="border rounded-full bg-purple-light text-purple-high h-[40px] w-[40px] flex items-center justify-center">
            <p>AL</p>
          </div>
          <FaCaretDown />
        </div>
      </div>
    </div>
  );
};
