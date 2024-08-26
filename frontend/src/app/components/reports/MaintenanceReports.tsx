// components/reports/MaintenanceReports.tsx

import React from 'react';
import { BarChart, LineChart } from "@tremor/react";

const MaintenanceReports = () => {
  const handleGenerateReport = () => {
    // Lógica para gerar o relatório
    console.log('Gerando relatório de manutenção...');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Relatórios de Manutenção</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Manutenção por Máquina</h3>
          <BarChart
            data={[
              { machine: 'Máquina A', count: 10 },
              { machine: 'Máquina B', count: 12 },
              { machine: 'Máquina C', count: 8 },
            ]}
            categories={['count']}
            dataKey="machine"
            height="h-64"
            colors={['red']}
          />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Manutenção por Período</h3>
          <LineChart
            data={[
              { month: 'Jan', maintenance: 4 },
              { month: 'Feb', maintenance: 6 },
              { month: 'Mar', maintenance: 7 },
            ]}
            categories={['maintenance']}
            dataKey="month"
            height="h-64"
            colors={['purple']}
          />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Manutenção por Equipe</h3>
          <BarChart
            data={[
              { team: 'Equipe A', count: 5 },
              { team: 'Equipe B', count: 3 },
              { team: 'Equipe C', count: 8 },
            ]}
            categories={['count']}
            dataKey="team"
            height="h-64"
            colors={['teal']}
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

export default MaintenanceReports;
