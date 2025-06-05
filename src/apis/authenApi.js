import axios from "axios";

const BASE_URL = 'http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com'

const todoApi = {};
todoApi.login = async(input) => {
  return axios.post(`${BASE_URL}/api/V1/auth/login`,input)
}
todoApi.register = async(input) => {
  return axios.post(`${BASE_URL}/api/V1/auth/register`,input)
}
export default todoApi;

