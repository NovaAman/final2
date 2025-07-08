import memoji from'@/assets/images/memoji-computer.png'
import Image from 'next/image';
import Arrow from '@/assets/icons/arrow-down.svg'
import grain from '@/assets/images/grain.jpg'
import Star from  '@/assets/icons/star.svg'
import {Orbito} from '@/components/orbit'
import { scroll } from 'framer-motion/dom';


export const HeroSection = () => {
  return( 
  <div id='hero' className='  py-32 md:py-48 lg:py-60 relative z-0 overflow-clip'>
    <div className='absolute inset-0 -z-30 opacity-5' style={{
      backgroundImage:`url(${grain.src})`,
    }}>
  </div>

      <div className='size-[400px] cir-cle '></div>
      <div className='size-[700px] cir-cle '></div>
      <div className='size-[1000px] cir-cle '></div>
      <div className='size-[1200px] cir-cle '></div>

      <Orbito size={800}>
        <Star className="size-2" />
      </Orbito>



    <div className="z-50 container">


      <div className='flex flex-col items-center'>
          



            <div className='bg-linear-gradient from-[#040811] to-red-500 border border-[#DE9200]/40 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg '>
            
              <div className='relative bg-red-600 size-2.5 rounded-full
              
              '>
                <div className='rounded-full bg-red-500 absolute inset-0 animate-ping-large'></div>
              </div>
              <div className='text-sm font-medium'>Avaliable for new desgns </div>
            </div>
      </div>    
          
          


          <div className='z-50 max-w-lg mx-auto'>

              <h1 className=' md:text-5xl font-serif text-3xl text-center mt-4 tracking-wide'>Crafting Best Designs <span className='text-gray-300'>and <span className='text-[#DE9200]'>videos</span></span></h1>
                <p className='mt-4 text-center md:text-lg text-white'>
                    Tired of putting hours of work into your videos just for them to flop? We&apos;ve got the perfect  solution for you.
                </p>
          </div>


          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>

            <a className='z-50' href="#projects">
              <button className=' transition duration-700 hover:border-black  hover:bg-white/50 hover:text-gray-950 scroll-m-20 inline-flex items-center gap-2 border rounded-xl  px-6 h-12'>
              <span className='font-semibold '>Past works</span>
              <Arrow className="size-4"/>
            </button>
            </a>
            

            <a className='z-50' href="#contact">

              <button className='  hover:bg-white/10 hover:text-white transition duration-300 inline-flex items-center gap-2 hover:bg-white bg-white/5 rounded-xl px-6 h-12 text-gray-900'>
              <span className=' text-gray-300 size-18 font-semibold'>Let&apos;s connect</span>
            </button>
            </a>
            

          </div>
    </div>
  </div>
  
)};
