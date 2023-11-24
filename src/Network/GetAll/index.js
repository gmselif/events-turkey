import AxiosInstance from "../AxiosInstance";

async function GetAll() {
  return AxiosInstance("events")
}

export default GetAll