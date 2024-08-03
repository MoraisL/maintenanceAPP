"use client";

import { useState } from "react";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import MachineTabs from "../components/manutencao/MachineTabs";
import PieceRegistration from "../components/pecasemateriais/PieceRegistration";
import PieceDetails from "../components/pecasemateriais/PieceDetails";
import MaterialRegistration from "../components/pecasemateriais/MaterialRegistration";
import MaterialDetails from "../components/pecasemateriais/MaterialDetails";

const Home = () => {
  const [activeTab, setActiveTab] = useState("PieceCadastro");

  const tabs = [
    { id: "PieceCadastro", title: "Cadastro de Peças" },
    { id: "PieceDetails", title: "Detalhes de Peças" },
    { id: "MaterialCadastro", title: "Cadastro de Materiais" },
    { id: "MaterialDetails", title: "Detalhes de Materiais" },
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

          {activeTab === "PieceCadastro" && <PieceRegistration />}
          {activeTab === "PieceDetails" && <PieceDetails />}
          {activeTab === "MaterialCadastro" && <MaterialRegistration />}
          {activeTab === "MaterialDetails" && <MaterialDetails />}

        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;