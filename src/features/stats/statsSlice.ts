import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatsSliceState {
    followers: number
    following: number
}

const initialState: StatsSliceState = {
    followers: 0,
    following: 0
}

interface ChangeStats {
    statsType: string,
    sum: number
}

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        changeStats: (state, action: PayloadAction<ChangeStats>) => {
            let res = state[action.payload.statsType as keyof StatsSliceState] + action.payload.sum;
            res = res < 0 ? 0 : res;
            state[action.payload.statsType as keyof StatsSliceState] = res;
        }
    }
})

export const { changeStats } = statsSlice.actions;

export default statsSlice.reducer;