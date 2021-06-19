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
        <div className="w-[100vw] h-[100vh] fixed">
                <div className="absolute min-w-[500px] min-h-[500px] w-full h-full z-10">
                    <WeatherImage key={icon} src={icon} className="w-full h-full"/>
                </div>
                <div className="z-20 relative grid-cols-1 md:grid-cols-custom-md lg:grid-cols-custom-lg xl:grid-cols-custom-xl overflow-auto grid w-full h-full">
                    <Router>
                        <MainPanel />
                        <InfoPanel />
                    </Router>
                </div>
        </div>
    )
}

export default App