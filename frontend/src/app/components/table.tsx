import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface TableData {
  ambiente: string;
  equipamento: string;
  solicitacao: number;
  atendimento: number;
}

interface TableProps {
  data: TableData[];
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-center bg-gray-500 rounded-3xl text-black">
          <th className="p-2">Ambiente</th>
          <th className="p-2">Equipamento</th>
          <th className="p-2">Solicitação</th>
          <th className="p-2">Atendimento</th>
          <th className="p-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="p-2">{item.ambiente}</td>
            <td className="p-2">{item.equipamento}</td>
            <td className="p-2">{item.solicitacao}</td>
            <td className="p-2">{item.atendimento}</td>
            <td className="p-2 flex justify-center">
              <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700 mx-1" />
              <FaTrash className="cursor-pointer text-red-500 hover:text-red-700 mx-1" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

