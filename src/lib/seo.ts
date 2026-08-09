export const SITE_NAME = 'Oriental Fashion Ltd'
export const SITE_URL = 'https://www.orientalfashionltd.com'
export const SITE_DESCRIPTION =
  'Bangladesh ready-made garments manufacturer and exporter producing woven shirts, denim jackets, knitwear, fleece, and bonded apparel for global brands.'
export const DEFAULT_SOCIAL_IMAGE = '/assets/optimized/DSC07793.JPG'

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}

export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/assets/orient-logo.webp'),
  image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
  description: SITE_DESCRIPTION,
  foundingDate: '2011',
  email: 'chairman@orientalfashionltd.com',
  telephone: ['+8801713008854', '+8801613008854'],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'House-447, Road-31, Floor-4th, Mohakhali DOHS',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Dosaid Collage Road, Ashulia',
      addressLocality: 'Savar',
      addressRegion: 'Dhaka',
      postalCode: '1340',
      addressCountry: 'BD',
    },
  ],
  knowsAbout: [
    'Ready-made garments manufacturing',
    'Woven shirts',
    'Denim apparel',
    'Knitwear',
    'Fleece jackets',
    'Bonded garments',
    'Apparel export',
  ],
}
