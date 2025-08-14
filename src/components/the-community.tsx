import { ChevronDown } from "lucide-react"
import InfiniteScrollCards from "./infinite-scroll"


export default function Community() {
  return (
    <section className="py-0  bg-gradient-to-r from-[#85CDC1] via-[#85CDC1] to-[#85CDC1] "> 
      <div className="  py-4 backdrop-blur-sm  shadow-lg">
    
        <div className="text-center">
          <h2 className="font-piximisa font-bold text-2xl sm:text-4xl md:text-3xl text-white flex items-center justify-center gap-6">
            <span className="text-white">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </span>
            <span className="tracking-wider">{"Our Community"}</span>
            <span className="text-white">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </span>
          </h2>
        </div>

      
      </div>

      <div className="community h-[100vh]">

      </div>
      <div>
        <InfiniteScrollCards/>
      </div>
     
    </section>
  )
}
