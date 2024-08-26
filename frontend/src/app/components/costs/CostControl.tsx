// components/costs/CostControl.tsx

import React, { useState } from 'react';
import { BarChart, DonutChart } from "@tremor/react";

const CostControl = () => {
  const [costs, setCosts] = useState({
    parts: 0,
    materials: 0,
    labor: 0,
    services: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, costType: keyof typeof costs) => {
    setCosts({
      ...costs,
      [costType]: parseFloat(e.target.value) || 0,
    });
  };

  const totalCost = Object.values(costs).reduce((acc, cost) => acc + cost, 0);

  const costData = [
    { category: 'Peças', cost: costs.parts },
    { category: 'Materiais', cost: costs.materials },
    { category: 'Mão de Obra', cost: costs.labor },
    { category: 'Serviços', cost: costs.services },
  ];

  const maintenanceData = [
    { maintenance: 'Manutenção A', cost: 1000 },
    { maintenance: 'Manutenção B', cost: 1500 },
    { maintenance: 'Manutenção C', cost: 1200 },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Controle de Custos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Registro de Gastos</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Gastos com Peças</label>
              <input 
                type="number"
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="R$"
                onChange={(e) => handleInputChange(e, 'parts')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gastos com Materiais</label>
              <input 
                type="number"
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="R$"
                onChange={(e) => handleInputChange(e, 'materials')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gastos com Mão de Obra</label>
              <input 
                type="number"
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="R$"
                onChange={(e) => handleInputChange(e, 'labor')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gastos com Serviços</label>
              <input 
                type="number"
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="R$"
                onChange={(e) => handleInputChange(e, 'services')}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Visualização dos Custos</h3>
          <DonutChart
            data={costData}
            category="cost"
            index="category"
            colors={['cyan', 'yellow', 'red', 'green']}
            className="h-64"
          />
          <p className="mt-4 text-xl font-bold">Custo Total: R$ {totalCost.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Controle de Custos de Manutenção</h3>
        <BarChart
          data={maintenanceData}
          categories={['cost']}
          index="maintenance"
          className="h-64"
          colors={['blue']}
        />
      </div>
    </div>
  );
};

export default CostControl;
