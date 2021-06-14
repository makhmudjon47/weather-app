import React, { FunctionComponent, useEffect } from 'react'
import BackgroundImage from '../../assets/cloudy.jpg'
import MainPanel from '../../views/MainPanel'
import InfoPanel from '../../views/InfoPanel'
import { useData } from './useData'
interface IProps {}

const App: FunctionComponent<IProps> = () => {
    const { loading, error } = useData()

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
        <div className="invisible sm:visible w-[100vw] h-[100vh] fixed grid grid-cols-custom overflow-auto">
            <img className="w-full h-full absolute" alt="loading..." src={BackgroundImage}/>
            <MainPanel />
            <InfoPanel />
        </div>
    )
}

export default App