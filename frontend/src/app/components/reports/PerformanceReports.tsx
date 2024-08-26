// components/reports/PerformanceReports.tsx

import React from 'react';
import { BarChart, LineChart } from "@tremor/react";

const PerformanceReports = () => {
  const handleGenerateReport = () => {
    // Lógica para gerar o relatório
    console.log('Gerando relatório de desempenho...');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Relatórios de Desempenho</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Tempo Médio de Desempenho</h3>
          <LineChart
            data={[
              { month: 'Jan', performance: 5 },
              { month: 'Feb', performance: 8 },
              { month: 'Mar', performance: 6 },
            ]}
            categories={['performance']}
            dataKey="month"
            height="h-64"
            colors={['blue']}
          />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Manutenções Realizadas</h3>
          <BarChart
            data={[
              { team: 'Equipe A', count: 20 },
              { team: 'Equipe B', count: 15 },
              { team: 'Equipe C', count: 25 },
            ]}
            categories={['count']}
            dataKey="team"
            height="h-64"
            colors={['green']}
          />
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Peças Utilizadas</h3>
          <BarChart
            data={[
              { part: 'Peça A', quantity: 100 },
              { part: 'Peça B', quantity: 150 },
              { part: 'Peça C', quantity: 80 },
            ]}
            categories={['quantity']}
            dataKey="part"
            height="h-64"
            colors={['orange']}
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

export default PerformanceReports;
