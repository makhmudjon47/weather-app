import React, { FunctionComponent } from 'react'
import MainPanel from '../../views/MainPanel'
import InfoPanel from '../../views/InfoPanel'
import { assets } from '../../utils/assets'
import { useData } from './useData'
import { useGetData } from '../../hooks'
import { BrowserRouter as Router } from 'react-router-dom'

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
        <div className="invisible sm:visible w-[100vw] h-[100vh] fixed grid grid-cols-custom overflow-auto">
            <Router>
                <img className="w-full h-full absolute" alt="loading..." src={assets[icon]}/>
                <MainPanel />
                <InfoPanel />
            </Router>
        </div>
    )
}

export default App