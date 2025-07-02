export const Tech = ({component}:{component: React.ElementType})=>{
    const Component = component;
    return(
        <>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]"/>
            <svg className="size-0 absolute text-[#565080]">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor="rgb(149 127 173)"/>
                    <stop offset="100%" stopColor="rgb(86 80 127)"/>
                </linearGradient>
            </svg>
        </>
        
    );
}