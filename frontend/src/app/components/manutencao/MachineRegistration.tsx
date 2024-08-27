"use client";

const MachineRegistration: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-black text-2xl mb-4">Cadastro de Manutenção</h1>
      <form>
        <div className="mb-4">
          <label className="block text-black mb-2">Identificação:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Máquina:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Modelo:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Equipe:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Status:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Localização:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Imagens:</label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
        >
          Cadastrar Máquina
        </button>
      </form>
    </div>
  );
};

export default MachineRegistration;
