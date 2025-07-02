import Arro from '@/assets/icons/arrow-up-right.svg'

const links =[
  {
    title:'YouTube',
    href:'/'
  },
  {
    title:'Twitter',
    href:'/'
  },
  {
    title:'Instagram',
    href:'/'
  },
  {
    title:'LinkedIn',
    href:'/'
  }
]

export const Footer = () => {
  return(
    <footer className='relative -z-10 overflow-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 
      -translate-x-1/2 bg-[#DE9200]/30 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]'></div>
      <div className="container">
        <div className='border-t border-white/25 py-6 text-sm flex gap-8 flex-col md:justify-between md:flex-row items-center'>
          <div className='text-white/80'>&copy; 2025. All rights reserved</div>
          <nav className='flex flex-col gap-8 items-center md:flex-row'>
            {links.map(link=>(
              <a className='inline-flex items-center gap-1.5 ' href="/" key={link.title}>
                <span className='font-semibold'>{link.title}</span>
                <Arro className="size-4"/>
              </a>
            )

            )}
          </nav>
        </div>
      </div>
    </footer>
  )
};
