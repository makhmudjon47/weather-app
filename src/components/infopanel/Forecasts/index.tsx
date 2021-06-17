import React, { FunctionComponent } from 'react'
import { getWeatherIcon } from '../../../utils'
import { useData } from './useData'
import { useHistory } from 'react-router-dom'

interface IProps {}

function formatter(value: number) {
    return <span className="relative ml-1 mr-2 border-inherit info-celsius">{Math.round(value)}</span>
}

const Forecasts: FunctionComponent<IProps> = () => {
    const history = useHistory()
    const { error, forecasts } = useData()

    if(error) return <span>{error}</span>

    return (
        <div className="relative overflow-auto mx-14 py-10">
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
                            forecasts?.map((data, index) => (
                                <tr onClick={() => history.push(data.weekString.toLowerCase())} key={index} className="group leading-10 whitespace-nowrap text-primary-3 cursor-pointer hover:text-primary-1">
                                    <td>
                                        <span>{data.weekString}</span>
                                        <span className="ml-4 relative border-primary-3 group-hover:border-primary-1">{formatter(data.min_temp)}/{formatter(data.max_temp)}</span>
                                    </td>
                                    <td>{data.dateString}</td>
                                    <td className="flex items-center">
                                        <span className="ml-2">{data.status.desc}</span>
                                        <img className="w-8 h-8 ml-4" alt="." src={getWeatherIcon(data.status.icon)} />
                                    </td>
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