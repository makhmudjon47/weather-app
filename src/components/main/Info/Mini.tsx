import React, { FunctionComponent } from 'react'
import { getWeatherIcon } from '../../../utils'

interface IProps {
    time: string
    desc: string
    temp: string
    icon: string
    city: string
}

const MiniInfo: FunctionComponent<IProps> = ({ time, desc, temp, icon, city }) => (
    <div className="lg:invisible">
        <div className="relative flex justify-center items-end">
            <span className="text-white text-8xl">{Math.round(Number.parseFloat(temp))}</span>
            <span className="w-5 h-5 left-26 top-0 border-4 absolute border-white rounded-full"></span>
            <div className="flex flex-col items-center text-white text-xl relative pl-2 justify-end">
                <img alt="Loading..." src={getWeatherIcon(icon)} />
            </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <span className="text-3xl my-2  text-white overflow-ellipsis whitespace-nowrap">{`${city}`}</span>
            <span className="text-[rgba(240,240,240,0.8)] text-base">{time}</span>
        </div>
    </div>
)

export default MiniInfo