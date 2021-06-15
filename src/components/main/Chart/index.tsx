import React, { FunctionComponent, useMemo, useState, useEffect } from 'react'
import { useGetData } from '../../../hooks'
import { getMonthName, getWeekName } from '../../../utils'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { options } from './options'

export default () => {
    const { hourlyData } = useGetData()
    const [data, setData] = useState([])
    const [date, setDate] = useState('')

    function setFormattedDate(date) {
      const formatted = getWeekName(date) + ', ' + date.getDate() + ' ' + getMonthName(date) +' ' + date.getFullYear();
      setDate(formatted)
    }

    useEffect(() => {
      if(hourlyData.length) {
        setData([])
        setFormattedDate(hourlyData[0].date)
        hourlyData.forEach((item, index) => {
          const hours = item.date.getHours()
          const minutes = item.date.getMinutes()
          const time = `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}`
          setData(v => [...v, {
            time,
            x: index + 1,
            y: item.max_temp,
            celsius: Math.round(item.max_temp),
            icon: item.status.icon
          }])
        })
      }
    }, [hourlyData])

    const chartOptions = useMemo(() => ({ ...options, series: { name: 'weather-data', data } }), [options, data]);

  return hourlyData.length ? (
      <div className="text-white px-8 absolute top-auto rounded-md left-auto shadow-md w-[80%] bg-[rgba(0,0,0,0.4)]">
          <div className="flex justify-center py-8 text-primary-1 text-2xl">
            <span>{date}</span>
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
      </div>
  ) : ''
}