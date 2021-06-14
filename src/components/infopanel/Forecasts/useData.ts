import { useEffect, useState } from "react";
import { useGetData } from "../../../hooks";
import weatherService from '../../../services/weather';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface IForecast {
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

function formatter(data: any[]): IForecast[] {
    const result: IForecast[] = []

    data.forEach(item => {
        const date = new Date(item.dt_txt)
        const { temp_min, temp_max } = item.main
        const resultItem = result[result.length - 1]

        if((date.getDate() === resultItem?.date.getDate())) {
            if(Number.parseFloat(temp_min) < resultItem.min_temp) {
                resultItem.min_temp = Number.parseFloat(temp_min)
            }
            if(Number.parseFloat(temp_max) > resultItem.max_temp) {
                resultItem.max_temp = Number.parseFloat(temp_max)
            }
        } else {
            result.push({
                date,
                weekString: dayNames[date.getDay()],
                dateString: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
                min_temp: Number.parseFloat(temp_min),
                max_temp: Number.parseFloat(temp_max),
                status: {
                    desc: item.weather[0]?.description,
                    icon: item.weather[0]?.icon
                }
            })
        }
    })

    return result
}

export function useData() {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const { position } = useGetData()
    const [forecasts, setForecasts] = useState<IForecast[]>()

    useEffect(() => {
        let mounted = false

        async function worker() {
            setLoading(true)
            try {
                const { data } = await weatherService.getForecastWeather(position[0], position[1])
                if(!mounted) {
                    const predictions = formatter(data.list)
                    setForecasts(predictions)
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
        forecasts
    }
}