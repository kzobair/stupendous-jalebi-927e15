export interface Product {
  id: number
  name: string
  category: 'shirts' | 'jackets' | 'polo-knit' | 'kids-ladies'
  image: string
  description: string
  shortDescription: string
  capacity: string // e.g. "50,000 pcs / month"
  materials: string // e.g. "100% Egyptian Cotton, Poly-blend"
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Premium Fancy & Casual Button-Down Shirts',
    category: 'shirts',
    image: '/assets/optimized/Gemini_Generated_Image_e29ob6e29ob6e29o.jpg',
    description: 'Expertly tailored woven casual and fancy shirts. Crafted with high-precision stitching (18-20 stitches per inch), premium double-fused collars, and premium cuff construction. Designed for global retail markets under strict quality assurance.',
    shortDescription: 'High-end woven shirts with pristine double-fused collars.',
    capacity: '80,000 pcs/month',
    materials: 'Egyptian Cotton, Linen Blends, Oxford Woven, Poplin'
  },
  {
    id: 2,
    name: 'Heavy-Duty washed Denim Shirts',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_w7w0zdw7w0zdw7w0.jpg',
    description: 'Rugged yet refined denim jackets built with double-needle chain stitching, heavy-duty metal buttons, and customized wash treatments (enzyme wash, stone wash, bleaching). Fully compliant with global physical stretch and pull tests.',
    shortDescription: 'Heavy-duty stone-washed denim jackets with authentic metal buttons.',
    capacity: '40,000 pcs/month',
    materials: '12oz to 14.5oz Ring Denim, Organic Cotton Denim'
  },
  {
    id: 3,
    name: 'Executive Formal Business Shirts',
    category: 'shirts',
    image: '/assets/optimized/Gemini_Generated_Image_ieq1hdieq1hdieq1.jpg',
    description: 'Crisp executive shirts featuring wrinkle-resistant finishes, French seams, and customized placket styling. Ideal for corporate wear and premium international brands requiring strict measurement tolerances.',
    shortDescription: 'Wrinkle-free executive formal shirts with high-precision stitching.',
    capacity: '60,000 pcs/month',
    materials: '100% Supima Cotton, Twill, Herringbone, Satin Weave'
  },
  {
    id: 4,
    name: 'Premium Athletic Polo & Knit Shirts',
    category: 'polo-knit',
    image: '/assets/optimized/Gemini_Generated_Image_4g0ant4g0ant4g0a.jpg',
    description: 'High-quality pique-knit polo shirts and crewnecks with superior dye-fastness and shrinkage control. Tailored with double-needle hems, customized collars, and custom brand embroidery options.',
    shortDescription: 'Durable pique-knit polo shirts with exceptional color fastness.',
    capacity: '100,000 pcs/month',
    materials: '100% Combed Cotton Pique, Cotton-Poly Lacoste Knit'
  },
  {
    id: 5,
    name: 'Technical Fleece & Bonded Jackets',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_tjlyomtjlyomtjly.jpg',
    description: 'High-performance fleece and bonded jackets featuring heat-seal zippers, thermal lining, and customized windproof bonding. Optimized for cold climates and outdoor export markets.',
    shortDescription: 'Technical windproof fleece jackets with heat-seal details.',
    capacity: '35,000 pcs/month',
    materials: 'Polar Fleece, Anti-pilling Polyester, Bonded TPU Membrane'
  },
  {
    id: 6,
    name: 'Kids & Ladies Bonded Fabric Apparel',
    category: 'kids-ladies',
    image: '/assets/optimized/Gemini_Generated_Image_33ddvv33ddvv33dd.jpg',
    description: 'Delicate, ultra-soft kids wear and ladies fashion garments made of premium bonded fabrics. Hypoallergenic materials, certified needle-detected safety, and exceptionally soft hand-feel.',
    shortDescription: 'Certified child-safe, ultra-soft bonded apparel with needle detection.',
    capacity: '50,000 pcs/month',
    materials: 'Organic Cotton, Interlock Knit, Bonded Jersey Fabric'
  },
  {
    id: 7,
    name: 'Urban Denim Shirts & Utility Jackets',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_14t6ff14t6ff14t6.jpg',
    description: 'Modern styling combined with legendary denim durability. Tailored with reinforced seams, functional bellows pockets, and tailored cuffs. Finished with environment-friendly waterless laser washes.',
    shortDescription: 'Modern urban denim jackets with advanced waterless finishes.',
    capacity: '45,000 pcs/month',
    materials: '100% Recycled Cotton Denim, Mid-weight Slub Denim'
  },
  {
    id: 8,
    name: 'Vintage Distressed Jean Jackets',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_3bhecf3bhecf3bhe.jpg',
    description: 'Beautiful vintage-inspired heavy denim wear featuring manual hand-scraping, authentic 3D whiskers, and robust contrast heavy-thread stitching. Built to withstand extensive retail wash standards.',
    shortDescription: 'Vintage-inspired distressed jackets with premium manual craftsmanship.',
    capacity: '30,000 pcs/month',
    materials: '13.5oz Rigid Cotton Denim, Indigo Ring-spun Yarn'
  },
  {
    id: 9,
    name: 'Classic Indigo Denim Work Shirts',
    category: 'shirts',
    image: '/assets/optimized/Gemini_Generated_Image_6nmrmr6nmrmr6nmr.jpg',
    description: 'Tough indigo denim shirts designed for utility and corporate uniform applications. Featuring snap-button closures, patch pockets with flaps, and clean felled side seams.',
    shortDescription: 'Indigo denim work shirts with felled safety seams.',
    capacity: '55,000 pcs/month',
    materials: '8oz Denim, Indigo-dyed Chambray'
  },
  {
    id: 10,
    name: 'Premium Sherpa-Lined Denim Jackets',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_8d7szm8d7szm8d7s.jpg',
    description: 'Luxury winter outerwear combining robust raw indigo denim with exceptionally soft, high-pile insulated sherpa lining. Includes heavy-gauge zipper and branded brass snap closures.',
    shortDescription: 'Sherpa-lined denim jackets for premium winter export collections.',
    capacity: '25,000 pcs/month',
    materials: '14oz Cotton Denim, Premium Polyester Sherpa Fleece'
  },
  {
    id: 11,
    name: 'Pre-Washed Casual Denim Outerwear',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_8nr4ui8nr4ui8nr4.jpg',
    description: 'Soft-touch pre-washed casual denim wear optimized for ladies and unisex silhouettes. Carefully processed with eco-friendly enzyme washes for an exceptionally soft initial hand-feel.',
    shortDescription: 'Ultra-soft pre-washed denim outerwear for casual brands.',
    capacity: '40,000 pcs/month',
    materials: 'Tencel-Cotton Denim Blend, Soft Indigo Twill'
  },
  {
    id: 12,
    name: 'Heavyweight Canvas Hooded Jackets',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_akcnljakcnljakcn.jpg',
    description: 'Technical street and work jackets constructed with heavy cotton canvas, water-resistant treatments, and triple-needle main seams. Features a comfortable ribbed hem and custom fleece-lined hood.',
    shortDescription: 'Water-resistant canvas workwear jackets with triple stitching.',
    capacity: '30,000 pcs/month',
    materials: '100% Cotton Duck Canvas, Water-Repellent DWR Coating'
  },
  {
    id: 13,
    name: 'Men\'s Contemporary Denim Blouson',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_c84j6rc84j6rc84j.jpg',
    description: 'Sleek, modern minimalist denim blouson styled with zippered front closure, handwarmer welt pockets, and a clean point collar. High-end hardware and premium washing guarantee retail success.',
    shortDescription: 'Minimalist zippered denim blouson jackets with premium hardware.',
    capacity: '35,000 pcs/month',
    materials: 'Premium Stretch Denim, Cotton-Elastane Blend'
  },
  {
    id: 14,
    name: 'Relaxed Fit Oversized Denim Jackets',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_dx4lx5dx4lx5dx4l.jpg',
    description: 'On-trend oversized outerwear crafted for international fast-fashion buyers. Featuring dropped shoulders, shank button details, and customized washing variations including acid wash and light bleach.',
    shortDescription: 'Oversized denim apparel with customized fashion wash treatments.',
    capacity: '50,000 pcs/month',
    materials: '100% Organic Ring-spun Cotton, Open-end Denim Yarn'
  },
  {
    id: 15,
    name: 'Tech Fleece Bomber Jackets',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_h49q3ah49q3ah49q.jpg',
    description: 'High-density tech fleece jackets engineered with bonded zipper pockets, raglan sleeves, and custom double-knit jersey face. Exceptional stretch recovery and outstanding thermal performance.',
    shortDescription: 'High-density tech fleece jackets with bonded pockets.',
    capacity: '45,000 pcs/month',
    materials: 'Scuba Knit, Double-Faced Polyester-Spandex'
  },
  {
    id: 16,
    name: 'Women\'s Tailored Denim Truckers',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_jnjncejnjncejnjn.jpg',
    description: 'Flatteringly contoured women\'s denim jackets featuring precise vertical paneling, hand-sanded highlights, and custom branded logo embossing on metal shank fasteners.',
    shortDescription: 'Contoured premium women\'s denim trucker jackets.',
    capacity: '40,000 pcs/month',
    materials: 'Premium Cotton-Polyester-Elastane Power Stretch Denim'
  },
  {
    id: 17,
    name: 'Cozy Sherpa Collar Winter Truckers',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_kh2idpkh2idpkh2i.jpg',
    description: 'Classic denim design accented by a thick insulated winter-ready faux-shearling collar and inner blanket lining. Beautifully combined with dark indigo wash options for high contrast.',
    shortDescription: 'Warm sherpa-collar denim trucker jackets with insulating linings.',
    capacity: '32,000 pcs/month',
    materials: '13.5oz Indigo Denim, Soft Faux-Shearling Fur'
  },
  {
    id: 18,
    name: 'Light-Wash Summer Denim Jackets',
    category: 'jackets',
    image: '/assets/optimized/Gemini_Generated_Image_olziepolziepolzi.jpg',
    description: 'Bright and breezy light-wash denim apparel perfect for spring and summer lines. Treated with biodegradable non-chlorine bleaching agents to maintain excellent tensile fabric strength.',
    shortDescription: 'Bright light-wash summer jackets treated with eco-safe processes.',
    capacity: '45,000 pcs/month',
    materials: 'Lightweight 10oz Cotton-Linen Denim'
  },
  {
    id: 19,
    name: 'Urban Street Zip-Up Hoodies',
    category: 'polo-knit',
    image: '/assets/optimized/Gemini_Generated_Image_pnb7b2pnb7b2pnb7.jpg',
    description: 'Comfortable bulk-exported streetwear hoodies featuring heavy-weight combed fleece, reinforced hood drawcords, and custom silicone-dipped aglets. Preshrunk to ensure zero shrinkage.',
    shortDescription: 'Heavyweight combed fleece street hoodies with premium drawcords.',
    capacity: '75,000 pcs/month',
    materials: '100% Cotton Heavy Fleece, 400 GSM Ribbing'
  }
]

export default products
