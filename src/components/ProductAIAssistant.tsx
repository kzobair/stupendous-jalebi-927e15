import React, { useState, useEffect, useRef } from 'react'

export function ProductAIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string }>>([
    { 
      sender: 'assistant', 
      text: "Hello! Welcome to Oriental Fashion Ltd. I am your corporate AI Assistant. I can help you with details about our factory infrastructure, machine capacity, compliance approvals, product categories, or how to submit a B2B inquiry. How can I assist you today?" 
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = inputValue
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }])
    setInputValue('')

    setTimeout(() => {
      const q = userMessage.toLowerCase()
      let reply = ""

      if (q.includes('about') || q.includes('who') || q.includes('history') || q.includes('establish') || q.includes('year')) {
        reply = "Oriental Fashion Ltd is a world-class Ready-Made Garments (RMG) Manufacturer & Exporter established in 2011. We operate a highly efficient factory space of 54,000 sq ft with around 500 dedicated, skilled employees in Savar, Dhaka, Bangladesh."
      } else if (q.includes('machin') || q.includes('equipment') || q.includes('capacity') || q.includes('count') || q.includes('boiler') || q.includes('generator')) {
        reply = "We operate a comprehensive fleet of 320 high-performance machines primarily supplied by industry-leading makers in Japan, Taiwan, and China. This includes 122 Plain Machines (106 auto, 16 manual), 63 Overlocks, 34 Flatlocks, 15 Button Stitches, 13 Button Holes, advanced big fusing machines, fabric inspection units, and safety metal detector machines. We also run dual boilers and 100 KV generators to ensure uninterrupted operations."
      } else if (q.includes('layout') || q.includes('floor') || q.includes('building') || q.includes('map') || q.includes('where')) {
        reply = "Our factory features a carefully approved 6-story building layout:\n\n• Ground Floor: Store & Bonded Warehouse\n• 1st Floor: Finishing Section\n• 2nd & 3rd Floors: Primary Sewing Sections\n• 4th Floor: Office room, Inspection room, and 2 additional Sewing lines\n• 5th Floor: Cutting Section, Sample Room, CAD, and Fusing Section\n• 6th (Top) Floor: Staff Dining and Prayer facilities."
      } else if (q.includes('product') || q.includes('manufacture') || q.includes('garment') || q.includes('make') || q.includes('cloth') || q.includes('shirt') || q.includes('jacket') || q.includes('polo')) {
        reply = "We manufacture a wide range of premium garments for export: \n\n1. Basic & Fancy Shirts (Woven button-downs)\n2. Denim & Fleece Jackets\n3. Polo & Athletic Knit Shirts\n4. Shorts, Ladies, and Kids bonded fabric apparel\n\nAll of our garments undergo strict material tests, double-fusing where needed, and complete safety needle detection."
      } else if (q.includes('complian') || q.includes('safe') || q.includes('fire') || q.includes('certif') || q.includes('audit')) {
        reply = "Compliance and safety are our highest priorities. Our building has an Approved Building Layout, dual fire emergency exits, an advanced addressable fire detection & protection system, and a dedicated industrial fire pump rated at 750 GPM / 11 bar. We also utilize a computerized metal detector on our finishing lines to guarantee 100% metal-free, safe garments."
      } else if (q.includes('contact') || q.includes('reach') || q.includes('address') || q.includes('phone') || q.includes('email') || q.includes('chairman') || q.includes('reyaz')) {
        reply = "You can reach our Chairman, Md. Reyazuddin directly:\n• Phone: +8801713008854 or +8801613008854\n• Email: chairman@orientalfashionltd.com\n\nOur Head Office is at House-447, Road-31, Floor-4th, Mohakhali DOHS, Dhaka, Bangladesh. Our factory is at Dosaid Collage Road, Ashulia, Savar, Dhaka-1340, Bangladesh."
      } else if (q.includes('buy') || q.includes('checkout') || q.includes('price') || q.includes('order')) {
        reply = "As an industrial RMG manufacturer, we primarily cater to bulk B2B export orders. Our order quantities and pricing are customized based on design specifications, fabrics, and quantities. To get a custom quotation, please fill out our 'Inquire Now' contact form at the bottom of the page, and our merchandising team will get back to you within 24 hours!"
      } else {
        reply = "Thank you for your interest! I'm here to provide accurate details on Oriental Fashion Ltd's manufacturing capacity (320+ machines), our 54,000 sq ft factory layout, compliance standards, and product options. Let me know if you would like factory details or contact information!"
      }

      setMessages(prev => [...prev, { sender: 'assistant', text: reply }])
    }, 650)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-500 text-slate-950 hover:bg-amber-600 hover:scale-105 transition-all duration-300 shadow-2xl p-4 rounded-full flex items-center justify-center border border-amber-600/30 font-bold gap-2"
          aria-label="Open AI Assistant"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="hidden md:inline text-xs tracking-wider uppercase">OF Assistant</span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-85 md:w-[420px] overflow-hidden flex flex-col h-[520px] transition-all duration-300">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs">
                OF
              </span>
              <div>
                <h4 className="font-bold text-sm tracking-wide">Oriental Fashion Assistant</h4>
                <p className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">Industrial B2B Advisor</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about machinery, layout, certifications..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:bg-white transition-all text-slate-800"
            />
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors shadow-sm"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
