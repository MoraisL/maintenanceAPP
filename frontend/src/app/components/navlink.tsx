import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

const links = [
        {target:"#", text: "Dashboard", icon: <MdDashboard />},
        {target:"#", text: "Ambientes", icon: <FaBuilding />},
        {target:"#", text: "Equipamentos", icon: <MdForklift />},
        {target:"#", text: "Manutenção", icon: <FaTools />},
        {target:"#", text: "Usuários", icon: <FaUsers />},
];


export function NavLink(){


    return(

        <>
        {links.map((obj) => (
            <a href={obj.target} className="flex items-center gap-4 hover:font-semibold ">
              {obj.icon}
              {obj.text}
            </a>
            ))}
        </>
    );
}