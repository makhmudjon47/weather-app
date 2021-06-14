import axios, { AxiosResponse } from 'axios'

const apiKey = process.env.API_KEY_OPENWEATHER

export default {
    getCurrentWeather(lat: number, lng: number): Promise<AxiosResponse<any>> {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`)
    },
    getForecastWeather(lat: number, lng: number): Promise<AxiosResponse<any>> {
        return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`)
    }
}