import React, { FunctionComponent } from 'react'
import { useData } from './useData'

interface IProps {}

const Header: FunctionComponent<IProps> = () => {
    const { setText, text } = useData()

    return (
        <div className="flex box-border h-24 m-0 p-0">
            <div className="flex-1 px-14 flex items-end">
                <input value={text} onChange={e => setText(e.target.value)} type="text" className="bottom-0 h-[fit-content] hover:border-primary-1 focus:border-primary-1 text-base w-full bg-transparent outline-none text-primary-1 border-b-[1px] border-primary leading-10" placeholder="Any location"/>
            </div>
            <button className="w-24 h-24 p-0 m-0 grid place-items-center bg-[#D66C05] border-none box-border focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#000C39]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    )
}

export default Header