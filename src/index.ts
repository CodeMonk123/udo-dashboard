import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import fetchData from './utils/Fetch'

function render() {

    fetchData('Air_purifier_123_Humidity')

    ReactDOM.render(
        React.createElement(AppContainer, {}, React.createElement(App)),
        document.getElementById('app')
    )
}

module.hot?.accept('./App', render)

render()
