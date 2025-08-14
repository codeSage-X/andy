import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "GET A WALLET",
    description: "Download a Solana wallet like Phantom or Sollet to store your $ANDY tokens.",
    image: "/images/carton.png",
    imagePosition: "left"
  },
  {
    id: 2,
    title: "ADD SOL",
    description: "Add some SOL to your wallet to purchase $ANDY. Simply follow the steps provided by your chosen wallet to complete the process.",
    image: "/images/basket.png",
    imagePosition: "right"
  },
  {
    id: 3,
    title: "BUY $ANDY",
    description: "Go to [Exchange Link] or use [Swap Platform] to exchange SOL for $ANDY tokens.",
    image: "/images/house.png",
    imagePosition: "left",
    note: "Make sure to have the right ticker! Here's where you can directly buy some $ANDY"
  }
];

export default function HowToAdopt() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#40868C] via-[#40868C] to-[#40868C]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-piximisa font-black text-5xl sm:text-6xl md:text-7xl text-[#F6EAC7] mb-6 tracking-wide">
            HOW TO ADOPT $ANDY
          </h2>
          <p className="nunito text-xl sm:text-2xl text-[#F6EAC7] max-w-2xl mx-auto leading-relaxed">
            Getting $ANDY is simple! Just follow these easy steps and join the family.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-[#F6EAC7] rounded-none p-8 lg:py-20 xl:py-20 2xl:py-20 shadow-[4px_4px_0px_0px_#003236]">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Content */}
                <div className={`flex-1 text-center md:text-left ${step.imagePosition === "right" ? "order-1 md:order-1" : "order-2 md:order-2"}`}>
                  <div className="mb-4">
                    <span className="font-piximisa font-bold text-lg text-teal-600 tracking-wider">STEP {step.id}</span>
                    <h3 className="font-piximisa font-black text-3xl sm:text-4xl text-teal-600 mt-1">{step.title}</h3>
                  </div>
                  <p className="nunito text-lg text-teal-700 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {step.note && (
                    <div className=" p-4 rounded">
                      <p className="nunito text-sm text-red-700">
                        <span className="font-bold">Note:</span> {step.note}
                      </p>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className={`flex-shrink-0 ${step.imagePosition === "right" ? "order-2 md:order-2" : "order-1 md:order-1"}`}>
                  <div className="w-48 h-32 relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
