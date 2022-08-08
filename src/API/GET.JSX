import axios from "axios";

const token = 'LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg';

const headers = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": `Bearer ${token}`
  }
}

const MORE_URL = "https://simply.uz/api/more";
const ALL_VOICE = "https://simply.uz/api/voices";
const VIDEOS = "https://simply.uz/api/news-video";
const CONFIG_URL = "https://simply.uz/api/config";
const VOICE = "https://simply.uz/api/voice-one?id";
const CATEGORY_URL = "https://simply.uz/api/category";
const PROVENCE_URL = "https://simply.uz/api/provence";
const NEWS__ALL_URL = "https://simply.uz/api/news-all";
const NEWS_ITEM_URL = "https://simply.uz/api/new?id";
const REPORTER = "https://simply.uz/api/reporter?id";
const CATEGOR_ID = "https://simply.uz/api/news-category?id";
const PROVENCE_ID = "https://simply.uz/api/news-provence?id";

const GET = {
  more: () => axios.get(MORE_URL, headers),
  videos: () => axios.get(VIDEOS, headers),
  config: () => axios.get(CONFIG_URL, headers),
  voiceAll: () => axios.get(ALL_VOICE, headers),
  category: () => axios.get(CATEGORY_URL, headers),
  provence: () => axios.get(PROVENCE_URL, headers),
  newsAll: () => axios.get(NEWS__ALL_URL, headers),
  voiceItem: (ID) => axios.get(`${VOICE}=${ID}`, headers),
  reporter: (ID) => axios.get(`${REPORTER}=${ID}`, headers),
  categorID: (ID) => axios.get(`${CATEGOR_ID}=${ID}`, headers),
  newsItem: (ID) => axios.get(`${NEWS_ITEM_URL}=${ID}`, headers),
  provenceID: (ID) => axios.get(`${PROVENCE_ID}=${ID}`, headers),
}

export default GET
