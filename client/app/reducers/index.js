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
  } else if (action.type == 'COMMAND_PROVIDED') {
    return Object.assign({}, state, {
      commands: action.commands
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
