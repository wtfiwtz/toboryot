import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Routes from './Routes'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'

import reducers from './reducers'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(
    middleware,
    thunkMiddleware
  )
)

const Root = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

Root()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    Root()
  })
}
