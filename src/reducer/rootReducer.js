/*
type State = {
    user: {
        name: string,
        avatar: string
    },
    stats: {
        followers: number,
        following: number
    }
}
*/

import { combineReducers } from "redux";
import { statsReducer } from "./statsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})