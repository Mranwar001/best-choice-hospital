export default function Hero({ onConnectDoctor, onRequestVisit }) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      
      {/* Animated Background Elements - Reduced size on mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in px-4 sm:px-6 lg:px-0">
            {/* Badge - Mobile friendly */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
              <i className="fas fa-award text-yellow-500 text-xs sm:text-sm"></i>
              <span className="text-xs sm:text-sm font-semibold">NAFDAC Certified • ISO 9001:2015</span>
            </div>

            {/* Main Heading - Responsive text sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gray-800 block">Advanced Healthcare</span>
              <span className="block hospital-gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2">Without Boundaries</span>
            </h1>

            {/* Subheading - Smaller on mobile */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Experience world-class medical care from anywhere. Connect with specialist doctors online, 
              request private home visits, and access premium healthcare services with just a click.
            </p>

            {/* CTA Buttons - Stack on mobile, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button 
                onClick={onConnectDoctor}
                className="group hospital-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <i className="fas fa-video text-sm sm:text-base"></i>
                  <span>Connect with Doctor Now</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform text-sm sm:text-base"></i>
                </span>
              </button>
              
              <button 
                onClick={onRequestVisit}
                className="group border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-600 hover:text-white transition-all w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <i className="fas fa-home-heart text-sm sm:text-base"></i>
                  <span>Request Home Visit</span>
                </span>
              </button>
            </div>

            {/* Quick Stats - Adjust grid for mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center p-2 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Specialist Doctors</div>
              </div>
              <div className="text-center p-2 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Online Support</div>
              </div>
              <div className="text-center p-2 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Medical Illustration - Hide on mobile, show on tablet/desktop */}
          <div className="relative animate-slide-up hidden md:block">
            <div className="relative">
              <div className="hospital-gradient rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6">
                      <i className="fas fa-heartbeat text-2xl md:text-3xl lg:text-4xl hospital-gradient-text"></i>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-4">Virtual Consultation</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4 md:mb-6">Connect with our specialists in minutes</p>
                    
                    <div className="grid grid-cols-2 gap-2 md:gap-4 w-full">
                      <div className="bg-white/20 rounded-lg md:rounded-xl p-2 md:p-4 text-center">
                        <div className="text-white font-bold text-sm md:text-base lg:text-lg">₦5,000</div>
                        <div className="text-white/80 text-xs md:text-sm">Video Consultation</div>
                      </div>
                      <div className="bg-white/20 rounded-lg md:rounded-xl p-2 md:p-4 text-center">
                        <div className="text-white font-bold text-sm md:text-base lg:text-lg">15min</div>
                        <div className="text-white/80 text-xs md:text-sm">Average Wait Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Hide on mobile, show on larger screens */}
              <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-xl animate-float hidden sm:block">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-green-500 text-sm md:text-base lg:text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-xs md:text-sm">HIPAA Compliant</div>
                    <div className="text-xs text-gray-600">Secure & Private</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-xl animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-bolt text-blue-500 text-sm md:text-base lg:text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-xs md:text-sm">Instant</div>
                    <div className="text-xs text-gray-600">Connection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
