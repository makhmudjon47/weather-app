export interface IPosition { lat: number, lng: number }
export interface ISuggestion { text: string, placeId: string, matched_substrings: [{ length: number, offset: number }] }