"use client"
import { cn } from "@/lib/utils";
// import { Herr_Von_Muellerhoff } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks =[
    {
        id:0,
        name:"Home",
        href:'/',
    },
    {
        id:1,
        name:"Bed",
        href:'/products/bed',
    },
    {
        id:2,
        name:"Lamp",
        href:"/products/lamp",

    },
    {
        id:3,
        name:"Sofa",
        href:'/products/sofa',
    },
];
export function NavbarLinks(){
    const location =usePathname();

    console.log(location);
    return(
        <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
             { navbarLinks.map((item) =>(
            <Link href={item.href} key={item.id} className={cn(
                location === item.href ? "bg-muted" : "hover:bg-muted hover:bg-opacity-75", "group flex items-center px-2 py-2 font-medium rounded-md" 
            )}>
                {item.name}
            
            </Link>

        ))}


        </div>
    );
}