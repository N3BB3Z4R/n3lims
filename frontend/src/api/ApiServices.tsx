// const apiUrl = import.meta.env.API_BASE_URL
const apiUrl = 'http://localhost:3001'

const getTrials = async () => {
  const res = await fetch(`${apiUrl}/trials`)
  const data = await res.json()
  return data
}
const getProjects = async () => {
  const res = await fetch(`${apiUrl}/projects`)
  const data = await res.json()
  return data
}
const getSamples = async () => {
  const res = await fetch(`${apiUrl}/samples`)
  const data = await res.json()
  return data
}

// TODO REFACTOR THIS TO USE A SINGLE API CALL AND SOME PROVIDERS TO CALL THE APISERVICE
export default { getTrials, getProjects, getSamples }