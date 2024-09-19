import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";

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

export const store = createStore(rootReducer, initialState);