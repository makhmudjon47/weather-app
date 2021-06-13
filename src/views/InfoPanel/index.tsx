import React, { FunctionComponent } from 'react'
import Header from '../../components/infopanel/Header'
import Suggestions from '../../components/infopanel/Suggestions'
import Details from '../../components/infopanel/Details'
import Forecasts from '../../components/infopanel/Forecasts'

interface IProps {}

const InfoPanel: FunctionComponent<IProps> = () => {
    return (
        <div className="z-10 info-panel overflow-auto">
            <Header />
            <Suggestions />
            <Details />
            <Forecasts />
        </div>
    )
}

export default InfoPanel