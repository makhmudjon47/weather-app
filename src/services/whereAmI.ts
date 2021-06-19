import axios, { AxiosResponse } from 'axios'

const apiKey = process.env.API_KEY_GEOLOCATION

export default {
    whereAmI(): Promise<AxiosResponse<any>> {
        return axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`)
    }
}