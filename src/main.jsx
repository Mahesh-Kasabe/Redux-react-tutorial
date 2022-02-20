import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import usersReducer from "./features/users" 

const store = configureStore({
  reducer: {
    users : usersReducer,
  },
})

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  
  document.getElementById('root')
)
