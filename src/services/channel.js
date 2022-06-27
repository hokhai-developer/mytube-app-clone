import httpsRequest from '~/utils/httpsRequest';

export const getChannel = async (channelId) => {
  try {
    const response = await httpsRequest.get('channels', {
      params: {
        part: 'snippet',
        key: 'AIzaSyD_5uon3aJwTEEXBcqVXsuuCqXRnytPUA4',
        id: channelId,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status) return error.response.status;
  }
};
