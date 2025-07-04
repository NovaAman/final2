import darkSaasLandingPage  from "@/assets/images/video.jpg";
import lightSaasLandingPage from "@/assets/images/thumbnail.jpg";
import aiStartupLandingPage from "@/assets/images/brand.jpg";
import Image from 'next/image';
import Icono from'@/assets/icons/check-circle.svg'
import Aroo from '@/assets/icons/arrow-up-right.svg'
import grain from '@/assets/images/grain.jpg'
import { Card } from "@/components/card";

const portfolioProjects = [
  {
    company: "Video Editing",
    title: "Boosting engagment",
    results: [
      { title: "Ingagement increased by 90%" },
      { title: "With best motion graphics " },
      { title: "Amazing story telling" },
    ],
    link: "#",
    image: darkSaasLandingPage    ,
  },
  {
    company: "YT Thumbnails",
    title: "That standout",
    results: [
      { title: "Boosted click through rate by 93%" },
      { title: "Boosted views by 70%" },
    ],
    link: "#",
    image: lightSaasLandingPage,
  },
  {
    company: "YT Banner",
    title: "Best youtube banner",
    results: [
      { title: "Enhanced subscription by 55%" },
      { title: "Improved recogniton by 50%" },
    ],
    link: "#",
    image: aiStartupLandingPage,
  },
]

  

export const ProjectsSection = () => {
  return(
    
    <section className="pb-16 lg:py-24">
      <div id="projects" className="container">


        <div className="flex justify-center">
        </div>
            <h2 className="font-serif md:text-5xl text-3xl text-center mt-6">My Services</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See how i transformed designs into engaging digital experience</p>
        

        <div className="flex flex-col mt-10 gap-20">

        {portfolioProjects.map((project, projectIndex)=>(

        <Card
          key={project.title} 
          className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
          style={{
            top: `calc(64px + ${projectIndex * 40}px`,

          }}
          >

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">


          <div className="flex">
            <div className="bg-gradient-to-bl from-[#DE9200] to-[#493003]
            inline-flex gap-2  font-bold uppercase  tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
            </div>
        
          </div>
          <h3 className="text-gray-300 font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
            
            {project.title}</h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {project.results.map((result) =>(
              <li className="flex gap-2 text-sm md:text-base text-white/50" key={result.title}>
                <Icono className="size-5 md:size-6"/>
                <span>{result.title}</span>
              </li>
            ))}
          </ul>
          <a href={project.link}>
            <button className="bg-gray-200 text-gray-950 h-12 md:w-auto px-6 w-full rounded-xl font-semibold inline-flex
            items-center justify-center gap-2 mt-8">
              <span>View</span>
              <Aroo className="size-4"/>
            </button>
          </a>
          </div>
          
          <Image src={project.image} alt={project.title} className="mt-8 lg:absolute lg:h-full lg:ml-[450px] -mb-4 md:-mb-0 lg:mt-0"/>
        </div>
        </Card>
        ))}
      </div>
      </div>
    </section>
  )
};
