import { useEffect, useState } from "react";
import { useGetData } from "../../../hooks";
import timezoneService from '../../../services/timezone';
import { getMonthName, getWeekName } from '../../../utils'

function formatter(date: Date): string {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const week = getMonthName(date)
    const month = getWeekName(date)
    const day = date.getDate()
    const year = date.getFullYear()
    return `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes} - ${week}, ${day} ${month} ${year}`
}

export function useData() {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const { position } = useGetData()

    useEffect(() => {
        let mounted = false

        async function worker() {
            setLoading(true)
            try {
                const { data } = await timezoneService.getCurrentTime({ lat: position[0], lng: position[1] })
                if(!mounted) {
                    const date = new Date(data.formatted)
                    const result = formatter(date)
                    setTime(result)
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
        time
    }
}