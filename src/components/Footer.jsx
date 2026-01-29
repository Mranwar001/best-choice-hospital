export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Hospital Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 hospital-gradient rounded-xl flex items-center justify-center animate-float">
                <i className="fas fa-heart-pulse text-white"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold">Best Choice Specialist Hospital</h2>
                <p className="text-gray-400 text-sm">Excellence in Healthcare Since 2010</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Providing exceptional medical care with compassion, innovation, 
              and excellence. Your trusted healthcare partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#doctor-connect" className="text-gray-400 hover:text-white transition-colors">Connect Doctor</a></li>
              <li><a href="#home-visit" className="text-gray-400 hover:text-white transition-colors">Home Visit</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#evidence" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Telemedicine</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Visits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Specialist Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Checkups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lab Services</a></li>
            </ul>
          </div>

          {/* Column 4 - Emergency Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-6">Emergency Contacts</h3>
            <div className="space-y-4">
              <div>
                <div className="text-red-400 font-semibold">Emergency Hotline</div>
                <div className="text-gray-400">0802-718-3558</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold">WhatsApp Support</div>
                <div className="text-gray-400">+234 802 718 3558</div>
              </div>
              <div>
                <div className="text-blue-400 font-semibold">Email</div>
                <div className="text-gray-400">emergency@bestchoicehospital.com</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <div className="text-sm text-gray-400">Operating Hours</div>
              <div className="text-white font-medium">24/7 Emergency Services</div>
              <div className="text-gray-400 text-sm">OPD: 8AM - 8PM Daily</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Best Choice Specialist Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}