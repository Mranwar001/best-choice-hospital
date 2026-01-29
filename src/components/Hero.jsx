export default function Hero({ onConnectDoctor, onRequestVisit }) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-100 px-4 py-2 rounded-full mb-6 shadow-sm">
              <i className="fas fa-award text-yellow-500"></i>
              <span className="text-sm font-semibold">NAFDAC Certified • ISO 9001:2015</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">Advanced Healthcare</span>
              <span className="block hospital-gradient-text">Without Boundaries</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience world-class medical care from anywhere. Connect with specialist doctors online, 
              request private home visits, and access premium healthcare services with just a click.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={onConnectDoctor}
                className="group hospital-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <i className="fas fa-video"></i>
                  <span>Connect with Doctor Now</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </span>
              </button>
              
              <button 
                onClick={onRequestVisit}
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                <span className="flex items-center justify-center space-x-2">
                  <i className="fas fa-home-heart"></i>
                  <span>Request Home Visit</span>
                </span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600 text-sm">Specialist Doctors</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600 text-sm">Online Support</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-teal-600">98%</div>
                <div className="text-gray-600 text-sm">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Medical Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="hospital-gradient rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-heartbeat text-4xl hospital-gradient-text"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Virtual Consultation</h3>
                    <p className="text-white/80 mb-6">Connect with our specialists in minutes</p>
                    
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-white/20 rounded-xl p-4 text-center">
                        <div className="text-white font-bold text-lg">₦5,000</div>
                        <div className="text-white/80 text-sm">Video Consultation</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-4 text-center">
                        <div className="text-white font-bold text-lg">15min</div>
                        <div className="text-white/80 text-sm">Average Wait Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-green-500 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold">HIPAA Compliant</div>
                    <div className="text-sm text-gray-600">Secure & Private</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-bolt text-blue-500 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold">Instant</div>
                    <div className="text-sm text-gray-600">Connection</div>
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