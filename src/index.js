import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.css'

import { Provider } from 'react-redux'
import store from './reducers/store'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
