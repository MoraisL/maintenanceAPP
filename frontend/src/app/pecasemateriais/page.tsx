import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { BsEmojiHeartEyes, BsEmojiExpressionless, BsEmojiAngry, BsEmojiSunglasses } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdForklift } from "react-icons/md";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import { Card } from "../components/card";
import TableComponent from "../components/table";
import { BarChart } from "@tremor/react";
import MachineRegistration from "../components/manutencao/MachineRegistration";
import MachineDetails from "../components/manutencao/MachineDetails";


import PieceRegistration from "../components/pecasemateriais/pieceregistration";
import MaterialRegistration from "../components/pecasemateriais/MaterialRegistration";
import PieceDetails from "../components/pecasemateriais/PieceDetails";
import MaterialDetails from "../components/pecasemateriais/MaterialDetails";

const Home = () => {
  const tableData = [
    { ambiente: "Escritório", equipamento: "Computador", solicitacao: 101, atendimento: 202 },
    { ambiente: "Laboratório", equipamento: "Microscópio", solicitacao: 102, atendimento: 203 },
    { ambiente: "Sala de Reunião", equipamento: "Projetor", solicitacao: 103, atendimento: 204 },
    { ambiente: "Área Comum", equipamento: "Câmera de segurança", solicitacao: 104, atendimento: 205 },
    { ambiente: "Recepção", equipamento: "Telefone", solicitacao: 105, atendimento: 206 },
  ];

  const chartdata = [
    { name: "Ambientes", "Number of threatened species": 2488 },
    { name: "Equipamentos", "Number of threatened species": 1445 },
    { name: "O.S Abertas", "Number of threatened species": 743 },
    { name: "O.S Concluidas", "Number of threatened species": 281 },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />

        <main className="flex-1 flex flex-col bg-gray-900">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center text-white">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="rounded-xl">
            <div className="grid grid-cols-4 gap-4 p-6">
              <Card color={"bg-gray-500"} qty="200" text="Ambientes" icon={<FaBuilding size={48} />} />
              <Card color={"bg-violet-500"} qty="200" text="Equipamentos" icon={<MdForklift size={48} />} />
              <Card color={"bg-gray-500"} qty="200" text="O.S. Abertas" icon={<GrNotes size={48} />} />
              <Card color={"bg-violet-500"} qty="200" text="O.S. Concluídas" icon={<IoMdCheckboxOutline size={48} />} />
            </div>


            <div className="text-3xl font-bold mb-4 text-center text-white">
              <h1>Cadastro de Peças</h1>
            </div>
            <div className="p-6">
              <PieceRegistration />
            </div>

            <div className="text-3xl font-bold mb-4 text-center text-white">
              <h1>Detalhes das Peças</h1>
            </div>
            <div className="p-6">
              <PieceDetails />
            </div>

            <div className="text-3xl font-bold mb-4 text-center text-white">
              <h1>Cadastro de Materiais</h1>
            </div>
            <div className="p-6">
              <MaterialRegistration />
            </div>

            <div className="text-3xl font-bold mb-4 text-center text-white">
              <h1>Detalhes dos Materiais</h1>
            </div>
            <div className="p-6">
              <MaterialDetails />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
