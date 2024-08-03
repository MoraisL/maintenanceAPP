"use client";

import { useState } from "react";
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

  const tabs = [
    { id: "Cadastro", title: "Cadastro de Máquinas" },
    { id: "Visualizacao", title: "Visualização de Máquinas" },
    // Adicione mais abas aqui conforme necessário
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col bg-gray-900">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">  
            Sistema de Gestão de Manutenção
          </h1>

          <MachineTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />

          {activeTab === "Cadastro" && <MachineRegistration />}
          {activeTab === "Visualizacao" && <MachineDetails />}


        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
