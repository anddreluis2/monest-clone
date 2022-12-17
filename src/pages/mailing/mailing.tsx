import { FaCheck, FaCloudDownloadAlt } from "react-icons/fa";
import { Card } from "../../components";
import { Header } from "../../components/header";

export default function Mailing() {
  return (
    <>
      {/*Header*/}
      <Header />

      {/* Main stuctures*/}
      {/*breadcumb*/}
      <div className="w-full text-gray-high flex h-[16] p-6 text-sm">
        Mailings para discador
        <span className="ml-4 text-gray-medium">&gt;</span>
        <div className="text-grayMedium px-4">Mailing 23</div>
      </div>

      {/* page name */}
      <h1 className="text-3xl justify-start font-bold px-4 text-gray-high">
        Biz Capital / Atraso&gt; 150 / Não localizados{" "}
      </h1>
      <div className="w-full p-4 mt-8 justify-center grid grid-cols-2 h-[96vh]">
        {/*First half*/}
        <div className="mr-4">
          <Card
            title={"Configurações"}
            text={"teste teste"}
            icon={<FaCheck size={12} />}
          />
          <div className="pt-8">
            <Card
              title={"Arquivo"}
              text={"Mailling_discador_123.csv"}
              icon={<FaCloudDownloadAlt color="#6600CC" size={16} />}
            />
          </div>
        </div>

        {/*Second half*/}
        <div className="ml-4">
          <Card
            title={"Segmento"}
            text={"lallalala"}
            icon={<FaCheck size={12} />}
          />
        </div>
      </div>
    </>
  );
}
