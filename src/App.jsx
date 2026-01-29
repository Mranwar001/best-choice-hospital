import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DoctorConnection from './components/DoctorConnection'
import HomeVisit from './components/HomeVisit'
import PaymentSection from './components/PaymentSection'
import HospitalWork from './components/HospitalWork'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showPayment, setShowPayment] = useState(false)
  const [showDoctorConnect, setShowDoctorConnect] = useState(false)
  const [showEmergency, setShowEmergency] = useState(false)
  const [notification, setNotification] = useState(null)

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 5000)
  }

  return (
    <div className="min-h-screen">
      <Header 
        onBookAppointment={() => setShowDoctorConnect(true)}
        onMakePayment={() => setShowPayment(true)}
        onEmergency={() => setShowEmergency(true)}
      />
      <Hero 
        onConnectDoctor={() => setShowDoctorConnect(true)}
        onRequestVisit={() => {
          showNotification('Home visit request form opened!', 'success')
          // Open home visit form
        }}
        onEmergency={() => setShowEmergency(true)}
      />
      <DoctorConnection 
        isOpen={showDoctorConnect}
        onClose={() => setShowDoctorConnect(false)}
        onPaymentSuccess={() => {
          showNotification('Payment successful! Connecting you with doctor...', 'success')
          setShowPayment(true)
        }}
      />
      <HomeVisit 
        onRequestSubmitted={() => {
          showNotification('Home visit request submitted successfully!', 'success')
        }}
      />
      <PaymentSection 
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onPaymentComplete={(amount, method) => {
          showNotification(`Payment of ₦${amount} via ${method} completed! Receipt sent.`, 'success')
        }}
      />
      <HospitalWork />
      <Testimonials />
      <Contact 
        onMessageSent={() => {
          showNotification('Message sent successfully! We will contact you soon.', 'success')
        }}
      />
      <Footer />

      {/* Notification System */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg animate-slide-up ${
          notification.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' :
          notification.type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
          'bg-blue-100 text-blue-800 border border-blue-200'
        }`}>
          <div className="flex items-center">
            <i className={`fas ${
              notification.type === 'success' ? 'fa-check-circle' :
              notification.type === 'error' ? 'fa-exclamation-circle' :
              'fa-info-circle'
            } mr-3`}></i>
            <div>
              <p className="font-medium">{notification.message}</p>
              <button 
                onClick={() => setNotification(null)}
                className="text-sm opacity-75 hover:opacity-100 mt-1"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Modal */}
      {showEmergency && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="bg-red-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-ambulance text-2xl"></i>
                  <div>
                    <h2 className="text-2xl font-bold">EMERGENCY</h2>
                    <p className="text-red-100">Immediate Medical Assistance</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowEmergency(false)}
                  className="text-white hover:text-gray-200"
                >
                  <i className="fas fa-times text-2xl"></i>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="text-center mb-8">
                <i className="fas fa-exclamation-triangle text-red-500 text-6xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Medical Emergency?</h3>
                <p className="text-gray-600">Call our emergency line immediately</p>
              </div>

              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-red-800">Emergency Hotline</div>
                      <div className="text-red-600">Available 24/7</div>
                    </div>
                    <a 
                      href="tel:08027183558"
                      className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700"
                    >
                      <i className="fas fa-phone mr-2"></i>
                      CALL NOW
                    </a>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-2xl font-bold text-gray-800">0802-718-3558</div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-green-800">WhatsApp Emergency</div>
                      <div className="text-green-600">For urgent messages</div>
                    </div>
                    <a 
                      href="https://wa.me/2348027183558"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700"
                    >
                      <i className="fab fa-whatsapp mr-2"></i>
                      MESSAGE NOW
                    </a>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-gray-800">+234 802 718 3558</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <button 
          onClick={() => setShowDoctorConnect(true)}
          className="hospital-gradient text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group relative"
        >
          <i className="fas fa-video text-xl"></i>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Connect Doctor
          </div>
        </button>
        <button 
          onClick={() => setShowPayment(true)}
          className="bg-green-500 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group relative"
        >
          <i className="fas fa-credit-card text-xl"></i>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Make Payment
          </div>
        </button>
        <a 
          href="tel:08027183558"
          className="bg-red-500 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group relative"
        >
          <i className="fas fa-phone text-xl"></i>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Emergency Call
          </div>
        </a>
      </div>
    </div>
  )
}

export default App