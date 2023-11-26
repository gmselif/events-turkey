import AxiosInstance from "../AxiosInstance";

function GetById(eventId) {
  return AxiosInstance(`events?id=${eventId}`)
}

export default GetById