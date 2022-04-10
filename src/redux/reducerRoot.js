import { combineReducers } from 'redux'; //combineReducers -> enter
import BauCuaTomCaReducer from './reducer/reducer';

//store tổng ứng dụng
export const rootReducer = combineReducers({ //combineReducers: tổng hợp tất cả các reducer
    BauCuaTomCaReducer
});