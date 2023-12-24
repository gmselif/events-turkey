import AxiosInstance from "../axiosInstance";

function GetFestivals() {
  return AxiosInstance("events?eventType=festival")
}

export default GetFestivals