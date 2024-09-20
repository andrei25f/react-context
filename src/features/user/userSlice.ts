import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'User',
        avatar: 'https://gravatar.com/avatar/000?d=mp'
    },
    reducers: {
        changeName: (state, action) => {
            //return { ...state, name: action.payload || state.name };
            state.name = action.payload || state.name;
        },
        changeAvatar: (state, action) => {
            state.avatar = action.payload || state.avatar;
        }
    }
})

export const { changeAvatar, changeName } = userSlice.actions

export default userSlice.reducer