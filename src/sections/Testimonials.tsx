import { Section } from "@/components/Section";
import Image from "next/image";
import grain from "@/assets/images/grain.jpg"
import { Card } from "@/components/card";
import { Fragment } from "react";
import thumb from "@/assets/images/thumb.jpg"
import t1 from "@/assets/images/thumbnail.jpg"
import t2 from "@/assets/images/t2.jpg"
import t3 from "@/assets/images/t3.jpg"
import t4 from "@/assets/images/t4.jpg"
import t5 from "@/assets/images/t5.jpg"
import t6 from "@/assets/images/t6.jpg"
import t7 from "@/assets/images/t7.jpg"
import t8 from "@/assets/images/t8.jpg"
import t9 from "@/assets/images/t9.jpg"
import t10 from "@/assets/images/t10.jpg"
import t11 from "@/assets/images/t11.jpg"
import t12 from "@/assets/images/t12.jpg"
import t13 from "@/assets/images/t13.jpg"
import t14 from "@/assets/images/t14.jpg"
import t15 from "@/assets/images/t15.jpg"
import t16 from "@/assets/images/t16.jpg"
import t17 from "@/assets/images/t17.jpg"
import t18 from "@/assets/images/t18.jpg"
import t19 from "@/assets/images/t19.jpg"
import t20 from "@/assets/images/t20.jpg"
import t22 from "@/assets/images/t21.jpg"
import t23 from "@/assets/images/t22.jpg"
import t24 from "@/assets/images/t23.jpg"
import t25 from "@/assets/images/t24.jpg"
import t26 from "@/assets/images/t25.jpg"
import t27 from "@/assets/images/t26.jpg"
import t28 from "@/assets/images/t27.jpg"
import t29 from "@/assets/images/t28.jpg"

const testimonials = [
  {
    name: "",
    image: t1,
  },
  {
    name: "",
     image: t2,
  },
  {
    name: "",
     image: t3,
  },
  {
    name: "",
     image: t4,
  },
  {
    name: "",
     image: t5,
  },
    {
    name: "",
    image: t6,
  },
  {
    name: "",
     image: t7,
  },
  {
    name: "",
     image: t8,
  },
  {
    name: "",
     image: t9,
  },
  {
    name: "",
     image: t10,
  },
    {
    name: "",
    image: t11,
  },
  {
    name: "",
     image: t12,
  },
  {
    name: "",
     image: t13,
  },
  {
    name: "",
     image: t14,
  },
  {
    name: "",
     image: t15,
  },
     {
    name: "",
    image: t16,
  },
  {
    name: "",
     image: t17,
  },
  {
    name: "",
     image: t18,
  },
  {
    name: "",
     image: t19,
  },
  {
    name: "",
     image: t20,
  },
  {
    name: "",
     image: t22,
  },
  {
    name: "",
     image: t23,
  },
  {
    name: "",
     image: t24,
  },
  {
    name: "",
     image: t25,
  },
     {
    name: "",
    image: t26,
  },
  {
    name: "",
     image: t27,
  },
  {
    name: "",
     image: t28,
  },
  {
    name: "",
     image: t29,
  },
];

export const TestimonialsSection = () => {
  return(
  <div className="py-12 lg:py-20">
    <div className="container">
          <Section eyebrow="" title="My Thumbnail works" description=" Don't just take my word for it. See my previous works."/>
          <div className="py-4 -my-4 mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:200s] hover:[animation-play-state:paused]">

              {[...new Array(2)].fill(0).map((_, index) => (
                <Fragment key={index}>

                {testimonials.map((testimonial) =>(
              <Card key={testimonial.name} className="
              hover:-rotate-3 transition duration-500
              ">
                  <div className=" bg-white w-80 h-48"></div>
                  <Image className="object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" src={testimonial.image} alt="testimonial.name"/>
              </Card>
            ))}
            </Fragment>
              ))}

              
            </div>
      </div>
  </div>


    </div>
);
};
