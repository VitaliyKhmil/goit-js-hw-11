import axios from 'axios';

const BASIC_URL = 'https://pixabay.com/api/';
const URL_KEY = '27690883-978e56c4f986dc8399e7ca8d2';

export const fetchImgParams = {
  key: URL_KEY,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
  page: 1,
  per_page: 40
};

const customAxios = axios.create({
  baseURL: BASIC_URL
});

export const searchImage = async (query) => {
  try {
    const { data } = await customAxios.get("", {
      params: { ...fetchImgParams, query, key: URL_KEY }
    });
    return data;
  } catch (error) {
    return error;
  }
};

