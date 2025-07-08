import Arro from "@/assets/icons/arrow-up-right.svg"
import grain from "@/assets/images/grain.jpg"



export const ContactSection = () => {
  return(
    <div id="contact" className=" py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className=" relative z-0 overflow-hidden text-gray-300 py-8 px-10 text-center rounded-3xl bg-gradient-to-r from-[#694f1f] to-[#4a3103]">
          <div className="absolute inset-0 opacity-5 -z-10"
          style={{
            backgroundImage:`url(${grain.src})`,
          }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif md:text-3xl text-2xl">Let&apos;s create something amazing  together</h2>
      <p className="text-sm mt-2 md:text-base">Ready to bring your next project to life? Let&apos;s connect and discuss.
        I can help you achieve your goals.
      </p>
            </div>
            <div>
              <a href="tel:+251976877165">

                <button className="border border-gray-950 text-white bg-gray-950 inline-flex items-center px-6 h-12 rounded-xl w-max gap-2 ">
              <span className="font-semibold">Contact Me</span> <Arro className="size-4"/> </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
