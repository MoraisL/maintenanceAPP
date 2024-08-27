"use client";

const mockData = [
  { 
    identificacao: "M-001", 
    maquina: "Trator", 
    modelo: "XJ-200", 
    equipe: "Equipe A", 
    status: "Em andamento", 
    localizacao: "Fazenda A", 
    imagens: "imagem1.jpg" 
  },
  { 
    identificacao: "M-002", 
    maquina: "Caminhão", 
    modelo: "FZ-300", 
    equipe: "Equipe B", 
    status: "Concluída", 
    localizacao: "Depósito B", 
    imagens: "imagem2.jpg" 
  },
  { 
    identificacao: "M-003", 
    maquina: "Gerador", 
    modelo: "GX-150", 
    equipe: "Equipe C", 
    status: "Aguardando peças", 
    localizacao: "Sala de Máquinas", 
    imagens: "imagem3.jpg" 
  },
];

const MachineDetails: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-black text-2xl mb-4">Detalhes das Manutenções</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-black">Identificação</th>
            <th className="border p-2 text-black">Máquina</th>
            <th className="border p-2 text-black">Modelo</th>
            <th className="border p-2 text-black">Equipe</th>
            <th className="border p-2 text-black">Status</th>
            <th className="border p-2 text-black">Localização</th>
            <th className="border p-2 text-black">Imagens</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index}>
              <td className="border p-2 text-black">{item.identificacao}</td>
              <td className="border p-2 text-black">{item.maquina}</td>
              <td className="border p-2 text-black">{item.modelo}</td>
              <td className="border p-2 text-black">{item.equipe}</td>
              <td className="border p-2 text-black">{item.status}</td>
              <td className="border p-2 text-black">{item.localizacao}</td>
              <td className="border p-2 text-black">{item.imagens}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MachineDetails;
