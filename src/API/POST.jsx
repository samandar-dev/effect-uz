import axios from "axios";

const token = 'LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg';

const headers = {
   headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": `Bearer ${token}`
   }
}

// const params = {
//    username: "api",
//    password: "apiapiapi",
// }

const LOGIN_URL = "https://simply.uz/api/login";

const POST = {
   login: () => axios.post(LOGIN_URL, params),
   voice: (params) => axios.post(LOGIN_URL, params, headers)
}

export default POST

