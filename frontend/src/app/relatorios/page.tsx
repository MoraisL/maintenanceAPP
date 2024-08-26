"use client";

import { useState } from "react";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import MachineTabs from "../components/manutencao/MachineTabs";
import MaintenanceReports from "../components/reports/MaintenanceReports";
import InventoryReports from "../components/reports/InventoryReports";
import PerformanceReports from "../components/reports/PerformanceReports";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Manutenção");

  const tabs = [
    { id: "Manutenção", title: "Manutenção" },
    { id: "Estoque", title: "Estoque" },
    { id: "Desempenho", title: "Desempenho" },

    // Adicione mais abas aqui conforme necessário
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col bg-gray-900">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">  
            Sistema de Relatórios
          </h1>

          <MachineTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />

          {activeTab === "Manutenção" && <MaintenanceReports />}
          {activeTab === "Estoque" && <InventoryReports />}
          {activeTab === "Desempenho" && <PerformanceReports />}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
