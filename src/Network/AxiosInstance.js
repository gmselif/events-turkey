import axios from 'axios'

async function AxiosInstance(dataName) {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/${dataName}`)
  return data
}

export default AxiosInstance