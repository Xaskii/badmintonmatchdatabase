import axios from 'axios'

const baseURL = 'http://localhost:3003/api/matches'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
