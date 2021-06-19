import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { WeatherProvider } from './hooks/provider'
import './index.css'

ReactDOM.render(
    <WeatherProvider>
        <App />
    </WeatherProvider>, document.getElementById('root'))