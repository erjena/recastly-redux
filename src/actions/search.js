import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var videos = searchYouTube({ key: YOUTUBE_API_KEY, query: q });
  dispatch(changeVideoList(videos));
  dispatch(changeVideo(videos[0]));

  return {
    type: 'HANDLE_VIDEO_SEARCH',
    videos: videos
  };

  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
