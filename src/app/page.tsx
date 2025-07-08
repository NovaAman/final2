import { CardHeader } from "@/sections/card-header";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import {Header} from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import Feature from "@/sections/Feature"
import { TestimonialsSection } from "@/sections/Testimonials";


export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black to-[#DE9200]/20">
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <Feature/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
