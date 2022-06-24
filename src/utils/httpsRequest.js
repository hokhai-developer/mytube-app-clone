import axios from 'axios';

const httpsRequest = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});

export const get = async (path, options = {}) => {
  const response = await httpsRequest.get(path, options);
  return response.data;
};

export default httpsRequest;
