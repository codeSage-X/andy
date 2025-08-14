"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const carouselSlides = [
  {
    id: 1,
    images: [
      { src: "/images/dog1.png", alt: "Person with pink hair" },
      { src: "/images/dog2.png", alt: "Andy in cardboard box" },
      { src: "/images/dog3.png", alt: "Dogs in animal shelter" },
    ],
    text: "Back in the day, I ran with the wrong pack... but a dog's gotta do what a dog's gotta do, ya feel?",
  },
  {
    id: 2,
    images: [
      { src: "/images/dog1.png", alt: "Stray dog looking for food" },
      { src: "/images/dog2.png", alt: "Kind human helping" },
      { src: "/images/dog3.png", alt: "Dog being rescued" },
    ],
    text: "Then I met some good humans who showed me there was more to life than just surviving on the streets.",
  },
  {
    id: 3,
    images: [
      { src: "/images/dog1.png", alt: "Happy dog in loving home" },
      { src: "/images/dog2.png", alt: "Dogs playing at park" },
      { src: "/images/dog3.png", alt: "Dog dreaming of moon" },
    ],
    text: "Now I'm ready to take this journey to the moon, and I want to bring all my friends along for the ride!",
  },
  {
    id: 4,
    images: [
      { src: "/images/dog1.png", alt: "Building dog community" },
      { src: "/images/dog2.png", alt: "Preparing for moon mission" },
      { src: "/images/dog3.png", alt: "Dogs heading to the moon" },
    ],
    text: "Together with my pack, we're building something amazing - a community that reaches for the stars!",
  },
]

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000) 

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative py-40  overflow-hidden bg-[#F6EAC7]">
      {/* Theater Curtains */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-full z-10">
        <div className="w-full h-full relative">
       
          {/* Curtain curves */}
          <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-full  rounded-l-full"></div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-full z-10">
        <div className="w-full h-full relative">
          {/* Curtain folds */}
         
          <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-full rounded-r-full"></div>
        </div>
      </div>

      {/* Golden top border */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-30 ">
        <Image
          src="/images/curtain.png"
          alt="Golden border"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full mx-auto px-0 h-full flex flex-col mt-8">
        {/* Film Strip Container - Centered Vertically */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative bg-black rounded-lg p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 md:mx-6 w-full">
          {/* Film perforations - top */}
          <div className="absolute top-2 left-0 right-0 flex justify-center">
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="w-3 h-2 sm:w-4 sm:h-3 md:w-10 md:h-10 bg-[#F6EAC7] rounded-sm"></div>
              ))}
            </div>
          </div>

          {/* Film perforations - bottom */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="w-3 h-2 sm:w-4 sm:h-3 md:w-10 md:h-10  bg-[#F6EAC7] rounded-sm"></div>
              ))}
            </div>
          </div>

          {/* Film Frames - Scrolling Container */}
          <div className="relative overflow-hidden py-6 sm:py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full flex-shrink-0 flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-6"
                >
                  {slide.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative">
                      <div className="w-40 h-28 sm:w-56 sm:h-36 md:w-72 md:h-48 lg:w-80 lg:h-56 xl:w-96 xl:h-64 bg-gray-800 rounded-lg overflow-hidden border-2 sm:border-3 md:border-4 border-gray-600 shadow-lg">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>

      

      </div>
        {/* Bottom Section - Navigation and Text */}
        <div className="nav-bottom space-y-4 mt-8 z-80   absolute bottom-10 sm:bottom-10 md:bottom-10 lg:bottom-10 xl:bottom-10 2xl:bottom-10 3xl:bottom-10 left-0 right-0  sm:px-8 lg:px-0 xl:px-20 2xl:px-46 3xl:px-46">
          {/* Story Text with Navigation */}
          <div className="flex items-center justify-between px-4 sm:px-8 lg:px-46 xl:px-46 2xl:px-46 3xl:px-46">
            <Button
              onClick={prevSlide}
              className="bg-transparent hover:bg-transparent text-black transition-all duration-200 flex-shrink-0"
            >
              <Image 
                src="/images/prev.png" 
                alt="Previous" 
                width={100} 
                height={100} 
                 className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[100px] 2xl:h-[100px] 3xl:w-[100px] 3xl:h-[100px]" 
              />
            </Button>

            <div className="text-center px-4">
              <p className="nunito font-bold text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
                {carouselSlides[currentSlide].text}
              </p>
            </div>

            <Button
              onClick={nextSlide}
              className="bg-transparent hover:bg-transparent text-black transition-all duration-200 flex-shrink-0"
            >
              <Image 
                src="/images/next.png" 
                alt="Next" 
                width={100} 
                height={100} 
                className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[100px] 2xl:h-[100px] 3xl:w-[100px] 3xl:h-[100px]" 
              />
            </Button>
          </div>

        </div>
    </section>
  )
}
