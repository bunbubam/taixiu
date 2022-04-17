import { combineReducers } from 'redux';
import BauCuaTomCaReducer from './redux/reducer/reducer';
import TaiXiuReducer from './reduxTaiXiu/Reducer/reducer';

//store tổng ứng dụng
export const rootReducer = combineReducers({ //combineReducers: tổng hợp tất cả các reducer
    BauCuaTomCaReducer,
    TaiXiuReducer
});