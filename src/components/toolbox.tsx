import { twMerge } from "tailwind-merge";
import { Tech } from "./tech"
import { Fragment } from "react";
export const Toolbox =({
    items,
    className,
    itemsWrapperClassName,
}:{
    items:{
        title: string;
        iconType: React.ElementType;

    }[];
    className?: string;
    itemsWrapperClassName?: string;
})=>{
    return(
        <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
            className
        )}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", 
            itemsWrapperClassName
            )}>
                {[...new Array(20)].fill(40).map((_, idx) => (
                            <Fragment key={idx}>

                                {items.map((item) =>(
                    <div 
                        key={item.title} 
                        className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                        <Tech component={item.iconType} />
                        <span className="font-semibold">{item.title}</span>
                    </div>
                    ))}

                            </Fragment>
                ))}
            </div>
        </div>
    );
};