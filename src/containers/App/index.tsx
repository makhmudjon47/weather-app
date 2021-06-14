import React, { FunctionComponent, useEffect } from 'react'
import MainPanel from '../../views/MainPanel'
import InfoPanel from '../../views/InfoPanel'
import { assets } from '../../utils/assets'
import { useData } from './useData'
import { useGetData } from '../../hooks'
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
            <img className="w-full h-full absolute" alt="loading..." src={assets[icon]}/>
            <MainPanel />
            <InfoPanel />
        </div>
    )
}

export default App