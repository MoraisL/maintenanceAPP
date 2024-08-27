"use client";

import { useState } from "react";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import MachineTabs from "../components/manutencao/MachineTabs";
import Reports from "../components/reports/Reports";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Manutenção");

  const tabs = [
    { id: "Manutenção", title: "Manutenção" },
    { id: "Estoque", title: "Estoque" },
    { id: "Desempenho", title: "Desempenho" },
  ];

  const reportsData = {
    "Manutenção": [
      { title: 'Manutenção por Máquina', chartType: 'BarChart', data: [{ machine: 'Máquina A', count: 10 }, { machine: 'Máquina B', count: 12 }, { machine: 'Máquina C', count: 8 }], categories: ['count'], dataKey: 'machine', colors: ['red'] },
      { title: 'Manutenção por Período', chartType: 'LineChart', data: [{ month: 'Jan', maintenance: 4 }, { month: 'Feb', maintenance: 6 }, { month: 'Mar', maintenance: 7 }], categories: ['maintenance'], dataKey: 'month', colors: ['purple'] },
      { title: 'Manutenção por Equipe', chartType: 'BarChart', data: [{ team: 'Equipe A', count: 5 }, { team: 'Equipe B', count: 3 }, { team: 'Equipe C', count: 8 }], categories: ['count'], dataKey: 'team', colors: ['teal'] },
    ],
    "Estoque": [
      { title: 'Estoque por Peça', chartType: 'BarChart', data: [{ part: 'Peça A', quantity: 300 }, { part: 'Peça B', quantity: 200 }, { part: 'Peça C', quantity: 150 }], categories: ['quantity'], dataKey: 'part', colors: ['cyan'] },
      { title: 'Estoque por Fornecedor', chartType: 'LineChart', data: [{ month: 'Jan', stock: 50 }, { month: 'Feb', stock: 70 }, { month: 'Mar', stock: 65 }], categories: ['stock'], dataKey: 'month', colors: ['amber'] },
      { title: 'Estoque por Período', chartType: 'LineChart', data: [{ period: 'Q1', quantity: 500 }, { period: 'Q2', quantity: 450 }, { period: 'Q3', quantity: 600 }], categories: ['quantity'], dataKey: 'period', colors: ['pink'] },
    ],
    "Desempenho": [
      { title: 'Tempo Médio de Desempenho', chartType: 'LineChart', data: [{ month: 'Jan', performance: 5 }, { month: 'Feb', performance: 8 }, { month: 'Mar', performance: 6 }], categories: ['performance'], dataKey: 'month', colors: ['blue'] },
      { title: 'Manutenções Realizadas', chartType: 'BarChart', data: [{ team: 'Equipe A', count: 20 }, { team: 'Equipe B', count: 15 }, { team: 'Equipe C', count: 25 }], categories: ['count'], dataKey: 'team', colors: ['green'] },
      { title: 'Peças Utilizadas', chartType: 'BarChart', data: [{ part: 'Peça A', quantity: 100 }, { part: 'Peça B', quantity: 150 }, { part: 'Peça C', quantity: 80 }], categories: ['quantity'], dataKey: 'part', colors: ['orange'] },
    ]
  };

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

          <Reports
            title={activeTab}
            reports={reportsData[activeTab]}
            onGenerateReport={() => console.log(`Gerando relatório de ${activeTab.toLowerCase()}...`)}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
