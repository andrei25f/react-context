import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Stats } from "../../utils/types";

interface StatsPayload {
    sum: number,
    statsType: keyof Stats
}

export const statsSlice = createSlice({
    name: 'slice',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action: PayloadAction<StatsPayload>) => {
                let res = state[action.payload.statsType] + action.payload.sum;
                res = res < 0 ? 0 : res;
                state[action.payload.statsType] = res;
            },
            prepare: (statsType, sum) => ({ payload: { statsType, sum } })
        }
    }
})

export const { changeStats } = statsSlice.actions

export default statsSlice.reducer