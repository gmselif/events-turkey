import AxiosInstance from "../axiosInstance";

function GetTheaters() {
  return AxiosInstance("events?eventType=theatre")
}

export default GetTheaters