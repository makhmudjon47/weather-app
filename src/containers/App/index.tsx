import React, { FunctionComponent } from 'react'
import Image from '../../assets/default.jpg'

interface IProps {}

const App: FunctionComponent<IProps> = () => {
    return (
        <div className="bg-blue-800 w-[100vw] h-[100vh] fixed overflow-auto text-white">
            <h1>Hello Nice</h1>
            <img src={Image}/>
        </div>
    )
}

export default App