import { useState } from 'react'

export default function Header({ onBookAppointment, onMakePayment }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home', icon: 'fas fa-home' },
    { name: 'Connect Doctor', href: '#doctor-connect', icon: 'fas fa-video' },
    { name: 'Home Visit', href: '#home-visit', icon: 'fas fa-home-heart' },
    { name: 'Services', href: '#services', icon: 'fas fa-stethoscope' },
    { name: 'Evidence', href: '#evidence', icon: 'fas fa-chart-line' },
    { name: 'Testimonials', href: '#testimonials', icon: 'fas fa-comment-medical' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-phone' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo - Make responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 hospital-gradient rounded-xl flex items-center justify-center animate-float">
              <i className="fas fa-heart-pulse text-white text-lg sm:text-2xl"></i>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                Best Choice <span className="hospital-gradient-text hidden xs:inline">Specialist</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden xs:block">Hospital & Research Center</p>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 xl:space-x-2 text-gray-700 hover:text-blue-600 transition-colors group text-sm xl:text-base"
              >
                <i className={`${item.icon} text-base group-hover:scale-110 transition-transform`}></i>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            
            {/* Action Buttons - Condensed for medium screens */}
            <div className="flex items-center space-x-2 xl:space-x-4 ml-4 xl:ml-6">
              <button 
                onClick={onBookAppointment}
                className="hospital-gradient text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all shadow-lg text-sm xl:text-base whitespace-nowrap"
              >
                <i className="fas fa-video mr-1 xl:mr-2"></i>
                <span className="hidden xl:inline">Connect Doctor</span>
                <span className="xl:hidden">Connect</span>
              </button>
              
              <button 
                onClick={onMakePayment}
                className="border-2 border-green-500 text-green-600 px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all text-sm xl:text-base whitespace-nowrap"
              >
                <i className="fas fa-credit-card mr-1 xl:mr-2"></i>
                <span className="hidden xl:inline">Make Payment</span>
                <span className="xl:hidden">Pay</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button - FIXED POSITION */}
          <button
            className="lg:hidden text-gray-700 relative z-50 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl sm:text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu - Improved with max height and scrolling */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[73px] sm:top-[77px] bg-white/95 backdrop-blur-md border-t shadow-xl animate-slide-up z-40 max-h-[calc(100vh-73px)] overflow-y-auto">
            <div className="container-custom py-4 sm:py-6">
              <div className="flex flex-col space-y-2 sm:space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 py-3 px-4 hover:bg-blue-50 rounded-xl transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className={`${item.icon} text-lg w-6 text-blue-600`}></i>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
                
                <div className="pt-4 mt-2 border-t border-gray-200 space-y-3 px-4">
                  <button 
                    onClick={() => { onBookAppointment(); setIsMenuOpen(false); }}
                    className="w-full hospital-gradient text-white py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 text-base"
                  >
                    <i className="fas fa-video"></i>
                    <span>Connect Doctor</span>
                  </button>
                  
                  <button 
                    onClick={() => { onMakePayment(); setIsMenuOpen(false); }}
                    className="w-full border-2 border-green-500 text-green-600 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center space-x-2 text-base"
                  >
                    <i className="fas fa-credit-card"></i>
                    <span>Make Payment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
