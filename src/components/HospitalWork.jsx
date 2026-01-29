import { useState } from 'react'

export default function HospitalWork() {
  const [activeTab, setActiveTab] = useState('achievements')

  const achievements = [
    { year: '2023', title: 'ISO 9001:2015 Certified', description: 'Quality management system certification', icon: 'fas fa-award' },
    { year: '2023', title: '5000+ Surgeries', description: 'Successful surgical procedures', icon: 'fas fa-procedures' },
    { year: '2022', title: 'Best Hospital Award', description: 'National healthcare excellence award', icon: 'fas fa-trophy' },
    { year: '2022', title: 'Telemedicine Launch', description: 'Digital healthcare platform launch', icon: 'fas fa-video' },
    { year: '2021', title: 'Cardiac Center', description: 'Advanced cardiac care unit', icon: 'fas fa-heart' },
    { year: '2020', title: 'COVID Response', description: 'Pandemic response excellence', icon: 'fas fa-shield-virus' },
  ]

  const successCases = [
    { id: 1, title: 'Complex Cardiac Surgery', specialty: 'Cardiology', outcome: 'Full Recovery', patient: '65-year-old male', image: 'CS' },
    { id: 2, title: 'Brain Tumor Removal', specialty: 'Neurology', outcome: 'Successful', patient: '42-year-old female', image: 'BT' },
    { id: 3, title: 'Joint Replacement', specialty: 'Orthopedics', outcome: 'Improved Mobility', patient: '58-year-old male', image: 'JR' },
    { id: 4, title: 'High-risk Pregnancy', specialty: 'Gynecology', outcome: 'Safe Delivery', patient: '34-year-old female', image: 'HP' },
  ]

  const stats = [
    { value: '50,000+', label: 'Patients Treated', icon: 'fas fa-user-injured', color: 'text-blue-600' },
    { value: '10,000+', label: 'Successful Surgeries', icon: 'fas fa-procedures', color: 'text-green-600' },
    { value: '98%', label: 'Success Rate', icon: 'fas fa-chart-line', color: 'text-purple-600' },
    { value: '24/7', label: 'Emergency Service', icon: 'fas fa-ambulance', color: 'text-red-600' },
  ]

  return (
    <section id="evidence" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            OUR WORK & EVIDENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Excellence in</span>
            <span className="block hospital-gradient-text">Healthcare Delivery</span>
          </h2>
          <p className="text-xl text-gray-600">
            Proven track record of successful treatments and medical achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`text-4xl mb-4 ${stat.color}`}>
                  <i className={stat.icon}></i>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'achievements'
                  ? 'hospital-gradient text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className="fas fa-trophy mr-2"></i>
              Achievements
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'cases'
                  ? 'hospital-gradient text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className="fas fa-file-medical mr-2"></i>
              Success Cases
            </button>
            <button
              onClick={() => setActiveTab('technology')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'technology'
                  ? 'hospital-gradient text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className="fas fa-microscope mr-2"></i>
              Technology
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <i className={`${achievement.icon} text-blue-600 text-xl`}></i>
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-2">
                        {achievement.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cases' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successCases.map((caseItem) => (
                <div 
                  key={caseItem.id}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                            {caseItem.specialty}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            {caseItem.outcome}
                          </span>
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                        {caseItem.image}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-user mr-2"></i>
                        <span>Patient: {caseItem.patient}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-calendar-check mr-2"></i>
                        <span>Treatment completed successfully</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span><i className="fas fa-clock mr-1"></i> Confidential case</span>
                        <span><i className="fas fa-check-circle text-green-500 mr-1"></i> Verified outcome</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'technology' && (
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Advanced Medical Technology</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <i className="fas fa-robot text-blue-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Robotic Surgery</h4>
                        <p className="text-gray-600">Precision surgical systems for complex procedures</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <i className="fas fa-magnet text-purple-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">3T MRI Scanner</h4>
                        <p className="text-gray-600">High-resolution imaging for accurate diagnostics</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <i className="fas fa-brain text-green-600 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">AI Diagnostics</h4>
                        <p className="text-gray-600">Artificial intelligence assisted diagnosis</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold mb-4">Technology Investment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Tech Budget:</span>
                        <span className="font-bold">₦500 Million</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Equipment Upgrade:</span>
                        <span className="font-bold">Every 3 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Research Partnerships:</span>
                        <span className="font-bold">15+ Universities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}