import grain from "@/assets/images/grain.jpg"
import { Children, ComponentProps, ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge"


export const Card =({
    className, 
    children,
    ...other
    }:ComponentPropsWithoutRef<'div'>) =>{
        return(
        <div
          className={twMerge(
         "bg-[#000000] rounded-3xl overflow-hidden relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-[#ABB8CB]/30 after:pointer-events-none", className
         )}
         {...other}
        >

            <div className="absolute inset-0 -z-20 opacity-5" style={{
              backgroundImage:`url(${grain.src})`,
            }}
            ></div>
            {children}
            </div>
)}