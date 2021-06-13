import React, { FunctionComponent } from 'react'
import BackgroundImage from '../../assets/cloudy.jpg'
import MainPanel from '../../views/MainPanel'
import InfoPanel from '../../views/InfoPanel'

interface IProps {}

const App: FunctionComponent<IProps> = () => {
    return (
        <div className="invisible sm:visible w-[100vw] h-[100vh] fixed grid grid-cols-custom overflow-auto">
            <img className="w-full h-full absolute" alt="loading..." src={BackgroundImage}/>
            <MainPanel />
            <InfoPanel />
        </div>
    )
}

export default App