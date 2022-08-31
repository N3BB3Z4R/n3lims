import { SampleType as Sample, Action } from '../types/SamplesType'
// Write a reducer to manage SamplesContext state
export default (state: Sample[], action: Action) => {
  switch (action.type) {
    case 'GET_SAMPLES':
      return action.payload
    case 'ADD_SAMPLE':
      return [...state, action.payload]
    case 'UPDATE_SAMPLE':
      return state.map((sample) =>
        sample.SampleID === action.payload.SampleID ? action.payload : sample
      )
    case 'DELETE_SAMPLE':
      return state.filter((sample) => sample.SampleID !== action.payload)
    default:
      return state
  }
}
