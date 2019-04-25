import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    };

    searchYouTube(options, (response) => {
      dispatch(changeVideoList(response));
      dispatch(changeVideo(response[0]));
    });
  };

  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;

// var videos = ;
// dispatch(changeVideoList(videos));
// dispatch(changeVideo(videos[0]));