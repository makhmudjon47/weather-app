import React, { FunctionComponent } from 'react'

interface IProps {}

const Info: FunctionComponent<IProps> = () => {
    return (
        <div className="absolute bottom-24 left-24 w-[fit-content] flex">
            <div className="relative celsius mr-8">
                <span className="text-white text-8xl">16</span>
            </div>
            <div className="flex items-end pb-2">
                <span className="text-5xl text-white">London</span>
            </div>
            <div className="flex flex-col border-2 border-red-600 px-8 justify-center">
                <span>icon</span>
                <span>Cloudy</span>
            </div>
        </div>
    )
}

export default Info