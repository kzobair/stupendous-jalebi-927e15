import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-bold text-slate-800 hover:text-amber-500 mb-8 transition-colors group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Factory Overview
        </Link>
        
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Product Image Section */}
          <div className="w-full md:w-[50%] bg-slate-100 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-200">
            <div className="aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-md border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full md:w-[50%] p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-amber-100 text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4 border border-amber-300">
                Category: {product.category.toUpperCase()}
              </span>
              <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">{product.name}</h1>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm lg:text-base">{product.description}</p>
              
              {/* Technical Specifications Grid */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4 mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-slate-400 font-bold uppercase">Fabric / Composition</span>
                    <span className="text-slate-900 font-semibold">{product.materials}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-bold uppercase">Production Capacity</span>
                    <span className="text-slate-900 font-semibold text-amber-600">{product.capacity}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-bold uppercase">Stitching Standard</span>
                    <span className="text-slate-900 font-semibold">18-20 SPI (Stitches Per Inch)</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-bold uppercase">MOQ (Minimum Order)</span>
                    <span className="text-slate-900 font-semibold">3,000 Pcs per style</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action for Buyers */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">B2B INQUIRY ONLY</span>
                <span className="text-lg font-black text-slate-900">Custom B2B Quotes</span>
              </div>
              <a 
                href="/#contact" 
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-center text-sm transition-all shadow-md uppercase tracking-wider"
              >
                Inquire For This Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
