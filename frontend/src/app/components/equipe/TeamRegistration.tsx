"use client";

const TeamRegistration: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h1 className="text-black text-2xl mb-4">Cadastro de Equipes</h1>
      <form>
        <div className="mb-4">
          <label className="block text-black mb-2">ID da Equipe:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Colaboradores:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Especialidade:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2">Disponibilidade:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
        >
          Cadastrar Equipe
        </button>
      </form>
    </div>
  );
};

export default TeamRegistration;
