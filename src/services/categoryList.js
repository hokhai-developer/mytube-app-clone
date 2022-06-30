import httpsRequest from '~/utils/httpsRequest';

export const getCategoryList = async () => {
  try {
    const response = await httpsRequest.get('videoCategories', {
      params: {
        part: 'snippet',
        key: 'AIzaSyA29jsxw6Lrr_iO1tJvHdW_NvkEOJGIQCk',
        regionCode: 'VN',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status) return error.response.status;
  }
};
