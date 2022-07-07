import httpsRequest from '~/utils/httpsRequest';

export const getCommentThreads = async (options) => {
  try {
    const response = await httpsRequest.get('commentThreads', {
      params: { ...options },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};
