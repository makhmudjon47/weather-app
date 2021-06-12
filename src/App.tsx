import React, { FunctionComponent } from 'react'

interface IProps {
    name: string
}

const App: FunctionComponent<IProps> = ({ name }) => (
    <h1 className="text-red-500">Welcome {name}</h1>
)

export default App