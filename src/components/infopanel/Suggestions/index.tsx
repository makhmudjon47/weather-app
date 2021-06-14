import React, { FunctionComponent } from 'react'
import { useGetData } from '../../../hooks'
import { useData } from './useData'

interface IProps {}

const Suggestions: FunctionComponent<IProps> = () => {
    const { suggestions } = useGetData()
    const { setPlaceId } = useData()

    return suggestions.length ? (
        <div className="mx-14 overflow-hidden py-10 gap-2 flex flex-col">
            {
                suggestions.map((value, index) => (
                    <span key={index} onClick={() => setPlaceId(value.placeId)} className="text-primary text-base leading-10 overflow-hidden overflow-ellipsis	 whitespace-nowrap cursor-pointer hover:text-primary-1">{value.text}</span>
                ))
            }
        </div>
    ) : <></>
}

export default Suggestions