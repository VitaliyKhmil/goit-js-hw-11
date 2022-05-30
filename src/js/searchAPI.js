import axios from 'axios';

export default async (name, page, limit) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?image_type=photo&safesearch=true&orientation=horizontal&q=${name}&page=${page}&per_page=${limit}&key=27690883-978e56c4f986dc8399e7ca8d2`
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
