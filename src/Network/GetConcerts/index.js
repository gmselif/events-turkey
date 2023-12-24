import AxiosInstance from "../AxiosInstance";

function GetConcerts() {
  return AxiosInstance("events?eventType=concert")
}

export default GetConcerts