"use client";

interface Tab {
  id: string;
  title: string;
}

interface MachineTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: Tab[];
}

const MachineTabs: React.FC<MachineTabsProps> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="bg-white shadow p-4 mb-4 flex justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`p-2 mx-2 ${activeTab === tab.id ? "bg-gray-300" : "bg-white"} text-black`}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default MachineTabs;
