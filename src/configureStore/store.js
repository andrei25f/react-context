import { legacy_createStore as createStore } from "redux";
import { twitterReducer } from "../reducer/twitterReducer";

const initialState = {
    user: {
        name: 'User',
        avatar: 'https://gravatar.com/avatar/000?d=mp'
    },
    stats: {
        followers: 0,
        following: 0
    }
}

export const store = createStore(twitterReducer, initialState);