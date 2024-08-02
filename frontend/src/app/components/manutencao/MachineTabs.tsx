"use client";

interface MachineTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MachineTabs: React.FC<MachineTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white shadow p-4 mb-4 flex justify-center">
      <button
        onClick={() => setActiveTab("Cadastro")}
        className={`p-2 mx-2 ${activeTab === "Cadastro" ? "bg-gray-300" : "bg-white"} text-black`}
      >
        Cadastro de Máquinas
      </button>
      <button
        onClick={() => setActiveTab("Visualizacao")}
        className={`p-2 mx-2 ${activeTab === "Visualizacao" ? "bg-gray-300" : "bg-white"} text-black`}
      >
        Visualização de Máquinas
      </button>
    </div>
  );
};

export default MachineTabs;
