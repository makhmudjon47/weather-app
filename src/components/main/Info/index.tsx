import React, { FunctionComponent } from 'react'
import { useGetData } from '../../../hooks'
import { getWeatherIcon } from '../../../utils'
import { useData } from './useData'

const Info: FunctionComponent = () => {
    const { city, temp, icon, desc } = useGetData()
    const { error, time } = useData()

    if(error) return <span>{error}</span>

    return (
        <div className="absolute bottom-24 left-24 h-[fit-content] w-[fit-content] flex flex-row">
            <div className="relative flex items-end celsius">
                <span className="text-white text-8xl">{Math.round(Number.parseFloat(temp))}</span>
            </div>
            <div className="flex flex-col gap-2 ml-[3rem] justify-end">
                <span className="text-3xl text-white overflow-ellipsis whitespace-nowrap">{`${city}`}</span>
                <span className="text-[rgba(240,240,240,0.8)] text-base">{time}</span>
            </div>
            <div className="flex flex-col items-center text-white text-xl px-8 justify-center">
                <img alt="Loading..." src={getWeatherIcon(icon)} />
                <span>{desc}</span>
            </div>
        </div>
    )
}

export default Info