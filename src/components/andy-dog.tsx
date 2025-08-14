import Image from "next/image"

export default function AndyDog() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-48 sm:h-56 md:h-64 lg:h-100">
      <Image 
        src="/images/andy.png" 
        alt="Andy Dog" 
        width={400} 
        height={400} 
        className="andy-img object-contain w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-172 lg:h-100 lg:mt-20"
      />
    </div>
  )
}
