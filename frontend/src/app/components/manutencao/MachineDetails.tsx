"use client";

const mockData = [
  { 
    nome: "Trator", 
    tipo: "Agrícola", 
    modelo: "XJ-200", 
    fabricacao: "2023-01-15", 
    numeroSerie: "123456789", 
    localizacao: "Fazenda A", 
    imagens: "N/A" 
  },
  { 
    nome: "Caminhão", 
    tipo: "Transporte", 
    modelo: "FZ-300", 
    fabricacao: "2022-07-22", 
    numeroSerie: "987654321", 
    localizacao: "Depósito B", 
    imagens: "N/A" 
  },
  { 
    nome: "Gerador", 
    tipo: "Energia", 
    modelo: "GX-150", 
    fabricacao: "2021-11-10", 
    numeroSerie: "456789123", 
    localizacao: "Sala de Máquinas", 
    imagens: "N/A" 
  },
];

const MachineDetails: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-black text-2xl mb-4">Detalhes das Máquinas</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-black">Nome</th>
            <th className="border p-2 text-black">Tipo</th>
            <th className="border p-2 text-black">Modelo</th>
            <th className="border p-2 text-black">Dados de Fabricação</th>
            <th className="border p-2 text-black">Número de Série</th>
            <th className="border p-2 text-black">Localização</th>
            <th className="border p-2 text-black">Imagens</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index}>
              <td className="border p-2 text-black">{item.nome}</td>
              <td className="border p-2 text-black">{item.tipo}</td>
              <td className="border p-2 text-black">{item.modelo}</td>
              <td className="border p-2 text-black">{item.fabricacao}</td>
              <td className="border p-2 text-black">{item.numeroSerie}</td>
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
