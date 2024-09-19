import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceState {
    name: string
    avatar: string
}

const initialState: UserSliceState = {
    name: 'User',
    avatar: 'https://gravatar.com/avatar/000?d=mp'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string | null>) => {
          state.name = action.payload || state.name
        },
        changeAvatar: (state, action: PayloadAction<string | null>) => {
          state.avatar = action.payload || state.avatar
        }
    }
})

export const { changeName, changeAvatar } = userSlice.actions;

export default userSlice.reducer;