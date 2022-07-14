// const apiUrl = import.meta.env.API_BASE_URL
const apiUrl = 'http://localhost:3001'

const getTrials = async () => {
  const res = await fetch(`${apiUrl}/trials`)
  const data = await res.json()
  return data
}
export default { getTrials }