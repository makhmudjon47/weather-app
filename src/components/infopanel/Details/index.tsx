import React, { FunctionComponent } from 'react'

interface IProps {}

const details = [
    {
        name: 'Cloudy',
        value: '86%'
    },
    {
        name: 'Humidity',
        value: '62%'
    },
    {
        name: 'Wind',
        value: '8 km/s'
    }
]

const Details: FunctionComponent<IProps> = () => {
    return (
        <div className="mx-14 relative py-10 gap-2 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#849098]"/>
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