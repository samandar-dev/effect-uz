import axios from "axios";

const token = 'LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg';

const headers = {
   headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": `Bearer ${token}`
   }
}

const LOGIN_URL = "https://simply.uz/api/login";
const COMMENT_URL = "https://simply.uz/api/comment"

const POST = {
   login: () => axios.post(LOGIN_URL),
   comment: (params) => axios.post(COMMENT_URL, params, headers)
}

export default POST

