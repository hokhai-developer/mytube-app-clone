import httpsRequest from '~/utils/httpsRequest';

export const getVideos = async (options) => {
  try {
    const response = await httpsRequest.get('videos', {
      params: { ...options },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
