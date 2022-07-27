import {combineReducers} from 'redux';

import {videosFeatureKey,videoReducer} from './videos/videoReducer'

let rootReducer = combineReducers({
   [videosFeatureKey]: videoReducer
});

export {rootReducer};