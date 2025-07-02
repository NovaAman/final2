import { PropsWithChildren } from "react"

export const Orbito = ({
    children,
     size,
    }: PropsWithChildren<{ size: number }>) => {
    return(
        <div className=' absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='' style={{
                    height: `${size}px`,
                    width: `${size}px`,
                }}>
                    <div className="border-red-500 inline-flex"  >{children} </div>

            </div>
        
        </div>

    ) 
};

export default Orbito;


