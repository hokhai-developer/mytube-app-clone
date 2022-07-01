import httpsRequest from '~/utils/httpsRequest';

export const getCategoryList = async (options) => {
  try {
    const response = await httpsRequest.get('videoCategories', {
      params: { ...options },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
