"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import Image from "next/image"

const faqData = [
  {
    id: 1,
    question: "What is $ANDY",
    answer:
      "$ANDY is a meme coin running on the Solana blockchain, inspired by a stray dog with a mission to raise awareness for pets in need. It's not just a token; it's a community-driven movement where adopters, holders, and supporters both pets and a fun, vibrant, growing community.",
  },
  {
    id: 2,
    question: "How can I buy $ANDY?",
    answer:
      "You can buy $ANDY by following our simple 3-step process: 1) Get a Solana wallet like Phantom, 2) Add SOL to your wallet, 3) Use a DEX like Jupiter or Raydium to swap SOL for $ANDY tokens. Make sure you have the correct contract address!",
  },
  {
    id: 3,
    question: "What makes $ANDY different from other meme coins?",
    answer:
      "$ANDY stands out because of our strong community focus on animal welfare and rescue. We're not just about profits - we're building a movement that gives back to shelters and helps stray animals find homes. Plus, our roadmap includes real utility and partnerships with animal welfare organizations.",
  },
  {
    id: 4,
    question: "Is $ANDY just for crypto enthusiasts?",
    answer:
      "Not at all! While $ANDY is built on blockchain technology, our community welcomes everyone who loves dogs and wants to make a positive impact. Whether you're a crypto veteran or completely new to digital assets, our community will help you learn and participate in Andy's journey to the moon!",
  },
  {
    id: 5,
    question: "What can I do with $ANDY tokens?",
    answer:
      "Beyond holding and trading, $ANDY tokens will have multiple utilities including: voting on community decisions, accessing exclusive NFT drops, participating in charity events, earning rewards through staking, and getting priority access to future partnerships and collaborations.",
  },
]

export default function JoinPawty() {
  const [openFaq, setOpenFaq] = useState<number>(1) // First FAQ is open by default

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? 0 : id)
  }

  return (
    <section id="faqs" className="py-16" style={{ backgroundColor: '#FFEBC8' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Join The Paw-ty Header */}
        <div className="text-center mb-12">
           <Image
             src="/images/joinPaw.png"
             alt="Join The Paw-ty"
             width={500}
             height={300}
             style={{ width: "100%", height: "auto" }}
           />
         
          <p className="nunito text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Now you&apos;re part of the $ANDY family! Join us on Telegram, Twitter, or Discord to connect with other
            adopters.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-16">
            {/* Twitter/X */}
            <a
              href="https://x.com/realandyonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-28 h-28 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
              style={{ backgroundColor: '#40868C' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2c5f63'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#40868C'}
            >
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/realandyonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-28 h-28 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
              style={{ backgroundColor: '#40868C' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2c5f63'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#40868C'}
            >
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>

        {/* FAQS Section */}
        <div className="text-center mb-8">
          <h3 className="font-piximisa font-black text-4xl sm:text-5xl text-black">FAQS</h3>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-200" style={{ backgroundColor: '#40868C' }}>
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2c5f63'
                  const divElem = e.currentTarget.closest('div');
                  if (divElem) {
                    divElem.style.transform = 'translate(2px, 2px)';
                    divElem.style.boxShadow = '2px 2px 0px 0px rgba(0,0,0,1)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  const divElem = e.currentTarget.closest('div');
                  if (divElem) {
                    divElem.style.transform = 'translate(0px, 0px)';
                    divElem.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,1)';
                  }
                }}
              >
                <span className="nunito font-bold text-lg text-white">{faq.question}</span>
                <div className="flex-shrink-0 ml-4">
                  {openFaq === faq.id ? (
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <X className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </button>
              {openFaq === faq.id && (
                <div className="px-6 pb-6" style={{ backgroundColor: '#40868C' }}>
                  <div className="pt-2" style={{ borderColor: '#2c5f63' }}>
                    <p className="nunito text-white leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
