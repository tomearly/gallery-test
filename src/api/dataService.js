import axios from "axios";
import { apiUrl } from "..//config";

const apiToken = "7Ti9ACjjWM-wOpZcDyUfLGeX4p_uruEFCTntbs2TJ6M";

axios.defaults.adapter = require("axios/lib/adapters/http");
axios.interceptors.request.use(
  function(config) {
    config.headers.Authorization = `Client-ID ${apiToken}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const getPhotos = async options => {
  const photos = await axios.get(`${apiUrl}/photos?${options}`);
  return photos.data;
};

export default {
  getPhotos
};
