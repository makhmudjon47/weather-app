import React, { FunctionComponent } from 'react'
import { getWeatherIcon } from '../../../utils'

interface IProps {
    time: string
    desc: string
    temp: string
    icon: string
    city: string
}

const MaxInfo: FunctionComponent<IProps> = ({ time, desc, temp, icon, city }) => (
    <div className="invisible lg:visible absolute bottom-24 left-24 h-[fit-content] w-[fit-content] flex flex-row">
        <div className="relative flex items-end">
            <span className="text-white lg:text-6xl xl:text-8xl">{Math.round(Number.parseFloat(temp))}</span>
            <span className="xl:w-6 xl:h-6 xl:-right-5 xl:border-7 lg:border-4 lg:-right-4 lg:w-4 lg:h-4 absolute border-white top-0 rounded-full"></span>
        </div>
        <div className="flex flex-col gap-2 lg:ml-[2rem] xl:ml-[3rem] justify-end">
            <span className="lg:text-xl xl:text-3xl text-white overflow-ellipsis whitespace-nowrap">{`${city}`}</span>
            <span className="text-[rgba(240,240,240,0.8)] text-base">{time}</span>
        </div>
        <div className="flex flex-col items-center text-white text-xl relative px-4 justify-end">
            <img className="absolute xl:-top-6 lg:-top-14" alt="Loading..." src={getWeatherIcon(icon)} />
            <span>{desc}</span>
        </div>
    </div>
)

export default MaxInfo