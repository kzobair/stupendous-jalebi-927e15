import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { SITE_NAME, SITE_URL, absoluteUrl } from '../../lib/seo'
import products from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw notFound()
    }
    return product
  },
  head: ({ loaderData: product }) => {
    if (!product) return {}

    const productUrl = `${SITE_URL}/products/${product.id}`
    const title = `${product.name} Manufacturer | ${SITE_NAME}`
    const description = `${product.shortDescription} Export production capacity: ${product.capacity}. Manufactured by ${SITE_NAME} in Bangladesh.`
    const image = absoluteUrl(product.image)

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:type', content: 'product' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: productUrl },
        { property: 'og:image', content: image },
        { property: 'og:image:alt', content: product.name },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        {
          'script:ld+json': {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Product',
                '@id': `${productUrl}#product`,
                name: product.name,
                description: product.description,
                image: [image],
                sku: `OFL-${product.id.toString().padStart(3, '0')}`,
                category: product.category,
                material: product.materials,
                url: productUrl,
                manufacturer: {
                  '@type': 'Organization',
                  '@id': `${SITE_URL}/#organization`,
                  name: SITE_NAME,
                  url: SITE_URL,
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: SITE_URL,
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Products',
                    item: `${SITE_URL}/#products`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: product.name,
                    item: productUrl,
                  },
                ],
              },
            ],
          },
        },
      ],
      links: [{ rel: 'canonical', href: productUrl }],
    }
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
                alt={`${product.name} manufactured by Oriental Fashion Ltd`}
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
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">Technical Specifications</h2>
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
