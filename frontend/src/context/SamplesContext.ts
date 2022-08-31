import { createContext } from 'react'
import { SampleType as Sample } from '../types/SamplesType'

// write a context to manage the samples endpoint with state and actions
const SamplesContext = createContext({
  getSamples: () => {
    return
  },
  addSample: (sample: Sample) => {
    return
  },
  updateSample: (sample: Sample) => {
    return new Promise((resolve, reject) => {
      reject()
    })
  },
  deleteSample: (id: number) => {
    return new Promise((resolve, reject) => {
      reject()
    })
  },
})

export default SamplesContext
