import AxiosInstance from "../axiosInstance";

function GetConcerts() {
  return AxiosInstance("events?eventType=concert")
}

export default GetConcerts