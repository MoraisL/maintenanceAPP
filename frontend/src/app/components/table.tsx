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
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid black', textAlign: 'center' }}>
          <th style={{ padding: '8px' }}>Ambiente</th>
          <th style={{ padding: '8px' }}>Equipamento</th>
          <th style={{ padding: '8px' }}>Solicitação</th>
          <th style={{ padding: '8px' }}>Atendimento</th>
          <th style={{ padding: '8px' }}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={{ textAlign: 'center' }}>
            <td style={{ padding: '8px' }}>{item.ambiente}</td>
            <td style={{ padding: '8px' }}>{item.equipamento}</td>
            <td style={{ padding: '8px' }}>{item.solicitacao}</td>
            <td style={{ padding: '8px' }}>{item.atendimento}</td>
            <td style={{ padding: '8px', display: 'flex', justifyContent: 'center' }}>
            <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
            <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
