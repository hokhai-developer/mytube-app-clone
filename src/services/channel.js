import { bindActionCreators } from 'redux';
import httpsRequest from '~/utils/httpsRequest';

export const getChannel = async (options) => {
  try {
    const response = await httpsRequest.get('channels', {
      params: {
        part: options.part,
        key: 'AIzaSyA29jsxw6Lrr_iO1tJvHdW_NvkEOJGIQCk',
        id: options.channelId,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
