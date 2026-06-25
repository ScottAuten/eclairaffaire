export const NAP = {
  businessName: 'Eclair Affaire Weston',
  phone: '(954) 225-1740',
  address: '1150 Weston Rd, Weston, FL 33326',
  siteUrl: 'https://eclairaffaire.com',
  orderUrl: 'https://eclair-affaire-llc.square.site',
};

export const HOURS: Record<string, string> = {
  Monday: '9AM–6PM',
  Tuesday: '9AM–6PM',
  Wednesday: '9AM–6PM',
  Thursday: '9AM–7PM',
  Friday: '9AM–7PM',
  Saturday: '9AM–7PM',
  Sunday: '9AM–6PM',
};

export const RATINGS = {
  google: { stars: 4.8, count: 364 },
  uberEats: { stars: 4.8, count: 170 },
};

export const ATTRIBUTES = ['Women-owned', 'LGBTQ+ friendly'];

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: NAP.businessName,
  telephone: NAP.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1150 Weston Rd',
    addressLocality: 'Weston',
    addressRegion: 'FL',
    postalCode: '33326',
    addressCountry: 'US',
  },
  url: NAP.siteUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Women-owned', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'LGBTQ+ friendly', value: true },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '364',
  },
};
