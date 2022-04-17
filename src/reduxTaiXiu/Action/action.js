import {PLAY_GAME, DAT_CUOC} from '../Content/content';

export const playTaiXiuAction = () => {
    return {
        type: PLAY_GAME
    }
}
export const datCuocTaiXiuAction = (taiXiu) => {
    return {
        type: DAT_CUOC,
        taiXiu
    }
}