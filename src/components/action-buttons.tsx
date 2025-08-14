import { Button } from "@/components/ui/button"

export default function ActionButtons() {
  return (
    <section className="flex flex-col md:mt-30 sm:flex-row justify-center
     items-center gap-6 sm:gap-8 py-8 px-4">
      <Button 
        onClick={() => window.open('https://t.me/realandyonsol', '_blank')}
        className="bg-white hover:bg-gray-50 text-[#E68242] font-piximisa font-bold text-xl px-10 py-6 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 w-full sm:w-auto min-w-[280px]"
      >
        JOIN THE COMMUNITY
      </Button>
      <Button 
        onClick={() => window.open('https://jup.ag/tokens/Ff9aC2oKtHkyP9tit1zQrL6Cd7bFKtx2E8BAbd91Nc7E', '_blank')}
        className="bg-[#E68242] hover:bg-[#D67433] text-white font-piximisa font-bold text-xl px-10 py-6 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 w-full sm:w-auto min-w-[280px]"
      >
        ADOPT YOUR ANDY
      </Button>
    </section>
  )
}
