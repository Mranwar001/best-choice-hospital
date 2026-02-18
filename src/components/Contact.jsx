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
                    <p className="text-gray-600 text-lg font-medium">0803 659 6328</p>
                    <p className="text-gray-500 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">WhatsApp Support</h4>
                    <p className="text-gray-600 text-lg font-medium">+234 803 659 6328</p>
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
                      No 114A Hassan Suleiman Street<br />
                      off Ribadu Road, Hausawa<br />
                      Kano 700101, Kano
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-6">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="                                                                                                                                                    
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="                                                                                                                                
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="                                                                                                                                                 
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* ... form code remains unchanged ... */}
        </div>
      </div>
    </section>
  )
}
