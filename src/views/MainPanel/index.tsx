import React, { FunctionComponent } from 'react'
import Info from '../../components/main/Info'

interface IProps {}

const InfoPanel: FunctionComponent<IProps> = () => {
    return (
        <div className="z-10 relative">
            <Info />
        </div>
    )
}

export default InfoPanel