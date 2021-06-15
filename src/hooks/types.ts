export interface IPosition {
    lat: number,
    lng: number
}
export interface ISuggestion {
    text: string,
    placeId: string,
    matched_substrings: [
        {
            length: number,
            offset: number
        }
    ]
}
export interface IForecast {
    date: Date,
    min_temp: number,
    max_temp: number,
    weekString: string,
    dateString: string,
    status: {
        desc: string
        icon: string
    }
}