import * as videoActions from "./videoActions";

export const videosFeatureKey = "videos";

let initialState = {
  errorMessage: "",
  videos: [],
  video: {},
};

const videoReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case videoActions.GET_ALL_VIDEOS:
      return {
        ...state,
      };

    case videoActions.GET_ALL_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
      };

    case videoActions.GET_ALL_VIDEOS_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };

    case videoActions.GET_VIDEO:
      return {
        ...state,
      };

    case videoActions.GET_VIDEO_SUCCESS:
      return {
        ...state,
        video: payload,
      };

    case videoActions.GET_VIDEO_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };

    case videoActions.CREATE_VIDEO:
      return {
        ...state,
      };

    case videoActions.CREATE_VIDEO_SUCCESS:
      return {
        ...state,
      };

    case videoActions.CREATE_VIDEO_FAILURE:
      return {
        ...state,
      };

    case videoActions.UPDATE_INPUT:
      return {
        ...state,
        video: {
          ...state.video,
          [payload.key]: payload.value,
        },
      };

    case videoActions.UPDATE_VIDEO:
      return {
        ...state,
      };

    case videoActions.UPDATE_VIDEO_SUCCESS:
      return {
        ...state,
      };

    case videoActions.UPDATE_VIDEO_FAILURE:
      return {
        ...state,
      };

    case videoActions.DELETE_VIDEO:
      return {
        ...state,
      };

    case videoActions.DELETE_VIDEO_SUCCESS:
      return {
        ...state,
      };

    case videoActions.DELETE_VIDEO_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { videoReducer };
