"use client";

const mockMaterialsData = [
  { nome: "Cimento", codigo: "M001", fornecedor: "Fornecedor X", quantidade: 500, valorUnitario: "R$30,00" },
  { nome: "Areia", codigo: "M002", fornecedor: "Fornecedor Y", quantidade: 1000, valorUnitario: "R$15,00" },
  { nome: "Cal", codigo: "M003", fornecedor: "Fornecedor Z", quantidade: 300, valorUnitario: "R$20,00" },
];

const MaterialDetails: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-black text-2xl mb-4">Detalhes dos Materiais</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-black">Nome</th>
            <th className="border p-2 text-black">Código</th>
            <th className="border p-2 text-black">Fornecedor</th>
            <th className="border p-2 text-black">Quantidade em Estoque</th>
            <th className="border p-2 text-black">Valor Unitário</th>
          </tr>
        </thead>
        <tbody>
          {mockMaterialsData.map((item, index) => (
            <tr key={index}>
              <td className="border p-2 text-black">{item.nome}</td>
              <td className="border p-2 text-black">{item.codigo}</td>
              <td className="border p-2 text-black">{item.fornecedor}</td>
              <td className="border p-2 text-black">{item.quantidade}</td>
              <td className="border p-2 text-black">{item.valorUnitario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialDetails;
