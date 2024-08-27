// components/reports/Reports.tsx

import React from 'react';
import { BarChart, LineChart } from "@tremor/react";

interface ReportData {
  title: string;
  chartType: 'BarChart' | 'LineChart';
  data: any[];
  categories: string[];
  index: string; // Alterado de dataKey para index
  colors: string[];
}

interface ReportsProps {
  title: string;
  reports: ReportData[];
  onGenerateReport: () => void;
}

const Reports: React.FC<ReportsProps> = ({ title, reports, onGenerateReport }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{report.title}</h3>
            {report.chartType === 'BarChart' ? (
              <BarChart
                data={report.data}
                categories={report.categories}
                index={report.index} // Usando index em vez de dataKey
                height="h-64"
                colors={report.colors}
              />
            ) : (
              <LineChart
                data={report.data}
                categories={report.categories}
                index={report.index} // Usando index em vez de dataKey
                height="h-64"
                colors={report.colors}
              />
            )}
          </div>
        ))}
      </div>
      <button 
        onClick={onGenerateReport} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Gerar Relatório
      </button>
    </div>
  );
};

export default Reports;
