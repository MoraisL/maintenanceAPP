"use client";

const PieceRegistration: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-black text-2xl mb-4">Cadastro de Peças</h1>
      <form>
        <div className="mb-4">
          <label className="block text-black mb-2">Nome:</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded text-black" />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Código:</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded text-black" />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Fornecedor:</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded text-black" />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Quantidade em Estoque:</label>
          <input type="number" className="w-full p-2 border border-gray-300 rounded text-black" />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Valor Unitário:</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded text-black" />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Imagens:</label>
          <input type="file" className="w-full p-2 border border-gray-300 rounded text-black" />
        </div>
        <button type="submit" className="bg-black text-white p-2 rounded">Cadastrar Peça</button>
      </form>
    </div>
  );
};

export default PieceRegistration;
