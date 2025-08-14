"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface TestimonialCard {
  id: number
  name: string
  title: string
  image: string
  content: string
  verified: boolean
}

const testimonials: TestimonialCard[] = [
  {
    id: 1,
    name: "Garry Jerde",
    title: "Customer Integration Representative",
    image: "/images/dog.png",
    content:
      "Dolorem laborum necessitatibus quae quia. Quae voluptas optio asperiores officiis autem minima et delectus. Quasi sunt occaecati aut enim itaque. Incidunt aut nesciunt.",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    title: "Community Manager",
    image: "/images/dawg1.png",
    content:
      "Andy's journey inspired me so much! The community here is amazing and supportive. Every dog deserves a chance to reach for the moon just like Andy did.",
    verified: true,
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    title: "Blockchain Developer",
    image: "/images/dawg2.png",
    content:
      "From the streets to the moon - this project represents everything I believe in. The tokenomics are solid and the community is incredibly strong.",
    verified: true,
  },
  {
    id: 4,
    name: "Emma Thompson",
    title: "Digital Marketing Specialist",
    image: "/images/dawg3.png",
    content:
      "I've been following Andy since day one. The storytelling and community building here is phenomenal. This is more than just a token - it's a movement.",
    verified: true,
  },
  {
    id: 5,
    name: "David Chen",
    title: "Product Designer",
    image: "/images/dawg4.png",
    content:
      "The design and user experience of this project is top-notch. Andy's story resonates with so many people, and the execution is flawless.",
    verified: true,
  },
  {
    id: 6,
    name: "Lisa Johnson",
    title: "Content Creator",
    image: "/images/dawg5.png",
    content:
      "As a dog lover and crypto enthusiast, Andy represents the perfect combination of heart and innovation. The community support is incredible.",
    verified: true,
  },
  {
    id: 7,
    name: "Alex Parker",
    title: "Software Engineer",
    image: "/images/dog.png",
    content:
      "The technical implementation behind Andy is impressive. Smart contracts are well-audited and the roadmap is realistic and achievable.",
    verified: true,
  },
  {
    id: 8,
    name: "Rachel Green",
    title: "Social Media Manager",
    image: "/images/dog.png",
    content:
      "Andy's social presence is authentic and engaging. The community grows stronger every day, and the memes are absolutely hilarious!",
    verified: true,
  },
]

export default function InfiniteScrollCards() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const isScrollingRef = useRef(true)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isScrollingRef.current) return
      
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled past the first set of cards
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationRef.current = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      isScrollingRef.current = true
      animationRef.current = requestAnimationFrame(animate)
    }

    const stopAnimation = () => {
      isScrollingRef.current = false
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    // Start initial animation
    startAnimation()

    return () => {
      stopAnimation()
    }
  }, [])

  const handleCardMouseEnter = () => {
    isScrollingRef.current = false
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  const handleCardMouseLeave = () => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    isScrollingRef.current = true
    let scrollPosition = scrollContainer.scrollLeft
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isScrollingRef.current) return
      
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled past the first set of cards
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="pt-24 pb-16  bg-gradient-to-r from-[#85CDC1] via-[#85CDC1] to-[#85CDC1] relative" style={{ overflowX: "hidden", overflowY: "visible" }}>
      {/* Infinite Scrolling Cards Container */}
      <div
        ref={scrollRef}
        className="flex space-x-8"
        style={{
          width: "100%",
          scrollBehavior: "auto",
          overflowX: "hidden",
          overflowY: "visible",
          paddingTop: "48px",
          marginTop: "-48px"
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div 
            key={`${testimonial.id}-${index}`} 
            className="flex-shrink-0 w-72 sm:w-80 md:w-96"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="bg-white pt-16 px-6 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 h-80 sm:h-96 md:h-[420px] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 mx-4 relative" style={{ overflow: "visible" }}>
              {/* Profile Image Container - Positioned on top edge */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 shadow-lg border-4 border-white">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover "
                    priority
                  />
                </div>
                
                {/* Verified Badge */}
                {testimonial.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-teal-500 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Profile Section - Centered */}
              <div className="flex flex-col items-center text-center">

                {/* Verified Text */}
                {testimonial.verified && (
                  <div className="flex items-center justify-center mb-4 mt-4">
                    <svg className="w-4 h-4 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-teal-600">Verified buyer</span>
                  </div>
                )}

                {/* Name */}
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 leading-tight">
                  {testimonial.name}
                </h3>
                
                {/* Title */}
                <p className="text-gray-500 text-sm sm:text-base mb-4 font-medium">
                  {testimonial.title}
                </p>

                {/* Testimonial Content */}
                <div className="text-center flex-1 flex items-center">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light overflow-hidden">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlays for Seamless Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#85CDC1] to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#85CDC1] to-transparent pointer-events-none z-10"></div>
    </section>
  )
}