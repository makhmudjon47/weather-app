import React, { FunctionComponent } from 'react'

interface IProps {
    name: string
}

const App: FunctionComponent<IProps> = ({ name }) => (
    <h1 className="text-red-500">Hey {name}</h1>
)

export default App