export const Section =({
    title,
    eyebrow,
    description,
}:{
    title: string;
    eyebrow: string;
    description: string;
})=>{
    return(
        <>
        <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-[#957FAD] to-[#565080] text-center bg-clip-text text-transparent">
                {eyebrow}
            </p>
        </div>
            <h2 className="font-serif md:text-5xl text-3xl text-center mt-6">
                {title}
            </h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
                {description}
            </p>
        </>
        
    )
}