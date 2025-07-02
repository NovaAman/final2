import Star from "@/assets/icons/star.svg"
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Useable",
  "Reliable",

]

export const TapeSection = () => {
  return(
  <div className="text-white py-16 lg:py-24 overflow-clip">
    <div className="bg-gradient-to-r from-[#000000] to-[#000000]  -rotate-3 -mx-1">

      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 pr-4 py-3 
        animate-move-left [animation-duration:30s]">
          {[...new Array(2)].fill(4).map((_, idx) => (
            <Fragment key={idx}>

              {words.map(word =>(
          <div key={word} className="inline-flex gap-4 items-center">
            <span className="text-white font-extrabold text-sm">{word}</span>
            <Star className="size-6 text-white -rotate-12"/>
          </div>
          ))}
            </Fragment>
            
          
          ))}
        </div>
      </div>
    </div>
  </div>
)};
