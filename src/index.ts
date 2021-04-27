import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import FetchData from './utils/Fetch'

function callback(timestamp, value, key){
    console.log(timestamp, value, key)
}

function render() {
    FetchData('Air_purifier_123_Humidity', callback)
    FetchData('Air_purifier_123_Temperature', callback)
    FetchData('Air_purifier_123_Aqi', callback)

    ReactDOM.render(
        React.createElement(AppContainer, {}, React.createElement(App)),
        document.getElementById('app')
    )
}

module.hot?.accept('./App', render)

render()
