import {combineReducers} from 'redux'

const initialState = {}

function app(state = initialState, action) {
  return state
}

function table(state = initialState, action) {
  if (action.type === 'RECEIVE_TABLE') {
    return Object.assign({}, state, {
      session: action.session
    })
  } else {
    return state
  }
}

const reducers = {
  app,
  table
}

export default reducers
