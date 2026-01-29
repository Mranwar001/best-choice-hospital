import { useState } from 'react'

export default function HomeVisit() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    visitDate: '',
    visitTime: '',
    symptoms: '',
    privacyLevel: 'standard'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Home visit requested:', formData)
    alert('Home visit request submitted! Our team will contact you within 30 minutes.')
    setShowForm(false)
    setFormData({
      name: '',
      phone: '',
      address: '',
      visitDate: '',
      visitTime: '',
      symptoms: '',
      privacyLevel: 'standard'
    })
  }

  const privacyLevels = [
    {
      level: 'standard',
      name: 'Standard Visit',
      description: 'Regular home visit with one doctor',
      price: '₦15,000',
      features: ['Doctor consultation', 'Basic checkup', 'Prescription']
    },
    {
      level: 'premium',
      name: 'Premium Visit',
      description: 'Extended visit with specialist',
      price: '₦25,000',
      features: ['Specialist doctor', 'Advanced equipment', 'Follow-up']
    },
    {
      level: 'vip',
      name: 'VIP Visit',
      description: 'Complete private medical team',
      price: '₦50,000',
      features: ['Multiple specialists', 'Lab tests at home', '24/7 support']
    }
  ]

  return (
    <section id="home-visit" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-white/80 text-blue-600 rounded-full text-sm font-semibold mb-4">
            PRIVATE HOME VISIT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Medical Care at Your</span>
            <span className="block hospital-gradient-text">Doorstep</span>
          </h2>
          <p className="text-xl text-gray-600">
            Request private home visits for complete confidentiality and convenience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-user-shield text-blue-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Complete Privacy</h3>
                  <p className="text-gray-600">
                    Your health matters are handled with utmost confidentiality. 
                    Our doctors visit your home with discrete medical equipment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-home-medical text-green-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Home Comfort</h3>
                  <p className="text-gray-600">
                    Receive medical care in the comfort of your home, 
                    reducing stress and promoting faster recovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-clock text-purple-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    Choose your preferred date and time. 
                    Same-day visits available for urgent cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-blue-600">2,500+</div>
                <div className="text-gray-600 text-sm">Home Visits</div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-green-600">45min</div>
                <div className="text-gray-600 text-sm">Avg Response Time</div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-purple-600">₦15M</div>
                <div className="text-gray-600 text-sm">Monthly Revenue</div>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing & Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Pricing Options */}
              <div className="p-8 border-b">
                <h3 className="text-2xl font-bold mb-6">Select Privacy Level</h3>
                <div className="space-y-4">
                  {privacyLevels.map((level) => (
                    <div 
                      key={level.level}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        formData.privacyLevel === level.level 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setFormData({...formData, privacyLevel: level.level})}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-lg">{level.name}</div>
                          <p className="text-gray-600 text-sm">{level.description}</p>
                          <div className="mt-2">
                            {level.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <i className="fas fa-check-circle text-green-500 mr-2 text-xs"></i>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{level.price}</div>
                          <div className="text-gray-500 text-sm">per visit</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Request Button */}
              <div className="p-8">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full hospital-gradient text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  <i className="fas fa-calendar-plus mr-2"></i>
                  Request Home Visit
                </button>
                
                <div className="mt-6 text-center text-gray-600 text-sm">
                  <p><i className="fas fa-shield-alt text-green-500 mr-2"></i> HIPAA Compliant Privacy</p>
                  <p className="mt-2"><i className="fas fa-bolt text-yellow-500 mr-2"></i> Same-day visits available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Request Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Request Home Visit</h3>
                  <button onClick={() => setShowForm(false)} className="text-gray-500">
                    <i className="fas fa-times text-2xl"></i>
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Home Address *</label>
                  <textarea
                    rows="3"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border rounded-lg"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Time</label>
                    <input
                      type="time"
                      className="w-full p-3 border rounded-lg"
                      value={formData.visitTime}
                      onChange={(e) => setFormData({...formData, visitTime: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Symptoms (Optional)</label>
                  <textarea
                    rows="3"
                    className="w-full p-3 border rounded-lg"
                    value={formData.symptoms}
                    onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full hospital-gradient text-white py-3 rounded-lg font-semibold hover:shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}