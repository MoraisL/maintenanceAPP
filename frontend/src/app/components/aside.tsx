import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";
import Image from "next/image";
import { NavLink } from "./navlink";

export function Aside() {
    return(
        <aside className="w-64 p-6 bg-white">
            <Image src={"/image/logo.png"} className="w-full"
           alt="Logo" width={240} height={240} />

          <nav className="space-y-4 flex flex-col mt-8">
          <NavLink />
          </nav>
        </aside>
    );
}