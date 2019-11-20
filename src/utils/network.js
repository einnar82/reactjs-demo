import axios from "axios";

const httpClient = params => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });
  return instance.request(params)
}

export default httpClient;