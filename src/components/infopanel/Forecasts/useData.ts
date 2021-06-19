import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useGetData, useSetData } from "../../../hooks";
import { IForecast } from "../../../hooks/types";
import weatherService from '../../../services/weather';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function mapToForecast(data: any[]): IForecast[] {
    return data.map(item => {
        const date = new Date(item.dt_txt)
        return {
            date,
            weekString: dayNames[date.getDay()],
            dateString: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
            min_temp: item.temp_min || item.main.temp_min,
            max_temp: item.temp_max || item.main.temp_max,
            status: {
                desc: item.weather[0]?.description,
                icon: item.weather[0]?.icon
            }
        }
    })
}

function filterHourly(data: any[], week: string): any[] {
    return data.filter((item: any) => {
        const date = new Date(item.dt_txt)
        return date.getDay() === dayNames.map(v => v.toLowerCase()).indexOf(week)
    })
}

function filterWeekly(data: any[]): any[] {
    const result: any[] = []
    data.forEach((item: any) => {
        const date = new Date(item.dt_txt)
        const { temp_min, temp_max } = item.main
        const resultItem = result[result.length - 1]
        if((date.getDate() === resultItem?.date?.getDate())) {
            if(Number.parseFloat(temp_min) < resultItem.temp_min) {
                resultItem.temp_min = Number.parseFloat(temp_min)
            }
            if(Number.parseFloat(temp_max) > resultItem.temp_max) {
                resultItem.temp_max = Number.parseFloat(temp_max)
            }
        } else {
            result.push({ ...item, temp_min, temp_max, date })
        }
    })
    return result
}

export function useData() {
    const [data, setData] = useState<any[]>([])

    const history = useHistory()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [forecasts, setForecasts] = useState<IForecast[]>()

    const { position } = useGetData()
    const { setHourlyData } = useSetData()

    useEffect(() => {
        const unregister = history.listen(function(location: any) {
            const expected = `${location.pathname?.split('/')[1]}`
            if(dayNames.map(v => v.toLowerCase()).includes(expected)) {
                const filtered = filterHourly(data, expected)
                const result = mapToForecast(filtered)
                setHourlyData(result)
            } else {
                setHourlyData([])
            }
        })
        return () => { unregister() }
    }, [data])

    useEffect(() => {
        let mounted = false

        async function worker() {
            setLoading(true)
            try {
                const { data } = await weatherService.getForecastWeather(position[0], position[1])
                if(!mounted) {
                    const filtered = filterWeekly(data.list)
                    const predictions = mapToForecast(filtered)
                    setData(data.list)
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