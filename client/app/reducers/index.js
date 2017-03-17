import {combineReducers} from 'redux'

const initialState = {}

function app(state = initialState, action) {
  return state
}

function table(state = { commands: []}, action) {
  if (action.type === 'RECEIVE_TABLE') {
    return Object.assign({}, state, {
      session: action.session
    })
  } else if (action.type === 'COMMAND_PROVIDED') {
    return Object.assign({}, state, {
      commands: action.commands
    })

  } else if (action.type === 'RECEIVE_PLACE' ||
             action.type === 'RECEIVE_LEFT' ||
             action.type === 'RECEIVE_RIGHT' ||
             action.type === 'RECEIVE_MOVE' ||
             action.type === 'RECEIVE_REPORT') {
    return Object.assign({}, state, {
      x: action.x,
      y: action.y,
      f: action.f,
      alert: action.alert
    })
  } else if (action.type === 'RECEIVE_ERROR') {
    return Object.assign({}, state, {
      alert: action.alert
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
