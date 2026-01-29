import { useState, useEffect } from 'react'

export default function DoctorConnection({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    symptoms: '',
    duration: '',
    severity: 'mild',
    history: '',
    preferences: {
      language: 'english',
      timePreference: 'any',
      doctorGender: 'any'
    }
  })

  const [matchedDoctors, setMatchedDoctors] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [aiRecommendation, setAiRecommendation] = useState('')

  const doctorTypes = [
    { 
      id: 'general', 
      name: 'General Physician', 
      icon: 'fas fa-user-md', 
      wait: '5-10 mins',
      specialties: ['Fever', 'Cough', 'Common Cold', 'Minor Injuries'],
      rating: 4.8,
      experience: '10+ years'
    },
    { 
      id: 'cardio', 
      name: 'Cardiologist', 
      icon: 'fas fa-heart', 
      wait: '15-20 mins',
      specialties: ['Chest Pain', 'High BP', 'Heart Issues', 'Palpitations'],
      rating: 4.9,
      experience: '15+ years'
    },
    { 
      id: 'neuro', 
      name: 'Neurologist', 
      icon: 'fas fa-brain', 
      wait: '15-20 mins',
      specialties: ['Headaches', 'Migraines', 'Dizziness', 'Memory Issues'],
      rating: 4.7,
      experience: '12+ years'
    },
    { 
      id: 'pedia', 
      name: 'Pediatrician', 
      icon: 'fas fa-baby', 
      wait: '10-15 mins',
      specialties: ['Child Fever', 'Vaccination', 'Growth Issues', 'Childcare'],
      rating: 4.9,
      experience: '14+ years'
    },
    { 
      id: 'ortho', 
      name: 'Orthopedic', 
      icon: 'fas fa-bone', 
      wait: '15-20 mins',
      specialties: ['Joint Pain', 'Back Pain', 'Fractures', 'Sports Injuries'],
      rating: 4.6,
      experience: '18+ years'
    },
    { 
      id: 'derma', 
      name: 'Dermatologist', 
      icon: 'fas fa-allergies', 
      wait: '10-15 mins',
      specialties: ['Skin Rashes', 'Acne', 'Allergies', 'Hair Issues'],
      rating: 4.8,
      experience: '11+ years'
    }
  ]

  const availableDoctors = [
    {
      id: 1,
      name: 'Dr. Ahmad Sani',
      specialty: 'Cardiologist',
      experience: '15 years',
      rating: 4.9,
      price: 15000,
      languages: ['English', 'Hausa', 'Arabic'],
      availability: 'Now',
      nextSlot: '15 mins',
      matchScore: 95,
      aiReason: 'Specializes in cardiac issues matching your symptoms'
    },
    {
      id: 2,
      name: 'Dr. Fatima Bello',
      specialty: 'Pediatrician',
      experience: '12 years',
      rating: 4.8,
      price: 12000,
      languages: ['English', 'Hausa', 'French'],
      availability: '30 mins',
      nextSlot: '45 mins',
      matchScore: 88,
      aiReason: 'Excellent with children and fever cases'
    },
    {
      id: 3,
      name: 'Dr. Yusuf Ibrahim',
      specialty: 'Orthopedic',
      experience: '18 years',
      rating: 4.7,
      price: 18000,
      languages: ['English', 'Hausa'],
      availability: 'Now',
      nextSlot: '20 mins',
      matchScore: 92,
      aiReason: 'Expert in joint and bone-related issues'
    }
  ]

  useEffect(() => {
    if (formData.symptoms && step === 2) {
      // AI-powered symptom analysis
      analyzeSymptoms()
      matchDoctors()
    }
  }, [formData.symptoms, step])

  const analyzeSymptoms = () => {
    const symptoms = formData.symptoms.toLowerCase()
    let recommendation = ''
    
    if (symptoms.includes('chest') || symptoms.includes('heart') || symptoms.includes('breath')) {
      recommendation = 'Based on your symptoms, we recommend consulting a Cardiologist. These could be signs of cardiac issues that require specialist attention.'
    } else if (symptoms.includes('head') || symptoms.includes('dizzy') || symptoms.includes('memory')) {
      recommendation = 'Your symptoms suggest neurological concerns. A Neurologist would be best suited to evaluate your condition.'
    } else if (symptoms.includes('child') || symptoms.includes('baby') || symptoms.includes('pediatric')) {
      recommendation = 'For pediatric concerns, our Pediatric specialists are available for consultation.'
    } else if (symptoms.includes('joint') || symptoms.includes('bone') || symptoms.includes('back')) {
      recommendation = 'Orthopedic evaluation recommended for musculoskeletal symptoms.'
    } else {
      recommendation = 'A General Physician can help diagnose and treat your symptoms. For more specific concerns, they may refer you to a specialist.'
    }
    
    setAiRecommendation(recommendation)
  }

  const matchDoctors = () => {
    // AI matching algorithm
    const matched = availableDoctors.map(doctor => {
      let score = 70 // Base score
      
      // Symptom matching
      const symptoms = formData.symptoms.toLowerCase()
      if (doctor.specialty.toLowerCase().includes('cardio') && 
          (symptoms.includes('chest') || symptoms.includes('heart'))) {
        score += 25
      }
      
      if (doctor.specialty.toLowerCase().includes('neuro') && 
          (symptoms.includes('head') || symptoms.includes('dizzy'))) {
        score += 25
      }
      
      // Language preference
      if (doctor.languages.includes(formData.preferences.language)) {
        score += 10
      }
      
      // Availability score
      if (doctor.availability === 'Now') {
        score += 15
      }
      
      // Rating bonus
      score += (doctor.rating - 4) * 10
      
      return { ...doctor, matchScore: Math.min(score, 100) }
    }).sort((a, b) => b.matchScore - a.matchScore)
    
    setMatchedDoctors(matched)
    if (matched.length > 0) {
      setSelectedDoctor(matched[0].id)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Complete connection
      const doctor = availableDoctors.find(d => d.id === selectedDoctor)
      console.log('Doctor connection completed:', {
        patient: formData,
        doctor,
        timestamp: new Date().toISOString(),
        consultationId: 'CON-' + Date.now()
      })
      
      alert(`✅ Connected with ${doctor?.name}! Video consultation link has been sent to your phone.`)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 rounded-t-2xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Connect with Doctor</h2>
              <p className="text-gray-600">AI-powered doctor matching system</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between relative">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= s 
                    ? 'hospital-gradient text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > s ? <i className="fas fa-check"></i> : s}
                </div>
                <span className="text-sm mt-2">{
                  s === 1 ? 'Info' : 
                  s === 2 ? 'Symptoms' : 
                  s === 3 ? 'Match' : 
                  'Confirm'
                }</span>
              </div>
            ))}
            <div className="absolute top-5 left-1/4 right-1/4 h-1 bg-gray-200">
              <div 
                className="h-full hospital-gradient transition-all duration-300"
                style={{ 
                  width: step === 1 ? '0%' : 
                         step === 2 ? '33%' : 
                         step === 3 ? '66%' : '100%' 
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <i className="fas fa-user mr-2 text-blue-600"></i>
                  Patient Information
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Age"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                  <div>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
                      value={formData.gender}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <i className="fas fa-cog mr-2 text-purple-600"></i>
                  Consultation Preferences
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formData.preferences.language}
                      onChange={(e) => setFormData({
                        ...formData, 
                        preferences: {...formData.preferences, language: e.target.value}
                      })}
                    >
                      <option value="english">English</option>
                      <option value="hausa">Hausa</option>
                      <option value="yoruba">Yoruba</option>
                      <option value="igbo">Igbo</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formData.preferences.timePreference}
                      onChange={(e) => setFormData({
                        ...formData, 
                        preferences: {...formData.preferences, timePreference: e.target.value}
                      })}
                    >
                      <option value="any">Any Time</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formData.preferences.doctorGender}
                      onChange={(e) => setFormData({
                        ...formData, 
                        preferences: {...formData.preferences, doctorGender: e.target.value}
                      })}
                    >
                      <option value="any">Any Gender</option>
                      <option value="male">Male Doctor</option>
                      <option value="female">Female Doctor</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <i className="fas fa-exclamation-triangle mr-2 text-red-600"></i>
                  Urgency Level
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { value: 'mild', label: 'Mild', icon: 'fas fa-smile', color: 'bg-blue-100 text-blue-800' },
                    { value: 'moderate', label: 'Moderate', icon: 'fas fa-meh', color: 'bg-yellow-100 text-yellow-800' },
                    { value: 'severe', label: 'Severe', icon: 'fas fa-frown', color: 'bg-orange-100 text-orange-800' },
                    { value: 'emergency', label: 'Emergency', icon: 'fas fa-exclamation-circle', color: 'bg-red-100 text-red-800' }
                  ].map((level) => (
                    <button
                      type="button"
                      key={level.value}
                      className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center ${
                        formData.severity === level.value 
                          ? 'border-blue-500 ' + level.color 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setFormData({...formData, severity: level.value})}
                    >
                      <i className={`${level.icon} text-xl mb-2`}></i>
                      <span className="font-medium">{level.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <i className="fas fa-stethoscope mr-2 text-green-600"></i>
                  Describe Your Symptoms
                </label>
                <textarea
                  rows="4"
                  placeholder="Please describe your symptoms in detail, including: What you're feeling, When it started, How severe it is, Any other relevant information..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 resize-none"
                  value={formData.symptoms}
                  onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Duration</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  >
                    <option value="">How long?</option>
                    <option value="hours">Few hours</option>
                    <option value="days">Few days</option>
                    <option value="weeks">Few weeks</option>
                    <option value="months">Months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Medical History</label>
                  <textarea
                    rows="3"
                    placeholder="Any pre-existing conditions, allergies, or medications?"
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    value={formData.history}
                    onChange={(e) => setFormData({...formData, history: e.target.value})}
                  />
                </div>
              </div>

              {aiRecommendation && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start">
                    <i className="fas fa-robot text-blue-600 text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">AI Analysis</h4>
                      <p className="text-blue-700">{aiRecommendation}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Symptom Checker */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-bold mb-3">Common Symptoms</h4>
                <div className="flex flex-wrap gap-2">
                  {['Fever', 'Cough', 'Headache', 'Fatigue', 'Nausea', 'Pain', 'Dizziness', 'Rash'].map(symptom => (
                    <button
                      key={symptom}
                      type="button"
                      className="px-3 py-2 bg-white border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      onClick={() => setFormData({
                        ...formData, 
                        symptoms: formData.symptoms ? `${formData.symptoms}, ${symptom}` : symptom
                      })}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-slide-up">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-md text-2xl text-blue-600 mr-3"></i>
                  <div>
                    <h3 className="text-xl font-bold">AI-Matched Doctors</h3>
                    <p className="text-gray-600">Based on your symptoms and preferences</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {matchedDoctors.map((doctor) => (
                    <div 
                      key={doctor.id}
                      className={`bg-white rounded-xl p-4 border-2 transition-all cursor-pointer hover:shadow-md ${
                        selectedDoctor === doctor.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedDoctor(doctor.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                            {doctor.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{doctor.name}</h4>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                                {doctor.specialty}
                              </span>
                              <div className="flex items-center">
                                <i className="fas fa-star text-yellow-500 mr-1"></i>
                                <span>{doctor.rating}</span>
                              </div>
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center">
                                <i className="fas fa-clock text-gray-400 mr-2"></i>
                                <span>Available: {doctor.availability}</span>
                              </div>
                              <div className="flex items-center">
                                <i className="fas fa-language text-gray-400 mr-2"></i>
                                <span>{doctor.languages.join(', ')}</span>
                              </div>
                              <div className="text-green-600 font-medium">
                                <i className="fas fa-brain mr-1"></i>
                                AI Match: {doctor.matchScore}% - {doctor.aiReason}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600 mb-2">
                            ₦{doctor.price.toLocaleString()}
                          </div>
                          {selectedDoctor === doctor.id && (
                            <div className="text-green-600 text-sm font-medium">
                              <i className="fas fa-check-circle mr-1"></i>
                              Selected
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Warning */}
              {formData.severity === 'emergency' && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-triangle text-red-500 text-xl mr-3"></i>
                    <div>
                      <h4 className="font-bold text-red-800">Emergency Detected!</h4>
                      <p className="text-red-600">
                        Based on your symptoms and urgency level, we recommend immediate attention. 
                        Call our emergency line: <strong>0802-718-3558</strong>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-slide-up">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <i className="fas fa-check-circle text-green-500 text-3xl"></i>
                  <div>
                    <h3 className="font-bold text-green-800">Ready to Connect!</h3>
                    <p className="text-green-600">Review your consultation details</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Patient Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-semibold">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-semibold">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Urgency:</span>
                        <span className={`font-semibold ${
                          formData.severity === 'emergency' ? 'text-red-600' :
                          formData.severity === 'severe' ? 'text-orange-600' :
                          formData.severity === 'moderate' ? 'text-yellow-600' :
                          'text-blue-600'
                        }`}>
                          {formData.severity.charAt(0).toUpperCase() + formData.severity.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">Doctor Information</h4>
                    {(() => {
                      const doctor = availableDoctors.find(d => d.id === selectedDoctor)
                      return doctor ? (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Doctor:</span>
                            <span className="font-semibold">{doctor.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Specialty:</span>
                            <span className="font-semibold">{doctor.specialty}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Experience:</span>
                            <span className="font-semibold">{doctor.experience}</span>
                          </div>
                        </div>
                      ) : null
                    })()}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-4">Consultation Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Video Consultation Fee:</span>
                    <span className="font-semibold">₦5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doctor Fee:</span>
                    <span className="font-semibold">₦10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee:</span>
                    <span className="font-semibold">₦500</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-blue-600">₦15,500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-info-circle text-yellow-500 text-xl mt-1"></i>
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-2">Important Notes:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Consultation link will be sent via SMS and WhatsApp</li>
                      <li>Duration: 20-30 minutes</li>
                      <li>E-prescription will be available after consultation</li>
                      <li>24/7 follow-up support available</li>
                      <li>Emergency support: 0802-718-3558</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="sticky bottom-0 bg-white pt-6 border-t">
            <div className="flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back
                </button>
              )}
              
              <button
                type="submit"
                className={`ml-auto ${step === 1 ? 'w-full' : ''} hospital-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105`}
              >
                {step === 4 ? (
                  <>
                    <i className="fas fa-video mr-2"></i>
                    Connect Now (₦15,500)
                  </>
                ) : (
                  <>
                    Continue
                    <i className="fas fa-arrow-right ml-2"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}