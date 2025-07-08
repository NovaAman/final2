import Arro from '@/assets/icons/arrow-up-right.svg'
import Link from 'next/link';



export const Footer = () => {
  return(
    <footer className='relative overflow-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 
      -translate-x-1/2 bg-[#DE9200]/30 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]'></div>
      <div className="container">
        <div className='border-t border-white/25 py-6 text-sm flex gap-8 flex-col md:justify-between md:flex-row items-center'>
          <div className='text-white/80'>&copy; 2025. All rights reserved</div>

          <nav className='flex flex-col gap-8 items-center md:flex-row'>
            
              <div className='flex flex-col items-center gap-8' >
                
                  <a href='https//vm.tiktok.com/ZMSbBwFD8' className='pointer-events-auto z-50 relative font-semibold'> 
                  <div className='inline-flex'>
                    <span>Tiktok</span>
                <Arro className="size-4"/>
                </div> </a>
              

                <div className='inline-flex'>
                  <a href='https://www.instagram.com/haedit_videos?igsh=YzljYTk1ODg3Zg==' className='z-50 font-semibold'>Instagram</a>
                <Arro className="size-4"/>
                </div>

                <div className='z-[999] inline-flex'>
                 
                  <a  href='https://t.me/rivolume' className=' font-semibold'>Telegram</a>
                <Arro className="size-4"/>
                 
                  
                </div>
              </div>
          </nav>
        </div>
      </div>
    </footer>
  )
};
