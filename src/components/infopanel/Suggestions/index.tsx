import React, { FunctionComponent } from 'react'

interface IProps {}

const suggestions = ['Tashkent', 'New York', 'London', 'Paris']

const Suggestions: FunctionComponent<IProps> = () => {
    return (
        <div className="px-14 py-10 gap-2 flex flex-col">
            {
                suggestions.map((value, index) => (
                    <span key={index} className="text-primary text-base leading-10 cursor-pointer hover:text-primary-1">{value}</span>
                ))
            }
        </div>
    )
}

export default Suggestions