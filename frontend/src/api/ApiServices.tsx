// const apiUrl = import.meta.env.API_BASE_URL
const apiUrl = 'http://localhost:3001'

const getTrials = async () => {
  try {
    const res = await fetch(`${apiUrl}/trials`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
const getProjects = async () => {
  try {
    const res = await fetch(`${apiUrl}/projects`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
const getSamples = async () => {
  try {
    const res = await fetch(`${apiUrl}/samples`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

// TODO REFACTOR THIS TO USE A SINGLE API CALL AND SOME PROVIDERS TO CALL THE APISERVICE
export default { getTrials, getProjects, getSamples }