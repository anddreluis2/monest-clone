import Logo from "./logo";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex text-white h-16 items-center bg-purple p-6">
      {/*Logo*/}
      <span className="hover:cursor-pointer">
        <Logo />
      </span>

      {/*Paths*/}
      <div className="text-white flex gap-10 text-lg font-medium ml-6">
        <h5 className="flex items-center gap-2">
          Comunicação <FaAngleDown />
        </h5>
        <h5 className="flex items-center gap-2">
          Gestão <FaAngleDown />
        </h5>
        <h5 className="flex items-center gap-2">
          Cobrança <FaAngleDown />
        </h5>
      </div>
    </div>
  );
}
