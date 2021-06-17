import React, { FunctionComponent } from 'react'
import MainPanel from '../../views/MainPanel'
import InfoPanel from '../../views/InfoPanel'
import { useData } from './useData'
import { useGetData } from '../../hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import WeatherImage from '../../components/WeatherImage'

interface IProps {}

const App: FunctionComponent<IProps> = () => {
    const { loading, error } = useData()
    const { icon } = useGetData()

    if(error)
        return (
            <div className="main-panel-container">
                <span>{error}</span>
            </div>
        )

    if(loading)
        return (
            <div className="main-panel-container">
                <span>Loading...</span>
            </div>
        )
    return (
        <div className="invisible lg:visible w-[100vw] h-[100vh] fixed grid lg:grid-cols-custom-lg xl:grid-cols-custom-xl overflow-auto">
            <Router>
                <div className="absolute w-full h-full">
                    <WeatherImage key={icon} src={icon} className="w-full h-full"/>
                </div>
                <MainPanel />
                <InfoPanel />
            </Router>
        </div>
    )
}

export default App