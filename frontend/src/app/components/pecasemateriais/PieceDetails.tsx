"use client";

const mockPiecesData = [
  { nome: "Parafuso", codigo: "P001", fornecedor: "Fornecedor A", quantidade: 100, valorUnitario: "R$10,00" },
  { nome: "Arruela", codigo: "P002", fornecedor: "Fornecedor B", quantidade: 200, valorUnitario: "R$5,00" },
  { nome: "Porca", codigo: "P003", fornecedor: "Fornecedor C", quantidade: 150, valorUnitario: "R$8,00" },
];

const PieceDetails: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-black text-2xl mb-4">Detalhes das Peças</h1>
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
          {mockPiecesData.map((item, index) => (
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

export default PieceDetails;
