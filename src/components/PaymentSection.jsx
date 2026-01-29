import { useState, useEffect } from 'react'

export default function PaymentSection({ isOpen, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState('remita')
  const [paymentStep, setPaymentStep] = useState(1)
  const [receiptMethod, setReceiptMethod] = useState(['email', 'sms'])
  const [paymentStatus, setPaymentStatus] = useState('pending')
  const [transactionId, setTransactionId] = useState('')
  const [remitaData, setRemitaData] = useState({
    rrr: '',
    amount: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceTypeId: '',
    description: ''
  })

  const services = [
    { id: 1, name: 'Video Consultation', price: 5000, serviceTypeId: '4430731' },
    { id: 2, name: 'Home Visit (Standard)', price: 15000, serviceTypeId: '4430732' },
    { id: 3, name: 'Lab Test Package', price: 8000, serviceTypeId: '4430733' },
    { id: 4, name: 'Health Checkup', price: 25000, serviceTypeId: '4430734' },
    { id: 5, name: 'Emergency Response', price: 35000, serviceTypeId: '4430735' }
  ]

  const [selectedServices, setSelectedServices] = useState([1])

  // Generate transaction ID on component mount
  useEffect(() => {
    if (isOpen) {
      const txId = 'TX-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase()
      setTransactionId(txId)
    }
  }, [isOpen])

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(serviceId => serviceId !== id))
    } else {
      setSelectedServices([...selectedServices, id])
    }
  }

  const calculateTotal = () => {
    const subtotal = selectedServices.reduce((total, id) => {
      const service = services.find(s => s.id === id)
      return total + (service?.price || 0)
    }, 0)
    
    const vat = subtotal * 0.075 // 7.5% VAT
    const platformFee = 500
    return {
      subtotal,
      vat: Math.round(vat),
      platformFee,
      total: subtotal + Math.round(vat) + platformFee
    }
  }

  const toggleReceiptMethod = (method) => {
    if (receiptMethod.includes(method)) {
      setReceiptMethod(receiptMethod.filter(m => m !== method))
    } else {
      setReceiptMethod([...receiptMethod, method])
    }
  }

  const simulateRemitaPayment = async () => {
    setPaymentStatus('processing')
    
    // Generate RRR (Remita Retrieval Reference)
    const rrr = 'RRR' + Date.now() + Math.random().toString(36).substr(2, 6).toUpperCase()
    
    const amounts = calculateTotal()
    
    // Simulate API call to Remita
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setRemitaData({
      rrr,
      amount: amounts.total,
      customerName: 'Patient Name',
      customerEmail: 'patient@example.com',
      customerPhone: '08027183558',
      serviceTypeId: services.find(s => s.id === selectedServices[0])?.serviceTypeId || '4430731',
      description: selectedServices.map(id => services.find(s => s.id === id)?.name).join(', ')
    })
    
    setPaymentStatus('success')
    setPaymentStep(2)
  }

  const sendReceipts = async () => {
    // Simulate sending receipts through multiple channels
    const receiptsSent = {
      email: receiptMethod.includes('email'),
      sms: receiptMethod.includes('sms'),
      whatsapp: receiptMethod.includes('whatsapp'),
      popup: receiptMethod.includes('popup')
    }

    console.log('Sending receipts via:', receiptsSent)
    
    // Simulate API calls
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('Receipts sent successfully via selected methods!')
    setPaymentStep(3)
  }

  const downloadReceipt = () => {
    const receiptContent = `
      BEST CHOICE SPECIALIST HOSPITAL
      ================================
      
      TRANSACTION RECEIPT
      Transaction ID: ${transactionId}
      RRR: ${remitaData.rrr}
      Date: ${new Date().toLocaleString()}
      
      SERVICES:
      ${selectedServices.map(id => {
        const service = services.find(s => s.id === id)
        return `- ${service?.name}: ₦${service?.price.toLocaleString()}`
      }).join('\n')}
      
      BILLING SUMMARY:
      Subtotal: ₦${calculateTotal().subtotal.toLocaleString()}
      VAT (7.5%): ₦${calculateTotal().vat.toLocaleString()}
      Platform Fee: ₦${calculateTotal().platformFee.toLocaleString()}
      TOTAL: ₦${calculateTotal().total.toLocaleString()}
      
      PAYMENT METHOD: Remita
      STATUS: PAID
      
      Receipt ID: RC-${Date.now()}
      Valid until: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
      
      Thank you for your payment!
      For inquiries: 0802-718-3558
    `
    
    const blob = new Blob([receiptContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `receipt-${transactionId}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (!isOpen) return null

  const amounts = calculateTotal()

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 rounded-t-2xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
              <p className="text-gray-600">Transaction ID: {transactionId}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-2">
            <div className={`flex items-center ${paymentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${paymentStep >= 1 ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {paymentStep > 1 ? <i className="fas fa-check text-sm"></i> : '1'}
              </div>
              <span className="text-sm font-medium">Select</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div className={`h-full bg-blue-600 transition-all ${paymentStep >= 2 ? 'w-full' : 'w-0'}`}></div>
            </div>
            <div className={`flex items-center ${paymentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${paymentStep >= 2 ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {paymentStep > 2 ? <i className="fas fa-check text-sm"></i> : '2'}
              </div>
              <span className="text-sm font-medium">Pay</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div className={`h-full bg-blue-600 transition-all ${paymentStep >= 3 ? 'w-full' : 'w-0'}`}></div>
            </div>
            <div className={`flex items-center ${paymentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${paymentStep >= 3 ? 'bg-blue-100' : 'bg-gray-100'}`}>
                3
              </div>
              <span className="text-sm font-medium">Receipt</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {paymentStep === 1 && (
            <div className="space-y-8">
              {/* Services Selection */}
              <div>
                <h3 className="text-xl font-bold mb-4">Select Services</h3>
                <div className="space-y-3 mb-8">
                  {services.map(service => (
                    <div 
                      key={service.id}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        selectedServices.includes(service.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                            selectedServices.includes(service.id)
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedServices.includes(service.id) && (
                              <i className="fas fa-check text-white text-xs"></i>
                            )}
                          </div>
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <span className="font-bold">₦{service.price.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Receipt Delivery Options */}
              <div>
                <h3 className="text-xl font-bold mb-4">Receipt Delivery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { id: 'email', icon: 'fas fa-envelope', label: 'Email', color: 'bg-blue-100 text-blue-600' },
                    { id: 'sms', icon: 'fas fa-comment-sms', label: 'SMS', color: 'bg-green-100 text-green-600' },
                    { id: 'whatsapp', icon: 'fab fa-whatsapp', label: 'WhatsApp', color: 'bg-green-50 text-green-700' },
                    { id: 'popup', icon: 'fas fa-window-maximize', label: 'Popup', color: 'bg-purple-100 text-purple-600' }
                  ].map(method => (
                    <button
                      key={method.id}
                      type="button"
                      className={`p-4 border-2 rounded-xl text-center transition-all ${
                        receiptMethod.includes(method.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => toggleReceiptMethod(method.id)}
                    >
                      <i className={`${method.icon} text-2xl mb-2 ${method.color}`}></i>
                      <div className="text-sm font-medium">{method.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold mb-4 text-lg">Order Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>₦{amounts.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">VAT (7.5%):</span>
                    <span>₦{amounts.vat.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Fee:</span>
                    <span>₦{amounts.platformFee.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Amount:</span>
                      <span className="text-blue-600">₦{amounts.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setPaymentStep(2)}
                className="w-full hospital-gradient text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all hover:scale-105"
              >
                Proceed to Payment
              </button>
            </div>
          )}

          {paymentStep === 2 && (
            <div className="space-y-8">
              {/* Remita Payment Interface */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-university text-3xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Remita Payment Gateway</h3>
                    <p className="text-gray-600">Secure payment processing</p>
                  </div>
                </div>

                {paymentStatus === 'pending' && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-600">Total Amount:</span>
                        <span className="text-2xl font-bold text-blue-600">₦{amounts.total.toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Transaction will be processed via Remita secure gateway
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full p-3 border rounded-lg"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full p-3 border rounded-lg"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full p-3 border rounded-lg"
                        placeholder="0802 718 3558"
                      />
                    </div>

                    {/* Payment Options */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-4 border rounded-lg text-center hover:bg-blue-50">
                        <i className="fas fa-credit-card text-xl mb-2 text-blue-600"></i>
                        <div className="text-sm">Card</div>
                      </button>
                      <button className="p-4 border rounded-lg text-center hover:bg-blue-50">
                        <i className="fas fa-university text-xl mb-2 text-green-600"></i>
                        <div className="text-sm">Bank</div>
                      </button>
                      <button className="p-4 border rounded-lg text-center hover:bg-blue-50">
                        <i className="fas fa-mobile-alt text-xl mb-2 text-purple-600"></i>
                        <div className="text-sm">USSD</div>
                      </button>
                      <button className="p-4 border rounded-lg text-center hover:bg-blue-50">
                        <i className="fas fa-wallet text-xl mb-2 text-orange-600"></i>
                        <div className="text-sm">Wallet</div>
                      </button>
                    </div>

                    <button
                      onClick={simulateRemitaPayment}
                      className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all flex items-center justify-center"
                    >
                      {paymentStatus === 'processing' ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Processing...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-lock mr-2"></i>
                          Pay ₦{amounts.total.toLocaleString()}
                        </>
                      )}
                    </button>
                  </div>
                )}

                {paymentStatus === 'success' && (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-check-circle text-green-500 text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
                    <p className="text-gray-600 mb-6">
                      Your payment has been processed successfully via Remita
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-6">
                      <div className="text-sm text-gray-500 mb-2">Remita RRR:</div>
                      <div className="text-lg font-mono font-bold">{remitaData.rrr}</div>
                    </div>
                    <button
                      onClick={sendReceipts}
                      className="w-full hospital-gradient text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all"
                    >
                      Send Receipts
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {paymentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center py-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-receipt text-white text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Receipts Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Receipts have been delivered via your selected methods
                </p>

                {/* Receipt Preview */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">Payment Receipt</h4>
                      <p className="text-gray-600 text-sm">Transaction ID: {transactionId}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      PAID
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-bold">₦{amounts.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">RRR:</span>
                      <span className="font-mono">{remitaData.rrr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600 font-semibold">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Receipt Delivery Status */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {receiptMethod.map(method => (
                    <div key={method} className="bg-white border border-green-200 rounded-lg p-4 text-center">
                      <i className={`fas fa-check-circle text-green-500 text-xl mb-2`}></i>
                      <div className="text-sm font-medium capitalize">{method}</div>
                      <div className="text-xs text-gray-500">Sent</div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={downloadReceipt}
                    className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                  >
                    <i className="fas fa-download mr-2"></i>
                    Download
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 hospital-gradient text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <i className="fas fa-check mr-2"></i>
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}