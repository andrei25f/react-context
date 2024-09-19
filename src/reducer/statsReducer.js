/*
type State = {
    followers: number,
    following: number
}
*/

import { CHANGE_STATS } from "../actions/statsAction";

const defaultState = {
    followers: 0,
    following: 0
}

export const statsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_STATS:
            let res = state[action.payload.statsType] + action.payload.sum;
            res = res < 0 ? 0 : res;
            return { ...state, [action.payload.statsType]: res };
        default:
            return state;
    }
}