import AxiosInstance from "../axiosInstance";

function GetById(eventId) {
  return AxiosInstance(`events?id=${eventId}`)
}

export default GetById