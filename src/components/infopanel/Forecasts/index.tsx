import React, { FunctionComponent } from 'react'

interface IProps {}

const forecasts = [
    {
        day: 'Monday',
        date: '12-06-2021',
        status: 'Sunny',
        icon: 'IC'
    },
    {
        day: 'Tuesday',
        date: '12-06-2021',
        status: 'Sunny',
        icon: 'IC'
    },
    {
        day: 'Wednesday',
        date: '12-06-2021',
        status: 'Sunny',
        icon: 'IC'
    },
    {
        day: 'Thursday',
        date: '12-06-2021',
        status: 'Sunny',
        icon: 'IC'
    },
    {
        day: 'Friday',
        date: '12-06-2021',
        status: 'Sunny',
        icon: 'IC'
    },
]

const Forecasts: FunctionComponent<IProps> = () => {
    return (
        <div className="relative mx-14 py-10">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#849098]"/>
            <div>
                <table className="w-full text-primary-1 text-left">
                    <thead>
                        <th>DAYS</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                    </thead>
                    <tbody>
                        {
                            forecasts.map((data, index) => (
                                <tr key={index} className="leading-10 whitespace-nowrap text-primary-3 cursor-pointer hover:text-primary-1">
                                    <td>{data.day}</td>
                                    <td>{data.date}</td>
                                    <td>{`${data.status} ${data.icon}`}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Forecasts