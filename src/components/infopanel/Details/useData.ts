import { useEffect, useState } from "react";
import { useGetData, useSetData } from "../../../hooks";
import weatherService from '../../../services/weather';

export function useData() {
    const { position } = useGetData()
    const { setTemp, setIcon, setDesc, setCity } = useSetData()

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [cloudy, setCloudy] = useState<string>('')
    const [humidity, setHumidity] = useState<string>('')
    const [wind, setWind] = useState<string>('')

    useEffect(() => {
        let mounted = false

        async function worker() {
            setLoading(true)
            try {
                const { data:  weather } = await weatherService.getCurrentWeather(position[0], position[1])
                if(!mounted) {
                    setTemp(weather.main.temp)
                    setWind(weather.wind.speed)
                    // setCity(weather.name)
                    setCloudy(weather.clouds.all)
                    setIcon(weather.weather[0]?.icon)
                    setHumidity(weather.main.humidity)
                    setDesc(weather.weather[0]?.description)
                }
            } catch(error) {
                if(!mounted) {
                    setError(error.message)
                }
            } finally {
                if(!mounted) {
                    setLoading(false)
                }
            }
        }
        worker()
        return () => { mounted = true }
    }, [position])

    return {
        loading,
        error,
        cloudy,
        humidity,
        wind
    }
}