import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'
import App from './app'

render (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

if (module.hot) {
  module.hot.dispose(function () {
    console.log('module will be replaced')
  })

  module.hot.accept(function () {
    console.log('module update')
  })
}
