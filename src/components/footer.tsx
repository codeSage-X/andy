import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16  " style={{ backgroundColor: '#FFEBC8' }}>
      <div className="container mx-auto px-4">
        <div className="flex gap-8 max-w-6xl mx-auto">
          {/* Left Side - Footer img 1 (70% width) */}
          <div className="footer-img1 w-[70%] p-12 bg-[#40868C] flex items-center justify-center min-h-[300px] sm:min-h-[500px] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
            <Image src="/images/weluvandy.png" alt="Footer Image 1" fill style={{ objectFit: 'contain' }} className='px-6' />
          </div>

          {/* Right Side - Footer img 2 (30% width) */}
          <div className="footer-img2 w-[30%] p-8 relative overflow-hidden min-h-[300px] sm:min-h-[500px] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
           
          </div>
        </div>

        {/* Bottom Footer Info */}
        <div className="mt-12 pt-8 text-center">
          {/* Copyright */}
          <div className="mt-8 pt-6 ">
            <p className="nunito text-teal-600">
              © {new Date().getFullYear()} $ANDY Token. All rights reserved. From the streets to the moon! 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
