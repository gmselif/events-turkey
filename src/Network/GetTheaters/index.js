import AxiosInstance from "../AxiosInstance";

function GetTheaters() {
  return AxiosInstance("events?eventType=theatre")
}

export default GetTheaters