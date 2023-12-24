import AxiosInstance from "../AxiosInstance";

function GetFestivals() {
  return AxiosInstance("events?eventType=festival")
}

export default GetFestivals