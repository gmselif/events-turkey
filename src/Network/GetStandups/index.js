import AxiosInstance from "../axiosInstance";

function GetStandups() {
  return AxiosInstance("events?eventType=standup")
}

export default GetStandups