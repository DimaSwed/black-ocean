interface Service {
  title: string
  description: string
  bulletPoints: string[]
}

export const services: Service[] = [
  {
    title: 'iOS Apps',
    description:
      'Black Ocean develops applications for macOS for any business need. Our experts can fulfill any of your whims.',
    bulletPoints: [
      'Custom iOS applications tailored to your business needs.',
      'Tailored traffic solutions for your goals.',
      'Scalable solutions designed to adapt to market growth.'
    ]
  },
  {
    title: 'Android Apps',
    description:
      'Our company creates Android apps for any business need. You will be satisfied with the result.',
    bulletPoints: [
      'Android apps crafted for diverse business requirements.',
      'Intuitive interfaces optimized for user engagement.',
      'Seamless compatibility across Android devices.',
      'Regular updates and technical support to maintain app quality.'
    ]
  },
  {
    title: 'macOS',
    description: 'We provide service creating macOS apps and technical support for macOS.',
    bulletPoints: [
      'High-performance macOS app development.',
      'Native macOS feature integration.',
      'Comprehensive technical support tailored to your needs.',
      'Apps designed for scalability and future expansion.',
      'Fully customized solutions for your industry.'
    ]
  },
  {
    title: 'CRM',
    description: 'Our specialists will build up the most effective CRM system for your business.',
    bulletPoints: [
      'Customized CRM systems to optimize business processes.',
      'Automation tools to enhance customer engagement.',
      'Real-time reporting and analytics for data-driven decisions.',
      'Scalable and flexible solutions to grow with your business.'
    ]
  },
  {
    title: 'Analysis',
    description:
      'Analyzing the digital business structure our team will find mistakes and opportunities which will bring a profit.',
    bulletPoints: [
      'Digital analysis to find growth areas.',
      'Insights to fix inefficiencies.',
      'Strategic recommendations backed by data.'
    ]
  },
  {
    title: 'Web-Traffic',
    description: 'Black Ocean delivers effective web traffic using CPA, CPC, and CPL models.',
    bulletPoints: [
      'Efficient web traffic via CPA, CPC, CPL.',
      'Targeted strategies to attract a solvent audience.',
      'Ongoing optimization to maximize conversions.',
      'Transparent reporting and analytics for campaign performance.',
      'Personalized traffic solutions to meet your business goals.'
    ]
  }
]
