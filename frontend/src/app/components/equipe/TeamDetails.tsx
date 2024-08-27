"use client";

const mockData = [
  { 
    id: "001", 
    colaboradores: "João, Maria, Pedro", 
    especialidade: "Manutenção", 
    disponibilidade: "Alta" 
  },
  { 
    id: "002", 
    colaboradores: "Ana, Carlos, José", 
    especialidade: "Instalação", 
    disponibilidade: "Média" 
  },
  { 
    id: "003", 
    colaboradores: "Fernanda, Bruno", 
    especialidade: "Suporte", 
    disponibilidade: "Baixa" 
  },
];

const TeamDetails: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-black text-2xl mb-4">Detalhes das Equipes</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-black">ID da Equipe</th>
            <th className="border p-2 text-black">Colaboradores</th>
            <th className="border p-2 text-black">Especialidade</th>
            <th className="border p-2 text-black">Disponibilidade</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index}>
              <td className="border p-2 text-black">{item.id}</td>
              <td className="border p-2 text-black">{item.colaboradores}</td>
              <td className="border p-2 text-black">{item.especialidade}</td>
              <td className="border p-2 text-black">{item.disponibilidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamDetails;
