import axios, { AxiosInstance } from "axios";
axios.defaults.withCredentials = true;
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.SERVER_FASHION,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}
const http = new Http().instance;
export default http;
