import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: 'https://akash-newspaper-server.vercel.app',

});
const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;


