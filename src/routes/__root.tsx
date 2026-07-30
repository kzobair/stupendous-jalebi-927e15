import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Oriental Fashion Ltd | Ready-Made Garments Manufacturer & Exporter',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased text-slate-600 bg-slate-50 min-h-screen flex flex-col">
        {/* Professional Sticky Navigation Header */}
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-4 px-6 md:px-12 flex items-center justify-between text-white">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/orient-logo.webp"
                alt="Oriental Fashion Ltd."
                width="480"
                height="379"
                className="w-14 h-11 rounded-lg bg-white object-contain p-1 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-black text-base md:text-lg tracking-tight text-white leading-tight">
                  ORIENTAL FASHION LTD.
                </span>
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold leading-none">
                  Manufacturer & Exporter
                </span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-semibold text-white hover:text-white transition-colors">
              Home
            </Link>
            <a href="#about" className="text-sm font-semibold text-white hover:text-white transition-colors cursor-pointer">
              About Us
            </a>
            <a href="#infrastructure" className="text-sm font-semibold text-white hover:text-white transition-colors cursor-pointer">
              Facility Layout
            </a>
            <a href="#machinery" className="text-sm font-semibold text-white hover:text-white transition-colors cursor-pointer">
              Machinery
            </a>
            <a href="#products" className="text-sm font-semibold text-white hover:text-white transition-colors cursor-pointer">
              Our Products
            </a>
            <a href="#gallery" className="text-sm font-semibold text-white hover:text-white transition-colors cursor-pointer">
              Media Gallery
            </a>
            <a href="#compliance" className="text-sm font-semibold text-white hover:text-white transition-colors cursor-pointer">
              Compliance
            </a>
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md">
              Inquire Now
            </a>
          </nav>

          {/* Quick Mobile Action Button */}
          <div className="lg:hidden">
            <a href="#contact" className="bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded text-xs transition-all">
              Inquire
            </a>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Professional Industrial Footer */}
        <footer className="bg-slate-950 text-slate-400 py-16 px-6 md:px-12 border-t border-slate-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/orient-logo.webp"
                  alt=""
                  width="480"
                  height="379"
                  loading="lazy"
                  className="w-12 h-10 rounded-md bg-white object-contain p-1"
                />
                <span className="font-bold text-white tracking-tight text-lg">
                  ORIENTAL FASHION LTD.
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                A world-class apparel manufacturer and exporter based in Bangladesh, specializing in high-quality woven, knit, and bonded garments for global fashion brands since 2011.
              </p>
              <p className="text-xs text-slate-500 mt-2">
                &copy; 2026 Oriental Fashion Ltd. All rights reserved. Registered under RMG Exporters Association.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Navigation</h5>
              <ul className="flex flex-col gap-2.5 text-sm text-white">
                <li><a href="#about" className="hover:text-white transition-colors">About Company</a></li>
                <li><a href="#infrastructure" className="hover:text-white transition-colors">Factory Infrastructure</a></li>
                <li><a href="#machinery" className="hover:text-white transition-colors">Machinery Matrix</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Garment Range</a></li>
                <li><a href="#compliance" className="hover:text-white transition-colors">Compliance & Safety</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider text-amber-400">Head Office</h5>
              <address className="not-italic text-sm text-slate-400 flex flex-col gap-2 leading-relaxed">
                <p>House-447, Road-31, Floor-4th,<br />Mohakhali DOHS, Dhaka,<br />Bangladesh.</p>
                <p className="mt-2 text-amber-400 font-medium">Factory Location:</p>
                <p>Dosaid Collage Road, Ashulia,<br />Savar, Dhaka-1340, Bangladesh.</p>
              </address>
            </div>
          </div>
        </footer>

        <Scripts />
      </body>
    </html>
  )
}
