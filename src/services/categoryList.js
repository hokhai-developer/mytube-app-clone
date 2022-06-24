import httpsRequest from '~/utils/httpsRequest';

export const getCategoryList = async () => {
  try {
    const response = await httpsRequest.get('videoCategories', {
      params: {
        part: 'snippet',
        key: 'AIzaSyDLsgf7_AP9fUex_OifIqQ4hnwR5fqLHvA',
        regionCode: 'VN',
      },
    });
    return response.data;
  } catch (error) {
    alert(error);
  }
};
