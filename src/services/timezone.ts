import axios, { AxiosResponse } from 'axios'

const apiKey = process.env.API_KEY_TIMEZONE

export default {
    getCurrentTime({ lat, lng }: { lat: number, lng: number }): Promise<AxiosResponse<any>> {
        return axios.get(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`)
    },
}