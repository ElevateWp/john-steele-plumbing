import type { BlogPost, ClinicInformation, ServiceDetail, TeamProfile } from './clinic-data';
export type DentistProfile = TeamProfile;

const phone = '+1 662-322-4594';
const photo = '/images/plumbing-technician.jpg';
const businessName = 'Steele Plumbing LLC';

export const CLINIC_INFO: ClinicInformation = {
  name: businessName, legalName: 'NSteele Plumbing LLC',
  tagline: 'Residential plumbing repairs and installations in Tupelo, Mississippi.',
  primaryLocation: { street: '510 Rd 1460', suite: '', city: 'Tupelo', state: 'MS', postalCode: '38804', country: 'US', directions: '510 Rd 1460, Tupelo, MS 38804, United States', landmarks: 'Serving Tupelo and nearby communities in Mississippi.' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone },
  identityHighlights: ['Residential plumbing repairs', 'New-construction plumbing', 'Toilets, sinks and water heaters'],
  schedule: [
    { day: 'Monday', hours: '8 AM–5 PM' }, { day: 'Tuesday', hours: '8 AM–5 PM' },
    { day: 'Wednesday', hours: '8 AM–5 PM' }, { day: 'Thursday', hours: '8 AM–5 PM' },
    { day: 'Friday', hours: '8 AM–5 PM' }, { day: 'Saturday', hours: 'Closed' }, { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [{ value: 26, suffix: '', label: 'Google reviews', description: 'Customer reviews shared for Steele Plumbing LLC.' }], accreditations: [],
};

export const DENTISTS: TeamProfile[] = [{
  id: 'steele-team', slug: 'steele-plumbing-team', name: 'Steele Plumbing LLC Team', title: 'Plumbing professionals', qualifications: 'Plumbing service team', specialization: 'Residential repairs and new-construction plumbing', experienceYears: 0,
  bio: 'Steele Plumbing LLC serves Tupelo with plumbing repairs, fixture work and plumbing for new-home construction.', philosophy: 'Listen to the customer, explain the work and complete the agreed plumbing service.', education: [], memberships: [], specialties: ['Plumbing repairs', 'Toilets and sinks', 'New-construction plumbing'], image: photo, warmImage: '/images/plumbing-repair.jpg',
}];

const serviceEntries = [
  { slug: 'plumbing-repairs', name: 'Plumbing Repairs', description: 'Residential plumbing repair for everyday problems around the home. Call to discuss what is happening and arrange a visit.', focus: ['A plumbing fixture needs attention', 'You have a plumbing problem at home', 'You want to discuss a repair with a local plumber'] },
  { slug: 'drain-cleaning', name: 'Drain and Toilet Repairs', description: 'Help with household drain problems and toilet repairs. Call to describe the issue and ask about scheduling.', focus: ['A drain is slow or blocked', 'A toilet needs repair', 'A bathroom drain or fixture is not working as expected'] },
  { slug: 'leak-repair', name: 'Leak Repairs', description: 'Plumbing help for leaks around household pipes and fixtures. Describe where you see water when you call.', focus: ['A pipe or fixture appears to be leaking', 'You have noticed water around a plumbing fixture', 'You need help with a household plumbing leak'] },
  { slug: 'water-heater-service', name: 'Water Heater Service', description: 'Water heater plumbing service. Call to explain the issue and discuss the next available appointment.', focus: ['Your water heater needs attention', 'Hot water is not working as expected', 'You have noticed a plumbing issue around the heater'] },
  { slug: 'toilet-sink-fixture-repair', name: 'Toilet, Sink and Fixture Repairs', description: 'Repair and installation help for household toilets, sinks, faucets and bathroom fixtures.', focus: ['A toilet or sink needs repair', 'A faucet or bathroom fixture needs attention', 'You are planning a fixture replacement'] },
  { slug: 'new-construction-plumbing', name: 'New-Construction Plumbing', description: 'Plumbing installation for new-home construction, including plumbing fixtures and the water heater.', focus: ['You are building a new home', 'You need plumbing installed during construction', 'You want to discuss tubs, sinks, toilets or a water heater'] },
];

function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
  const overview = 'Steele Plumbing LLC provides residential plumbing service in Tupelo, Mississippi. Call to describe your project and discuss scheduling.';
  const steps = [
    ['Tell us what is happening', 'First contact', 'Describe the plumbing concern and your property.', 'For an active leak, explain where water is coming from when you call.'],
    ['Discuss the work', 'By arrangement', 'Review the plumbing issue and the work that may be needed.', 'The recommended work depends on the fixture, plumbing and conditions at the property.'],
    ['Review the quote and timing', 'Before work begins', 'Discuss the price and schedule before proceeding.', 'Ask any questions about the proposed repair or installation.'],
    ['Complete the agreed service', 'As arranged', 'The agreed plumbing work is completed at your property.', 'Review the completed work and any next steps with the plumber.'],
  ];
  return {
    ...entry, shortDescription: entry.description, navLabel: entry.name, tagline: entry.name + ' in Tupelo, Mississippi.', clinicalExplanation: overview,
    whoNeeds: entry.focus, benefits: ['Friendly, helpful service', 'Clear discussion of the work', 'Residential plumbing in Tupelo'],
    indications: entry.focus.map((condition) => ({ condition, explanation: 'Call Steele Plumbing LLC to describe the issue and discuss a suitable next step.' })),
    procedureSteps: steps.map(([title,duration,description,clinicalDetails],index) => ({ stepNumber:index+1,title,duration,description,clinicalDetails })),
    recoveryTimeline: [
      { period:'Before the visit', expectedSensations:'Share the plumbing concern and arrange a suitable time.', careProtocol:'If water is actively leaking, turn off a nearby safe shutoff valve if you can and describe the leak when you call.' },
      { period:'During the work', expectedSensations:'The plumber reviews the issue and completes the agreed work.', careProtocol:'Discuss access and the work scope with the team.' },
      { period:'After the work', expectedSensations:'Review the completed work and any follow-up notes.', careProtocol:'Call Steele Plumbing LLC if you have questions about the completed service.' },
    ],
    costTransparency:{ baseRange:'Call to discuss the plumbing issue and request a quote.',factors:['The type and condition of the plumbing','Property access and materials required','The agreed work scope'],whatIsIncluded:['Discussion of the issue and options','Agreed scope of work','Quote and timing information'],note:'Pricing depends on the issue and agreed scope. Contact Steele Plumbing LLC for a quote.' },
    beforeAfterCase:{category:entry.name,clinicalContext:'Representative plumbing imagery. Call to discuss plumbing work at your property.',beforeLabel:'Plumbing issue',afterLabel:'Completed plumbing service',beforeImage:'/images/plumbing-pipes.jpg',afterImage:'/images/plumbing-repair.jpg',timeframe:'Timing depends on the service and agreed work.'},
    assignedDentistId:'steele-team', faqs:[
      {question:'How do I arrange '+entry.name.toLowerCase()+'?',answer:'Call '+phone+' to describe the plumbing issue and discuss scheduling.'},
      {question:'What areas do you serve?',answer:'Steele Plumbing LLC is based in Tupelo, Mississippi. Call to ask about service for your address.'},
      {question:'What are your business hours?',answer:'The listed hours are Monday through Friday, 8 AM–5 PM. Saturday and Sunday are closed. Call to confirm current availability.'},
      {question:'How do I request a quote?',answer:'Call '+phone+' to describe the work and request a quote.'},
    ],
  };
}
export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition { id:string; title:string; urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)'; symptoms:string[]; immediateAction:string[]; clinicTreatment:string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export const BLOG_POSTS: BlogPost[] = [
  {slug:'what-to-do-about-a-plumbing-leak',title:'What to do when you find a plumbing leak',category:'Leak repairs',readTime:'3 min read',publishDate:'2026-11-10',lastUpdated:'2026-11-10',authorId:'steele-team',excerpt:'A few practical steps to take while arranging help for a plumbing leak.',leadImage:'/images/plumbing-repair.jpg',relatedServiceSlug:'leak-repair',content:{intro:'If you notice a leak, note where it appears and whether water is still flowing. Call a plumber to describe the issue and discuss service.',sections:[{heading:'Limit water where safe',body:'If you can safely reach the nearest shutoff valve, turn it off and move belongings away from the water.'},{heading:'Share what you noticed',body:'Tell the plumber where the leak is, when it started and whether you have shut off the water.'}]}},
  {slug:'toilet-and-sink-repair',title:'When a toilet or sink needs repair',category:'Toilets and sinks',readTime:'3 min read',publishDate:'2026-11-10',lastUpdated:'2026-11-10',authorId:'steele-team',excerpt:'What to share when arranging help for a toilet, sink or bathroom fixture.',leadImage:'/images/plumbing-pipes.jpg',relatedServiceSlug:'toilet-sink-fixture-repair',content:{intro:'Describe what is not working, when you first noticed it and whether there is any visible leak. A plumber can discuss the next step.',sections:[{heading:'Explain the symptoms',body:'Mention whether the fixture is leaking, draining slowly or not working as expected.'},{heading:'Ask about the proposed work',body:'Discuss the repair, quote and timing before deciding how to proceed.'}]}},
  {slug:'new-home-plumbing',title:'Plumbing for a new home',category:'New construction',readTime:'3 min read',publishDate:'2026-11-10',lastUpdated:'2026-11-10',authorId:'steele-team',excerpt:'Plumbing fixtures and project details to discuss for a new-home build.',leadImage:'/images/plumbing-technician.jpg',relatedServiceSlug:'new-construction-plumbing',content:{intro:'For a new home build, discuss the plumbing scope, fixtures and water heater with your plumber as you plan the project.',sections:[{heading:'List the fixtures',body:'Share which tubs, sinks, toilets, faucets and other fixtures are part of the project.'},{heading:'Discuss timing and scope',body:'Review the project schedule, proposed plumbing work and quote before work begins.'}]}}
];

export const CUSTOMER_REVIEWS: {name:string;date:string;text:string;rating:number}[] = [
  {name:'Melodie Sanchez',date:'9 months ago',rating:5,text:'“These are good folks.” Melodie says the team was kind, informative and reasonable when she called about plumbing issues.'},
  {name:'David Hutson',date:'2 years ago',rating:5,text:'David says the work has been top notch and describes the team as friendly and helpful.'},
  {name:'James Barnes',date:'9 months ago',rating:5,text:'James calls Steele Plumbing the best plumber in the Tupelo area and praises the team’s knowledge, courtesy and customer service.'},
  {name:'Allison Foster',date:'2 years ago',rating:5,text:'Allison recommends getting a second opinion from John when you receive a high-dollar plumbing quote.'},
  {name:'Christy Garrison',date:'5 years ago',rating:5,text:'Christy describes professional new-home plumbing work that included tubs, sinks, toilets, shower faucets, a garbage disposal and water heater.'},
  {name:'Stella Bragg',date:'5 years ago',rating:5,text:'Stella praises the team for arriving on time and repairing her guest bathroom toilet.'},
  {name:'Michael Holloway',date:'5 years ago',rating:5,text:'Michael says he was pleased with the plumbing work and price, and that the team kept the scheduled appointment.'},
];
