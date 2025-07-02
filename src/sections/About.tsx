"use client";
import { Card } from "@/components/card";
import { Section } from "@/components/Section";
import book from "@/assets/images/book-cover.png"
import Image from "next/image";
import JsM from "@/assets/icons/square-js.svg"
import Css from "@/assets/icons/css3.svg"
import Html from "@/assets/icons/html5.svg"
import React from "@/assets/icons/react.svg"
import Git from "@/assets/icons/github.svg"
import Chrome from "@/assets/icons/chrome.svg"
import map from "@/assets/images/map.png"
import smile from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/card-header";
import { Toolbox } from "@/components/toolbox";
import {motion} from "framer-motion"
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JsM,
  },
  {
    title: 'HTML5',
    iconType: Html,
  },
  {
    title: 'CSS3',
    iconType: Css,
  },
  {
    title: 'React',
    iconType: React,
  },
  {
    title: 'Github',
    iconType: Git,
  },
  {
    title: 'Chrome',
    iconType: Chrome,
  }
];

const hobbies =[
  {
    title:'Painting',
    emoji:'',
    left:'5%',
    top:'5%'
  },

  {
    title:'Anime',
    emoji:'a',
    left:'50%',
    top:'5%'
  },
  {
    title:'Gaming',
    emoji:'a',
    left:'10%',
    top:'35%'
  },

  {
    title:'Hacking',
    emoji:'a',
    left:'35%',
    top:'40%' 
  },

  {
    title:'Music',
    emoji:'a',
    left:'70%',
    top:'45%'
  },

  {
    title:'Fitness',
    emoji:'a',
    left:'5%',
    top:'65%'
  },

  {
    title:'Reading',
    emoji:'a',
    left:'45%',
    top:'70%'
  }
]





export const AboutSection = () => {
  const constraintRef = useRef(null);
  return(
  <div id="about" className="py-20 lg:py-28">
    <div className="container">
    <Section 
      eyebrow=""
      title="A glimpse into my world"
      description="learn more about who I am, what I do,"
      />
      <div className="mt-20 flex flex-col gap-8 ">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-5 gap-8 md:gap-8">

          

          <Card className="h-[320px] lg:col-span-1 md:col-span-2">
          <CardHeader 
          title="My reads"
          description="explore the books.........."/>
            
          <div className="w-40 md:mt-0 mx-auto mt-2">
            <Image src={book} alt="book"/>
          </div>
            
          
          
        </Card>


        <Card className="h-[320px] lg:col-span-2 md:col-span-3">
          <CardHeader 
          title="My toolbox"
          description="Explore the technologies and tools"
          className=""
          />

        <Toolbox items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:300s]"/>
        <Toolbox items={toolboxItems} 
        className="mt-6 "
        itemsWrapperClassName=" animate-move-right [animation-duration:150s]"/>

        </Card>

        </div>


        <div className="md:grid lg:grid-cols-3 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">

          <Card className="h-[320px] p-0 flex lg:col-span-2 flex-col md:col-span-3">
          <CardHeader 
          title="Beyond the code"
          description="Explore my interests and hobbies beyond the digital realm."
          className="px-6 py-6"/>
          
          <div className="relative flex-1" ref={constraintRef}>
            {hobbies.map((hobby) =>(
              <motion.div key={hobby.title} className="inline-flex items-center 
              gap-2 py-1.5 px-6 bg-gradient-to-r
              from-[#28314E] to-[#585F89] rounded-full absolute"
              style={{
                left: hobby.left,
                top:hobby.top,
              }}
              drag
              dragConstraints={constraintRef}
              >
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </motion.div>
            ))}
          </div>


        </Card >

        <Card className="h-[320px] p-0 lg:col-span-1 relative md:col-span-2">
          <Image src={map} alt="map" className="h-full w-full object-cover object-left-top"/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full
          bg-gradient-to-r from-[#DE9200] to-[#DE9200] after:content-[''] after:absolute after:inset-0 after:outline after:outline-2
          after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DE9200] to-[#DE9200] -z-20 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DE9200] to-[#DE9200] -z-10"></div>
            <Image src={smile} alt="smile" className="size-20"/>
          </div>
          
        </Card>
        </div>
        



        
      </div>
    </div>  
  </div>
)};
