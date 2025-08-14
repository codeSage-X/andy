"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronUp } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    closeMobileMenu()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setShowBackToTop(scrollPercentage > 20) // Show after 20% scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-6 md:px-20 z-50 bg-gradient-to-r from-[#85CDC1] via-[#85CDC1] to-[#85CDC1] backdrop-blur-sm shadow-lg">
        <div className="flex items-center">
          <div className="">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="object-contain w-12 h-12 bg-white rounded-full flex items-center justify-center "
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('andys-journey')}
            className="text-white font-piximisa font-bold text-lg hover:text-[#E68242] transition-colors"
          >
            ANDY&apos;S JOURNEY
          </button>
          <button
            onClick={() => scrollToSection('roadmap')}
            className="text-white font-piximisa font-bold text-lg hover:text-[#E68242] transition-colors"
          >
            ROADMAP
          </button>
          <button 
            onClick={() => scrollToSection('faqs')}
            className="text-white font-piximisa font-bold text-lg hover:text-[#E68242] transition-colors"
          >
            FAQS
          </button>
          <Button 
            onClick={() => window.open('https://jup.ag/tokens/Ff9aC2oKtHkyP9tit1zQrL6Cd7bFKtx2E8BAbd91Nc7E', '_blank')}
            className="bg-[#E68242] hover:bg-[#D67433] text-white font-piximisa font-bold px-8 py-6 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-xl"
          >
            BUY $ANDY
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            onClick={toggleMobileMenu}
            className="bg-[#E68242] hover:bg-[#D67433] text-white font-piximisa font-bold px-4 py-2 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center gap-2"
          >
            {/* <Menu size={20} /> */}
            MENU
          </Button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-20 z-40 md:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: '#85CDC1' }}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          <div className="flex items-center gap-3">
            <div className="">
              <Image 
                src="/images/logo.png" 
                alt="Logo" 
                width={24} 
                height={24} 
                className="object-contain w-10 h-10 bg-transparent rounded-full flex items-center justify-center shadow-lg"
              />
            </div>
            <span className="text-white font-piximisa font-bold text-xl">ANDY</span>
          </div>
          <Button
            onClick={closeMobileMenu}
            className="bg-transparent hover:bg-gray-200 text-white p-2 rounded-none "
          >
            <X size={30} />
          </Button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col p-6 space-y-6">
          {/* Navigation Links */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('andys-journey')}
              className="block w-full text-left text-white font-piximisa font-bold text-xl py-3 px-4 rounded-none hover:bg-gray-200 transition-colors border-2 border-transparent hover:border-gray-400"
            >
              ANDY&apos;S JOURNEY
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="block w-full text-left text-white font-piximisa font-bold text-xl py-3 px-4 rounded-none hover:bg-gray-200 transition-colors border-2 border-transparent hover:border-gray-400"
            >
              ROADMAP
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="block w-full text-left text-white font-piximisa font-bold text-xl py-3 px-4 rounded-none hover:bg-gray-200 transition-colors border-2 border-transparent hover:border-gray-400"
            >
              FAQS
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-4"></div>

          {/* Buy Andy Button */}
          <Button
            onClick={() => {
              closeMobileMenu();
              window.open('https://jup.ag/tokens/Ff9aC2oKtHkyP9tit1zQrL6Cd7bFKtx2E8BAbd91Nc7E', '_blank');
            }}
            className="w-full bg-[#E68242] hover:bg-[#D67433] text-white font-piximisa font-bold text-xl px-8 py-8 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            BUY $ANDY
          </Button>

          {/* Additional Mobile-Only Content */}
          <div className="mt-8 pt-6 border-t border-gray-300">
            <div className="text-center">
              <p className="text-white font-piximisa text-lg mb-4">Join Andy&apos;s Adventure!</p>
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-[#40868C] hover:bg-[#2c5f63] text-white rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 z-40 flex items-center justify-center ${
          showBackToTop 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
        style={{
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <ChevronUp size={24} />
      </Button>
    </>
  )
}