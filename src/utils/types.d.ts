export interface User {
    name: string,
    avatar: string
}

export interface Stats {
    followers: number,
    following: number
}

export type StatsType = keyof Stats;

export interface TwitterContextValue {
    user: User,
    stats: Stats,
    changeName: (url: string | null) => void,
    changeAvatar: (url: string | null) => void,
    changeStats: (statsType: StatsType, sum: number) => void
}