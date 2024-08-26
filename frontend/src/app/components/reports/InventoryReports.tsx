// components/reports/InventoryReports.tsx

import React from 'react';
import { BarChart, LineChart } from "@tremor/react";

const InventoryReports = () => {
  const handleGenerateReport = () => {
    // Lógica para gerar o relatório
    console.log('Gerando relatório de estoque...');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Relatórios de Estoque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Estoque por Peça</h3>
          <BarChart
            data={[
              { part: 'Peça A', quantity: 300 },
              { part: 'Peça B', quantity: 200 },
              { part: 'Peça C', quantity: 150 },
            ]}
            categories={['quantity']}
            dataKey="part"
            height="h-64"
            colors={['cyan']}
          />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Estoque por Fornecedor</h3>
          <LineChart
            data={[
              { month: 'Jan', stock: 50 },
              { month: 'Feb', stock: 70 },
              { month: 'Mar', stock: 65 },
            ]}
            categories={['stock']}
            dataKey="month"
            height="h-64"
            colors={['amber']}
          />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Estoque por Período</h3>
          <LineChart
            data={[
              { period: 'Q1', quantity: 500 },
              { period: 'Q2', quantity: 450 },
              { period: 'Q3', quantity: 600 },
            ]}
            categories={['quantity']}
            dataKey="period"
            height="h-64"
            colors={['pink']}
          />
        </div>
      </div>
      <button 
        onClick={handleGenerateReport} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Gerar Relatório
      </button>
    </div>
  );
};

export default InventoryReports;
