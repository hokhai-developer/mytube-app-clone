import httpsRequest from '~/utils/httpsRequest';

export const getVideos = async (options) => {
  try {
    const response = await httpsRequest.get('videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        key: 'AIzaSyA29jsxw6Lrr_iO1tJvHdW_NvkEOJGIQCk',
        chart: options.chart,
        regionCode: 'VN',
        maxResults: options.maxResults,
        videoCategoryId: options.videoCategoryId,
        pageToken: options.pageToken,
        id: options.videoId,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status) return error.response.status;
  }
};
