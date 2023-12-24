import AxiosInstance from "../AxiosInstance";

function GetStandups() {
  return AxiosInstance("events?eventType=standup")
}

export default GetStandups