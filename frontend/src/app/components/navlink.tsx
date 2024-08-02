import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

const links = [
        {target:"/dashboard", text: "Dashboard", icon: <MdDashboard />},
        {target:"/manutencao", text: "Manutenções", icon: <FaBuilding />},
        {target:"/pecasemateriais", text: "Peças e Materiais", icon: <MdForklift />},
        {target:"/relatorios", text: "Relatórios", icon: <FaTools />},
        {target:"/Custos", text: "Custos", icon: <FaUsers />},
];


export function NavLink(){


    return(

        <>
        {links.map((obj) => (
            <a href={obj.target} className="flex items-center gap-7 hover:font-semibold text-black text-2xl">
              {obj.icon}
              {obj.text}
            </a>
            ))}
        </>
    );
}