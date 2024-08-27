"use client";

import { useState } from "react";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import MachineTabs from "../components/manutencao/MachineTabs";
import PieceRegistration from "../components/pecasemateriais/PieceRegistration";
import PieceDetails from "../components/pecasemateriais/PieceDetails";
import MaterialRegistration from "../components/pecasemateriais/MaterialRegistration";
import MaterialDetails from "../components/pecasemateriais/MaterialDetails";
import MachineRegistration from "../components/manutencao/MachineRegistration";
import MachineDetails from "../components/manutencao/MachineDetails";

const Home = () => {
  const [activeTab, setActiveTab] = useState("PieceCadastro");

  const tabs = [
    { id: "PieceCadastro", title: "Cadastro de Peças" },
    { id: "PieceDetails", title: "Detalhes de Peças" },
    { id: "MaterialCadastro", title: "Cadastro de Materiais" },
    { id: "MaterialDetails", title: "Detalhes de Materiais" },
    { id: "MaquinaCadastro", title: "Cadastro de Maquinas" },
    { id: "MaquinaDetails", title: "Detalhes de Maquinas" },
    // Adicione mais abas aqui conforme necessário
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col bg-gray-900">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">  
            Sistema de Gestão de Estoque
          </h1>

          <MachineTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />

          {activeTab === "PieceCadastro" && <PieceRegistration />}
          {activeTab === "PieceDetails" && <PieceDetails />}
          {activeTab === "MaterialCadastro" && <MaterialRegistration />}
          {activeTab === "MaterialDetails" && <MaterialDetails />}
          {activeTab === "MaquinaCadastro" && <MachineRegistration />}
          {activeTab === "MaquinaDetails" && <MachineDetails />}


        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;