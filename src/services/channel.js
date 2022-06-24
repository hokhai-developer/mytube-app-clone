import httpsRequest from '~/utils/httpsRequest';

export const getChannel = async (options) => {
  try {
    const response = await httpsRequest.get('channels', {
      params: { ...options },
    });
    return response.data;
  } catch (error) {
    alert(error);
  }
};
