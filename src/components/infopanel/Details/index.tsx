import React, { FunctionComponent, useMemo } from 'react'
import { useGetData } from '../../../hooks'
import { useData } from './useData'

interface IProps {}

const Details: FunctionComponent<IProps> = () => {
    const { humidity, cloudy, wind, error, loading } = useData()
    const { suggestions } = useGetData()

    const details = useMemo(() => [
        { name: 'Cloudy', value: cloudy + '%' },
        { name: 'Humidity', value: humidity + '%' },
        { name: 'Wind', value: wind + ' km/s' }
    ], [cloudy, humidity, wind])

    if(error) <span>{error}</span>
    if(loading) <span>Loading...</span>

    return (
        <div className="mx-14 relative py-10 gap-2 flex flex-col">
            { suggestions.length ? <div className="absolute top-0 left-0 w-full h-[1px] bg-[#849098]"/> : '' }
            <span className="text-primary-1 pb-4 text-base">Weather Details</span>
            {
                details.map((info, index) => (
                    <div key={index} className="leading-10 flex justify-between text-base text-primary-3">
                        <span>{info.name}</span>
                        <span>{info.value}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Details