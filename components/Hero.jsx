"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const Hero = () => {
  return (                
    <>
      <div className="h-[100vh] w-full bg-gray-400">
        <Carousel onSlideChange={(slideIdx) => console.log(slideIdx)}>
          <div className="sm:h-full h-[100vh] w-full">
            <Image
              src="/image/slide1.jpg"
              alt="Slide 1"
              fill
              style={{ objectFit: "cover" }}
              className="hidden md:block"
            />
            <Image
              src="/image/mobile1.png"
              alt="Slide 1"
              fill
              style={{ objectFit: "cover" }}
              className="flex md:hidden z-50"
            />

          </div>

          <div className="sm:h-full h-[100vh] w-full ">
            <Image
              src="/image/slide2.jpg"
              alt="Slide 2"
              fill
              style={{ objectFit: "cover" }}
              className="hidden md:block"
            />
              <Image
              src="/image/mobile2.png"
              alt="Slide 1"
              fill
              style={{ objectFit: "cover" }}
              className="flex md:hidden z-50"
            />
          </div>

          <div className="sm:h-full h-[100vh] w-full">
            <Image
              src="/image/slide3.jpg"
              alt="Slide 3"
              fill
              style={{ objectFit: "cover" }}
              className="hidden md:block"
            />

<Image
              src="/image/mobile3.png"
              alt="Slide 1"
              fill
              style={{ objectFit: "cover" }}
              className="flex md:hidden z-50"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
