"use client";

import { useState } from "react";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import TeamTabs from "../components/equipe/TeamTabs"; // Assumindo que você vai criar um novo componente de abas para equipes
import TeamRegistration from "../components/equipe/TeamRegistration";
import TeamDetails from "../components/equipe/TeamDetails";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Cadastro");

  const tabs = [
    { id: "Cadastro", title: "Cadastro de Equipes" },
    { id: "Visualizacao", title: "Visualização de Equipes" },
    // Adicione mais abas aqui conforme necessário
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col bg-gray-900">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Sistema de Gestão de Equipes
          </h1>

          <TeamTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />

          {activeTab === "Cadastro" && <TeamRegistration />}
          {activeTab === "Visualizacao" && <TeamDetails />}
          
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
