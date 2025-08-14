"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AndyDog from "@/components/andy-dog";
import ActionButtons from "@/components/action-buttons";
import Journey from "@/components/journey";
import TheCommunity from "@/components/the-community";
import Roadmap from "@/components/road-map";
import BuyAndy from "@/components/buy-andy";
import JoinPawty from "@/components/join-pawty";
import Footer from "@/components/footer";

export default function Home() {
    const andyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (andyRef.current) {
      gsap.fromTo(
        andyRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
          delay: 0.5, onComplete: () => {
            // pusle animation
            gsap.to(andyRef.current, {
              scale: 1.1,
              repeat: -1,
              yoyo: true,
              duration: 0.5,
              ease: "power1.inOut",
            })
          }
        },
      )
    }
  }, [])

  return (
    <div className="h-screen w-screen">
    <Navbar />
    <main className="relative z-10">
       <div className="header h-[100vh] lg:h-[110vh] xl:h-[110vh] 2xl:h-[110vh] bg-cover bg-center bg-no-repeat">
         <Hero andyRef={andyRef} />
       </div>
       <div className="journey">
         <Journey />
       </div>
        <div className="community">
          <TheCommunity />
        </div>
        <div className="roadmap">
          <Roadmap />
        </div>
        <div className="buy-andy">
          <BuyAndy />
        </div>
        <div className="join-pawty">
          <JoinPawty />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}
