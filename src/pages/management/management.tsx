import { FaBarcode } from "react-icons/fa";
import { Header } from "../../components/header";
import { ManagementOptions } from "../../components/managementOptions";

export default function Management() {
  return (
    <>
      {/*Header*/}
      <Header />

      {/* Main stuctures*/}
      {/* page name */}
      <h1 className="text-3xl justify-start font-bold p-6 pb-0 text-gray-high">
        Gestão de empresas
      </h1>
      <div className="w-full p-6 justify-center h-[90vh]">
        <div className="shadow-inactive rounded-lg w-full h-6/8 ">
          <ManagementOptions
            title={"Ativar assinatura por boleto"}
            text={
              "Ative uma assinatura para uma empresa após o pagamento do boleto"
            }
            icon={<FaBarcode size={14} />}
          />
          <ManagementOptions
            title={"Adicionar créditos"}
            text={"Adicione créditos de bônus a uma empresa"}
            icon={<FaBarcode size={14} />}
          />
          <ManagementOptions
            title={"Criar usuário para uma empresa"}
            text={"Crie um novo usuário para e-mail e vincule a uma empresa"}
            icon={<FaBarcode size={14} />}
          />
          <ManagementOptions
            title={"Redefinir senha de usuário"}
            text={"Redefina a senha de acesso da conta de um usuário"}
            icon={<FaBarcode size={14} />}
          />
          <ManagementOptions
            title={"Alterar empresa vinculada ao usuário"}
            text={"Altere a empresa que um usuário existente tem acesso"}
            icon={<FaBarcode size={14} />}
          />
          <ManagementOptions
            title={"Desativar usuário"}
            text={"Desative o acesso de um usuário a qualquer empresa"}
            icon={<FaBarcode size={14} />}
          />
        </div>
      </div>
    </>
  );
}
