import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import { ProductAIAssistant } from '@/components/ProductAIAssistant'

export const Route = createFileRoute('/')({
  component: FactoryIndex,
})

type FilterType = 'all' | 'shirts' | 'jackets' | 'polo-knit' | 'kids-ladies'

function FactoryIndex() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Bulk Apparel Export Inquiry',
    message: '',
  })

  // Grouped Machinery Data for Display
  const machinery = [
    { name: 'Plain Sewing Machines (Auto)', qty: 106, category: 'Sewing' },
    { name: 'Overlock - 4 Thread / 5 Thread', qty: 63, category: 'Sewing' },
    { name: 'Flat Lock Machines', qty: 34, category: 'Sewing' },
    { name: 'Plain Sewing Machines (Manual)', qty: 16, category: 'Sewing' },
    { name: 'Button Stitch Machines', qty: 15, category: 'Button/Finishing' },
    { name: 'Button Hole Machines', qty: 13, category: 'Button/Finishing' },
    { name: 'Vertical Cutter / Cutting Machines', qty: 16, category: 'Cutting' },
    { name: 'Two Needle / Chain Stitch / Kansai', qty: 17, category: 'Sewing' },
    { name: 'Collar/Cuff Forming & Turning Units', qty: 7, category: 'Specialized' },
    { name: 'Fusing Machine (Big & Box Placket)', qty: 3, category: 'Specialized' },
    { name: 'Pocket & Placket Creasing Machines', qty: 2, category: 'Specialized' },
    { name: 'Metal Detector Unit', qty: 1, category: 'Compliance/Quality' },
    { name: 'Fabric Inspection Machine', qty: 1, category: 'Compliance/Quality' },
    { name: 'Industrial Boilers (60kg / 150kg)', qty: 2, category: 'Utility' },
    { name: 'Power Generators (100 KV)', qty: 2, category: 'Utility' },
    { name: 'Fire Pump (750 GPM, 11 bar)', qty: 1, category: 'Safety/Compliance' },
  ]

  // Gallery Photos mapping to DSC photos with realistic RMG descriptions
  const galleryPhotos = [
    { path: '/assets/optimized/DSC07456.JPG', title: 'Technical Fleece Section', desc: 'Bonded thermal fleece jacket sewing lines.' },
    { path: '/assets/optimized/DSC07567.JPG', title: 'Knit Production Floor', desc: 'Dedicated line for high-density athletic pique polo shirts.' },
    { path: '/assets/optimized/DSC07583.JPG', title: 'Heavy Denim Washing', desc: 'Industrial wash and styling verification for denim jackets.' },
    { path: '/assets/optimized/DSC07594.JPG', title: 'Child-Safe Apparel Area', desc: 'Specialized sewing room with certified safety checkpoints.' },
    { path: '/assets/optimized/DSC07740.JPG', title: 'Fabric Quality Inspection', desc: 'Pristine raw material check against stretch and warp parameters.' },
    { path: '/assets/optimized/DSC07759.JPG', title: 'Premium Finished Garments', desc: 'Finished woven shirts undergoing final aesthetic review.' },
    { path: '/assets/optimized/DSC07764.JPG', title: 'Executive Button-Down Lines', desc: 'Advanced stitching with high-density spi settings.' },
    { path: '/assets/optimized/DSC07766.JPG', title: 'Finished Goods Boxing', desc: 'Secure, climate-controlled packaging and dispatch division.' },
    { path: '/assets/optimized/DSC07787.JPG', title: 'Cutting & CAD Precision', desc: 'Automated fabric laying and pattern layout mapping.' },
    { path: '/assets/optimized/DSC07793.JPG', title: 'Primary Sewing Division', desc: 'Skilled operators stitching bulk woven export orders.' },
    { path: '/assets/optimized/DSC07794.JPG', title: 'Overlock Stitch Quality', desc: '4-thread edge reinforcing to secure seam integrity.' },
    { path: '/assets/optimized/DSC07805.JPG', title: 'Final Finishing & Pressing', desc: 'Steam-pressing lines for pristine retail presentation.' },
    { path: '/assets/optimized/DSC07864.JPG', title: 'Metal Detection Gate', desc: 'Ensuring 100% child safety compliance before packaging.' },
    { path: '/assets/optimized/DSC07869.JPG', title: 'Bonded & Raw Materials Store', desc: 'Meticulously logged inventory of accessories and fabrics.' },
  ]

  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'all') return true
    return product.category === activeFilter
  })

  const encode = (data: Record<string, string>) => {
    return Object.entries(data)
      .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
      .join('&')
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'oriental-contact', ...contactForm }),
      })
      setInquirySubmitted(true)
    } catch (err) {
      console.error("Form submission failed", err)
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Dramatic Industrial Hero Section */}
      <section className="relative bg-slate-950 text-white py-32 px-6 md:px-12 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/assets/optimized/DSC07793.JPG')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="inline-flex bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 font-bold">
              ESTABLISHED IN 2011 • RMG MANUFACTURER & EXPORTER
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight uppercase">
              Precision Engineering <br />
              <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">For Global Apparel</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Oriental Fashion Ltd. is a premier clothing manufacturer based in Bangladesh. We operate a highly synchronized 54,000 sq. ft. facility, utilizing Japanese and Taiwanese technology to deliver world-class apparel to international markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg uppercase tracking-wider text-sm">
                Get B2B Quotation
              </a>
              <a href="#about" className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/10 transition-all text-sm uppercase">
                Explore Facility
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Dashboard Statistics Dashboard */}
      <section className="bg-slate-900 text-white py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left border-r border-slate-800 last:border-r-0 pr-4">
            <span className="block text-3xl md:text-4xl font-black text-amber-400">54,000</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Square Feet Floor Space</span>
          </div>
          <div className="text-center md:text-left border-r border-slate-800 last:border-r-0 pr-4">
            <span className="block text-3xl md:text-4xl font-black text-amber-400">500+</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Skilled Professionals</span>
          </div>
          <div className="text-center md:text-left border-r border-slate-800 last:border-r-0 pr-4">
            <span className="block text-3xl md:text-4xl font-black text-amber-400">320+</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">High-Performance Machines</span>
          </div>
          <div className="text-center md:text-left">
            <span className="block text-3xl md:text-4xl font-black text-amber-400">300K+</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Pcs Monthly Capacity</span>
          </div>
        </div>
      </section>

      {/* 3. About Company Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img src="/assets/optimized/DSC07793.JPG" alt="Sewing Division" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
              <img src="/assets/optimized/DSC07805.JPG" alt="Finishing Pressed" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-amber-500 font-black text-xs uppercase tracking-widest block mb-3">WHO WE ARE</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Quality & Craftsmanship Commitment</h2>
            <div className="text-slate-600 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                Founded in 2011, <strong>Oriental Fashion Ltd.</strong> has established itself as an innovative, highly compliant manufacturing partner for top-tier international clothing brands. We provide seamless end-to-end solutions, starting from digital CAD pattern layout and precise knife cutting to rigorous finishing, computerized needle detection, and clean global shipping.
              </p>
              <p>
                Our machinery is sourced directly from state-of-the-art suppliers in Japan, Taiwan, and China, enabling high levels of technical automation, double-fusing strength, and beautiful custom stitching specifications (18-20 SPI). 
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-4 py-1.5 my-6 text-slate-950 font-bold text-sm bg-amber-500/5 rounded-r">
                "Our mission is to combine technical precision, fair workplace ethics, and fast industrial production to scale our global buyers’ apparel needs effortlessly."
                <cite className="block text-xs font-semibold text-slate-500 mt-1 not-italic">— Md. Reyazuddin, Chairman</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Factory Facility Floor Layout Breakdown */}
      <section id="infrastructure" className="bg-slate-900 text-white py-24 px-6 md:px-12 border-t border-b border-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-black text-xs uppercase tracking-widest block mb-2">INFRASTRUCTURE</span>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Optimized 6-Floor Facility Layout</h3>
            <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm">
              Our factory building is approved, compliant, and architecturally planned for optimal batch logistics and linear manufacturing flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { floor: 'Ground Floor', section: 'Store & Bonded Warehouse', desc: 'Secure, climate-controlled raw materials, fabrics and accessory log storage with strict inspection protocols.' },
              { floor: '1st Floor', section: 'Finishing Section', desc: 'Equipped with heavy steam-pressing units, vacuum tables, and a high-sensitivity computerized metal detection line.' },
              { floor: '2nd & 3rd Floor', section: 'Primary Sewing Division', desc: 'Densely populated floors utilizing auto plain-stitchers, overlocks, and flatlocks configured into high-volume lines.' },
              { floor: '4th Floor', section: 'Executive Suite & Sampling', desc: 'Housing administrative offices, buyers inspection rooms, and two dedicated specialty sewing lines for custom fabrics.' },
              { floor: '5th Floor', section: 'Cutting, CAD, & Fusing Section', desc: 'Digitized pattern grading, automated layout printers, band-knife cutters, and heavy double-fusing machines.' },
              { floor: '6th Floor (Top)', section: 'Staff Dining & Prayers Room', desc: 'Providing safe, comfortable dining areas, clean facilities, and dedicated prayer quarters for our skilled operators.' },
            ].map((f, i) => (
              <div key={i} className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all duration-300">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest block mb-1">{f.floor}</span>
                <h4 className="text-lg font-black text-white mb-3 uppercase">{f.section}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Machinery Matrix */}
      <section id="machinery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-black text-xs uppercase tracking-widest block mb-2">TECHNICAL CAPACITY</span>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Our 320-Machine Production Matrix</h3>
          <p className="text-slate-500 max-w-xl mx-auto mt-3 text-sm">
            Featuring state-of-the-art Japanese and Taiwanese machines configured for high-speed apparel assembly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {machinery.map((m, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.category}</span>
                <h4 className="font-extrabold text-slate-900 text-sm mt-1 leading-tight">{m.name}</h4>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Quantity:</span>
                <span className="text-xl font-black text-amber-500">{m.qty} Units</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Product Range Showcase */}
      <section id="products" className="py-24 px-6 md:px-12 bg-slate-900 text-white border-t border-b border-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-black text-xs uppercase tracking-widest block mb-2">EXPORT LINES</span>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Our Manufactured Apparel Range</h3>
            <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm">
              Explore the core categories of garments we manufacture for export. Select a category to filter our specialized production lines.
            </p>
          </div>

          {/* Tab Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Garments' },
              { id: 'shirts', label: 'Woven Shirts' },
              { id: 'jackets', label: 'Jackets & Fleece' },
              { id: 'polo-knit', label: 'Polo & Knitwear' },
              { id: 'kids-ladies', label: 'Kids & Ladies' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id as FilterType)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                  activeFilter === btn.id
                    ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/50'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div 
                key={p.id}
                className="bg-slate-950/60 rounded-3xl border border-slate-800 shadow-xl overflow-hidden flex flex-col group hover:border-amber-400/50 transition-all duration-300"
              >
                <Link
                  to="/products/$productId"
                  params={{ productId: p.id.toString() }}
                  className="block relative aspect-square overflow-hidden bg-slate-900 border-b border-slate-850"
                >
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-slate-950/90 text-[10px] font-bold text-amber-400 px-3 py-1 rounded-full shadow-md uppercase tracking-wider border border-slate-800">
                    {p.category.replace('-', ' & ')}
                  </span>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      to="/products/$productId"
                      params={{ productId: p.id.toString() }}
                      className="block"
                    >
                      <h4 className="font-black text-white text-lg mb-2 group-hover:text-amber-400 transition-colors uppercase">
                        {p.name}
                      </h4>
                    </Link>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {p.shortDescription}
                    </p>
                  </div>

                  <div className="border-t border-slate-850 pt-4 flex items-center justify-between text-xs">
                    <div>
                      <span className="block text-[10px] text-slate-500 font-bold uppercase">CAPACITY</span>
                      <span className="text-amber-400 font-extrabold">{p.capacity}</span>
                    </div>
                    <Link
                      to="/products/$productId"
                      params={{ productId: p.id.toString() }}
                      className="text-xs font-bold text-white hover:text-amber-400 transition-colors uppercase tracking-wider flex items-center gap-1"
                    >
                      Technical Specs &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Production & Media Gallery Section */}
      <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-black text-xs uppercase tracking-widest block mb-2">FACTORY MEDIA</span>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Inside Our Operations</h3>
          <p className="text-slate-500 max-w-xl mx-auto mt-3 text-sm">
            Authentic, real-time snapshots illustrating the layout, quality checks, machinery, and finished output at our Savar factory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryPhotos.map((photo, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="aspect-square bg-slate-100 overflow-hidden relative">
                <img 
                  src={photo.path} 
                  alt={photo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-4 border-t border-slate-100">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase">{photo.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Compliance, Quality & Safety */}
      <section id="compliance" className="bg-slate-900 text-white py-24 px-6 md:px-12 border-t border-b border-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-amber-400 font-black text-xs uppercase tracking-widest block mb-3">GLOBAL COMPLIANCE</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">Exemplary Fire & Child Safety Protocols</h2>
            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 font-black shrink-0 border border-amber-400/30">
                  🚒
                </div>
                <div>
                  <h4 className="font-black text-white text-base uppercase">Industrial Fire Protection System</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Equipped with a certified heavy-duty fire pump rated at <strong>750 GPM</strong> with 11 bar pressure capability, integrated addressable fire alarms, and smoke barriers on sewing and warehouse floors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 font-black shrink-0 border border-amber-400/30">
                  🔍
                </div>
                <div>
                  <h4 className="font-black text-white text-base uppercase">Child-Safe Needle Detection</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    We pass 100% of manufactured children's and ladies' garments through our computerized electromagnetic metal detector unit, guaranteeing zero metal contamination before vacuum sealing and export boxing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 font-black shrink-0 border border-amber-400/30">
                  🏗️
                </div>
                <div>
                  <h4 className="font-black text-white text-base uppercase">Approved Layout & Bonded Warehouse</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Operated under strict national building approvals. Includes secure customs-friendly bonded storage for quick duties handling and efficient export processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center">
            <h4 className="text-lg font-black text-white mb-2 uppercase">Request Factory Tour</h4>
            <p className="text-xs text-slate-400 mb-6">
              We welcome international apparel buyers, retail merchandisers, and third-party inspectors to review our operations in Savar, Dhaka.
            </p>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-md">
              <img src="/assets/optimized/DSC07864.JPG" alt="Safety Gate Compliance" className="w-full h-full object-cover" />
            </div>
            <a href="#contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all">
              Book Inspection Schedule
            </a>
          </div>
        </div>
      </section>

      {/* 9. Contact Us / Netlify Form Inquiries */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-amber-500 font-black text-xs uppercase tracking-widest block mb-3">GET IN TOUCH</span>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Start Your Garment Line Inquiry</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Are you an international clothing retailer, a modern brand, or an apparel merchant? Submit your product design, fabrics specification, and volume requirements. Our merchandising team will prepare a custom cost breakdown within 24 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Direct Direct Contacts</h4>
              <div className="text-xs text-slate-600 space-y-2">
                <p><strong className="text-slate-900">Chairman:</strong> Md. Reyazuddin</p>
                <p><strong className="text-slate-900">Direct Contact:</strong> +8801713008854 / +8801613008854</p>
                <p><strong className="text-slate-900">E-mail:</strong> chairman@orientalfashionltd.com</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
            {inquirySubmitted ? (
              <div className="text-center py-12">
                <span className="text-5xl">📩</span>
                <h4 className="text-2xl font-black text-slate-900 mt-4 uppercase">Inquiry Received</h4>
                <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
                  Thank you for contacting Oriental Fashion Ltd. Our merchandising department is reviewing your specifications and will follow up shortly via email.
                </p>
                <button 
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-6 bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase hover:bg-slate-800 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="oriental-contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={contactForm.name}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-amber-500 focus:bg-white transition-all text-slate-800"
                      placeholder="e.g. Jean-Pierre Laurent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Corporate Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={contactForm.email}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-amber-500 focus:bg-white transition-all text-slate-800"
                      placeholder="e.g. jp@apparelbrands.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company / Brand Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      required 
                      value={contactForm.company}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-amber-500 focus:bg-white transition-all text-slate-800"
                      placeholder="e.g. Apparel Global Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Inquiry Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      required 
                      value={contactForm.subject}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-amber-500 focus:bg-white transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Line Specifications & Message</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    value={contactForm.message}
                    onChange={handleFormChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-amber-500 focus:bg-white transition-all text-slate-800 leading-relaxed"
                    placeholder="Provide details of your target design, fabric weight, composition, size breakdowns, target volume, and target shipping schedule."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-850 text-white font-extrabold py-4 rounded-xl transition-all shadow-lg uppercase tracking-widest text-xs"
                >
                  Submit Industrial Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Corporate Spokesperson AI Assistant Floating Chat Widget */}
      <ProductAIAssistant />

    </div>
  )
}
