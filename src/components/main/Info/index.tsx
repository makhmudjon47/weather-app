import React, { FunctionComponent } from 'react'
import { useGetData } from '../../../hooks'
import { useData } from './useData'
import Max from './Max'
import Mini from './Mini'

const Info: FunctionComponent = () => {
    const { city, temp, icon, desc } = useGetData()
    const { error, time } = useData()

    if(error) return <span>{error}</span>

    return city && temp && icon && (
        <>
            <Max time={time} desc={desc} temp={temp} icon={icon} city={city}/>
            <Mini time={time} desc={desc} temp={temp} icon={icon} city={city}/>
        </>
    ) || <></>
}

export default Info