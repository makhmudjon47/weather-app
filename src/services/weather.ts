import axios, { AxiosResponse } from 'axios'

const apiKey = process.env.API_KEY_OPENWEATHER

export default {
    getCurrentWeather(where: string): Promise<AxiosResponse<any>> {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${where}&appid=${apiKey}`)
    }
}