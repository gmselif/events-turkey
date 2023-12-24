import AxiosInstance from "../axiosInstance";

async function GetAll() {
  return AxiosInstance("events")
}

export default GetAll