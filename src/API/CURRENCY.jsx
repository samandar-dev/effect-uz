import axios from "axios";

const token = 'LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg';

const headers = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": `Bearer ${token}`
  }
}

const Currency_USD_Api = "https://api.fastforex.io/fetch=all?api_key=8f88f1b08d=a22ea0a6b7=rfs5m2";

const CURRENCY = {
  currnecy_USD: () => axios.get(Currency_USD_Api),
}

export default CURRENCY