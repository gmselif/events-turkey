import axios from 'axios'

async function GetAll() {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/events`)
  return data
}

export default GetAll