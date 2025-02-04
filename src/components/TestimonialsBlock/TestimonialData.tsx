interface ITestimonial {
  id: number
  name: string
  position: string
  image: string
  tasks: string[]
  feedback: string
}

export const testimonialsData: ITestimonial[] = [
  {
    id: 1,
    name: 'Jan Novák',
    position: 'CEO',
    image: '/team/Jan Novák-avatar.png',
    tasks: [
      'Developed a custom CRM system',
      'Boosted web traffic and visibility',
      'Provided technical support'
    ],
    feedback:
      'Working with Black Ocean has been transformative for our business. Their tailored software solutions and expert traffic management have significantly increased our online visibility and revenue.'
  },
  {
    id: 2,
    name: 'Michael Johnson',
    position: 'Founder',
    image: '/team/Michael Johnson-avatar.png',
    tasks: [
      'Created business automation software',
      'Ran CPA and CPC campaigns',
      'Scaled digital operations'
    ],
    feedback:
      'Their innovative approach to software development and web traffic optimization has made a noticeable difference in our operations. Black Ocean is truly a reliable partner for growth.'
  },
  {
    id: 3,
    name: 'Eva Kovářová',
    position: 'Marketing Director',
    image: '/team/Eva Kovářová-avatar.png',
    tasks: [
      'Analyzed the digital structure',
      'Enhanced SEO performance',
      'Delivered optimized workflows'
    ],
    feedback:
      'Black Ocean impressed us with their professionalism and attention to detail. They quickly understood our needs and delivered solutions that exceeded all our expectations.'
  },
  {
    id: 4,
    name: 'Daniel White-avatar',
    position: 'COO',
    image: '/team/Daniel White-avatar.png',
    tasks: [
      'Designed scalable software.',
      'Optimized digital campaigns.',
      'Provided ongoing support.'
    ],
    feedback:
      'I was amazed by Black Ocean’s ability to handle complex challenges with ease. Their expertise and dedication helped us achieve our goals faster than anticipated.'
  },
  {
    id: 5,
    name: 'Sophia Brown',
    position: 'Ecommerce Manager',
    image: '/team/Sophia Brown-avatar.png',
    tasks: [
      'Improved web traffic strategies.',
      'Boosted conversions by 40%.',
      'Enhanced website performance.'
    ],
    feedback:
      'Black Ocean’s team delivered exceptional results for our online store. Their strategies for web traffic optimization increased our conversions by 40% in just three months.'
  },
  {
    id: 6,
    name: 'Emma Wilson',
    position: 'Project Manager',
    image: '/team/Emma Wilson-avatar.png',
    tasks: [
      'Designed scalable software.',
      'Optimized digital campaigns.',
      'Provided ongoing support.'
    ],
    feedback:
      'From consultation to execution, Black Ocean delivered with precision and creativity. Their traffic solutions brought us measurable results, and their team was a pleasure to work with.'
  }
]
