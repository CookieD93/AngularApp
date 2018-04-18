export interface Movie {
    vote_average : number
    vote_count : number
    id: number
    video : boolean
    media_type: string
    title: string
    popularity : number
    poster_path : string
    original_language: string
    original_title: string
    genre_ids : number[]
    genres : string[]
    backdrop_path: string
    adult: boolean
    overview: string
    release_date: Date
};