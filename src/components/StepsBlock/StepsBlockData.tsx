interface IStepsData {
  id: string
  title: string
  description: string
}

export const stepsData: IStepsData[] = [
  {
    id: '//01',
    title: 'Your Request',
    description:
      'If you are interested, you can contact us to discuss the tasks of your business. Before applying, you need to draw up a clear request.'
  },
  {
    id: '//02',
    title: 'Custom Solution',
    description:
      'At the second stage, our team processes your request and selects the best solutions for you. With future results guaranteed.'
  },
  {
    id: '//03',
    title: 'Launch Agreement',
    description:
      'Client and Black Ocean agree the date and time of start usage of traffic and software for business.'
  }
]
