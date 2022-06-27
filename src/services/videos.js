import httpsRequest from '~/utils/httpsRequest';

export const getVideos = async (options) => {
  try {
    const response = await httpsRequest.get('videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        key: 'AIzaSyD_5uon3aJwTEEXBcqVXsuuCqXRnytPUA4',
        chart: 'mostPopular',
        regionCode: 'VN',
        maxResults: 12,
        videoCategoryId: options.videoCategoryId,
        pageToken: options.pageToken,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status) return error.response.status;
  }
};
