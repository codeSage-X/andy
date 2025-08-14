// import Image from "next/image"
import AndyDog from "./andy-dog"
import ActionButtons from "./action-buttons";

interface HeroProps {
  andyRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Hero({ andyRef }: HeroProps) {
  return (
    <section 
      className="hero-custom-text1  text-center py-8 px-4  min-h-[100%] w-full max-w-4xl mx-auto flex flex-col justify-center relative"
    
    >
    {/* Andy Dog - Standalone Animated Element */}
        <div ref={andyRef} className="flex flex-col justify-center items-center">
          <AndyDog />
           
        </div>
        <ActionButtons />
    </section>
  )
}
