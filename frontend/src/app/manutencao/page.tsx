"use client";

import Image from "next/image";
import { useState } from "react";
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
import MachineTabs from "../components/manutencao/MachineTabs";
import MachineRegistration from "../components/manutencao/MachineRegistration";
import MachineDetails from "../components/manutencao/MachineDetails";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Cadastro");
  
  const tableData = [
    { ambiente: 'Escritório', equipamento: 'Computador', solicitacao: 101, atendimento: 202 },
    { ambiente: 'Laboratório', equipamento: 'Microscópio', solicitacao: 102, atendimento: 203 },
    { ambiente: 'Sala de Reunião', equipamento: 'Projetor', solicitacao: 103, atendimento: 204 },
    { ambiente: 'Área Comum', equipamento: 'Câmera de segurança', solicitacao: 104, atendimento: 205 },
    { ambiente: 'Recepção', equipamento: 'Telefone', solicitacao: 105, atendimento: 206 },
    // Add more entries as needed
  ];

  const chartData = [
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
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">  
            Sistema de Gestão de Manutenção
          </h1>

          <MachineTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "Cadastro" && <MachineRegistration />}
          {activeTab === "Visualizacao" && <MachineDetails />}

        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
