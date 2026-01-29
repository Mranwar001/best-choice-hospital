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
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 hospital-gradient rounded-xl flex items-center justify-center animate-float">
              <i className="fas fa-heart-pulse text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Best Choice <span className="hospital-gradient-text">Specialist</span>
              </h1>
              <p className="text-sm text-gray-600">Hospital & Research Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <i className={`${item.icon} text-lg group-hover:scale-110 transition-transform`}></i>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4 ml-6">
              <button 
                onClick={onBookAppointment}
                className="hospital-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all shadow-lg"
              >
                <i className="fas fa-video mr-2"></i>
                Connect Doctor
              </button>
              
              <button 
                onClick={onMakePayment}
                className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all"
              >
                <i className="fas fa-credit-card mr-2"></i>
                Make Payment
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 py-2 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </a>
              ))}
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={() => { onBookAppointment(); setIsMenuOpen(false); }}
                  className="w-full hospital-gradient text-white py-3 rounded-lg font-semibold"
                >
                  <i className="fas fa-video mr-2"></i>
                  Connect Doctor
                </button>
                
                <button 
                  onClick={() => { onMakePayment(); setIsMenuOpen(false); }}
                  className="w-full border-2 border-green-500 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white"
                >
                  <i className="fas fa-credit-card mr-2"></i>
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}