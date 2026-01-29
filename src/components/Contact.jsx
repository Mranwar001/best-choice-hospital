import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will contact you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            CONTACT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Get In Touch</span>
            <span className="block hospital-gradient-text">With Our Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            We're here to help you 24/7. Reach out for any inquiries or support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Emergency Hotline</h4>
                    <p className="text-gray-600 text-lg font-medium">0802-718-3558</p>
                    <p className="text-gray-500 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">WhatsApp Support</h4>
                    <p className="text-gray-600 text-lg font-medium">+234 802 718 3558</p>
                    <p className="text-gray-500 text-sm">Instant messaging for non-emergencies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email Address</h4>
                    <p className="text-gray-600">info@bestchoicehospital.com</p>
                    <p className="text-gray-600">support@bestchoicehospital.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Hospital Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Plot 52, Tudun Yola C Road<br />
                      Rijiyar Zaki, Kano, Nigeria 700241
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-6">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 text-white rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500"
                    placeholder="0802 718 3558"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <select
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option value="">Select a subject</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="telemedicine">Telemedicine Query</option>
                  <option value="home-visit">Home Visit Request</option>
                  <option value="billing">Billing Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Your Message *</label>
                <textarea
                  rows="5"
                  required
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:border-blue-500 resize-none"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <button
                type="submit"
                className="w-full hospital-gradient text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all hover:scale-105"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}