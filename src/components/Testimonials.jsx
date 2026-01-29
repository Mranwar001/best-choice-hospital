import { useState } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Alhaji Musa Bello",
      role: "Business Executive",
      text: "The telemedicine service saved my business trip. Connected with a cardiologist while in Dubai, got proper consultation without cutting my trip short. Excellent service!",
      rating: 5,
      treatment: "Cardiac Consultation",
      image: "MB"
    },
    {
      id: 2,
      name: "Hajiya Fatima Yusuf",
      role: "Mother of 3",
      text: "Requested home visit for my children's vaccination. The pediatrician came with full equipment and handled my kids with such care. Complete privacy maintained.",
      rating: 5,
      treatment: "Pediatric Home Visit",
      image: "FY"
    },
    {
      id: 3,
      name: "Engr. Ibrahim Suleiman",
      role: "Corporate Client",
      text: "Our company's health program with Best Choice Hospital reduced employee sick days by 40%. The digital platform makes healthcare accessible to all our staff.",
      rating: 5,
      treatment: "Corporate Wellness",
      image: "IS"
    },
    {
      id: 4,
      name: "Dr. Ahmed Kabir",
      role: "Medical Colleague",
      text: "As a doctor, I refer my patients here for complex cases. Their technology and specialist team are unmatched in the region. Truly a center of excellence.",
      rating: 5,
      treatment: "Professional Referral",
      image: "AK"
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-white/80 text-blue-600 rounded-full text-sm font-semibold mb-4">
            PATIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Trusted by</span>
            <span className="block hospital-gradient-text">Thousands of Patients</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from patients who experienced our exceptional care
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                      {/* Left Side - Patient Info */}
                      <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-green-600 p-8 text-white">
                        <div className="flex flex-col items-center h-full justify-center">
                          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                              {testimonial.image}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
                          <p className="text-blue-100 mb-4">{testimonial.role}</p>
                          <div className="flex mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <i key={i} className="fas fa-star text-yellow-300"></i>
                            ))}
                          </div>
                          <div className="px-4 py-2 bg-white/20 rounded-full text-sm">
                            {testimonial.treatment}
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Testimonial Text */}
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-start h-full">
                          <i className="fas fa-quote-left text-4xl text-blue-200 mr-6 mt-2"></i>
                          <div>
                            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                              "{testimonial.text}"
                            </p>
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-gray-600">
                                <i className="fas fa-calendar-check mr-2"></i>
                                <span>Treatment Completed</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <i className="fas fa-thumbs-up mr-2"></i>
                                <span>100% Satisfied</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            >
              <i className="fas fa-chevron-left text-gray-700"></i>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            >
              <i className="fas fa-chevron-right text-gray-700"></i>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Google Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">5,000+</div>
            <div className="text-gray-600">Positive Reviews</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}