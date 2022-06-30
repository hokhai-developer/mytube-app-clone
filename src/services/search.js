import httpsRequest from '~/utils/httpsRequest';

export const Search = async (options) => {
  try {
    const response = await httpsRequest.get('search', {
      params: { ...options },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
