import Axios from "axios";

export const GET_ALL_VIDEOS = "GET_ALL_VIDEOS";
export const GET_ALL_VIDEOS_SUCCESS = "GET_ALL_VIDEOS_SUCCESS";
export const GET_ALL_VIDEOS_FAILURE = "GET_ALL_VIDEOS_FAILURE";

export const GET_VIDEO = "GET_VIDEO";
export const GET_VIDEO_SUCCESS = "GET_VIDEO_SUCCESS";
export const GET_VIDEO_FAILURE = "GET_VIDEO_FAILURE";

export const CREATE_VIDEO = "CREATE_VIDEO";
export const CREATE_VIDEO_SUCCESS = "CREATE_VIDEO_SUCCESS";
export const CREATE_VIDEO_FAILURE = "CREATE_VIDEO_FAILURE";

export const UPDATE_VIDEO = "UPDATE_VIDEO";
export const UPDATE_VIDEO_SUCCESS = "UPDATE_VIDEO_SUCCESS";
export const UPDATE_VIDEO_FAILURE = "UPDATE_VIDEO_FAILURE";

export const DELETE_VIDEO = "DELETE_VIDEO";
export const DELETE_VIDEO_SUCCESS = "DELETE_VIDEO_SUCCESS";
export const DELETE_VIDEO_FAILURE = "DELETE_VIDEO_FAILURE";

export const UPDATE_INPUT = "UPDATE_INPUT";
export const UPDATE_INPUT_SUCCESS = "UPDATE_INPUT_SUCCESS";
export const UPDATE_INPUT_FAILURE = "UPDATE_INPUT_FAILURE";

export const getAllVideos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_VIDEOS });
      let dataUrl = `https://poc-mcontent-api.herokuapp.com/api/videos`;
      let response = await Axios.get(dataUrl);
      dispatch({ type: GET_ALL_VIDEOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_VIDEOS_FAILURE, payload: error });
    }
  };
};

export const getVideo = (videoId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_VIDEO });
      let dataUrl = `https://poc-mcontent-api.herokuapp.com/api/videos/${videoId}`;
      let response = await Axios.get(dataUrl);
      dispatch({ type: GET_VIDEO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_VIDEO_FAILURE, payload: error });
    }
  };
};

export const createVideo = (video) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_VIDEO });
      let dataUrl = `https://poc-mcontent-api.herokuapp.com/api/addvideo`;
      let response = await Axios.post(dataUrl, video);
      dispatch({ type: CREATE_VIDEO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_VIDEO_FAILURE, payload: error });
    }
  };
};

export const updateInput = (key, value) => {
  return {
    type: UPDATE_INPUT,
    payload: { key, value },
  };
};

export const updateVideo = (videoId, video) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_VIDEO });
      let dataUrl = `https://poc-mcontent-api.herokuapp.com/api/videos/${videoId}`;
      let response = await Axios.put(dataUrl, video);
      dispatch({ type: UPDATE_VIDEO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_VIDEO_FAILURE, payload: error });
    }
  };
};

export const deleteVideo = (videoId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_VIDEO });
      let dataUrl = `https://poc-mcontent-api.herokuapp.com/api/videos/${videoId}`;
      let response = await Axios.delete(dataUrl);
      dispatch({ type: DELETE_VIDEO_SUCCESS, payload: response.data });
      dispatch(getAllVideos());
    } catch (error) {
      dispatch({ type: DELETE_VIDEO_FAILURE, payload: error });
    }
  };
};
