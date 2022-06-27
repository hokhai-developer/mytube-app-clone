import httpsRequest from '~/utils/httpsRequest';

export const getCategoryList = async () => {
  try {
    const response = await httpsRequest.get('videoCategories', {
      params: {
        part: 'snippet',
        key: 'AIzaSyD_5uon3aJwTEEXBcqVXsuuCqXRnytPUA4',
        regionCode: 'VN',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status) return error.response.status;
  }
};
