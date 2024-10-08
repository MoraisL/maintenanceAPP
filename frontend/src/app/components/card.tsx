import { FaBuilding } from "react-icons/fa";


interface CardInterface {
    color?: string;
    qty?: string;
    text?: string;
    icon?: React.ReactNode;
}


export function Card({color, qty, text, icon}: CardInterface){ 
    return (
        <div className={`${color} p-6 flex 
        gap-2 rounded-xl`}>
            <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-black">{qty}</strong>
                <span className="text-sm text-black">{text}</span>
            </div>
            {icon}

        </div>
    );
}