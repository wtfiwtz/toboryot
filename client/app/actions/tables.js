import fetch from 'isomorphic-fetch'

export const REQUEST_TABLE = 'REQUEST_TABLE'
export const RECEIVE_TABLE = 'RECEIVE_TABLE'
export const REQUEST_PLACE = 'REQUEST_PLACE'
export const RECEIVE_PLACE = 'RECEIVE_PLACE'
export const REQUEST_MOVE = 'REQUEST_MOVE'
export const RECEIVE_MOVE = 'RECEIVE_MOVE'
export const REQUEST_LEFT = 'REQUEST_LEFT'
export const RECEIVE_LEFT = 'RECEIVE_LEFT'
export const REQUEST_RIGHT = 'REQUEST_RIGHT'
export const RECEIVE_RIGHT = 'RECEIVE_RIGHT'
export const REQUEST_REPORT = 'REQUEST_REPORT'
export const RECEIVE_REPORT = 'RECEIVE_REPORT'
export const COMMAND_PROVIDED = 'COMMAND_PROVIDED'

function requestTable() {
  return {
    type: REQUEST_TABLE,
  }
}

function receiveTable(json) {
  return {
    type: RECEIVE_TABLE,
    session: json.session,
    receivedAt: Date.now()
  }
}

function requestPlace(x, y, f) {
  return {
    type: REQUEST_PLACE,
    x: x,
    y: y,
    f: f
  }
}

function receivePlace(json) {
  console.log(json)
  return {
    type: RECEIVE_PLACE,
    x: json.x,
    y: json.y,
    f: json.f,
    receivedAt: Date.now()
  }
}

function requestMove() {
  return {
    type: REQUEST_MOVE
  }
}

function receiveMove(json) {
  return {
    type: RECEIVE_MOVE,
    receivedAt: Date.now()
  }
}

function requestLeft() {
  return {
    type: REQUEST_LEFT
  }
}

function receiveLeft(json) {
  return {
    type: RECEIVE_LEFT,
    receivedAt: Date.now()
  }
}

function requestRight() {
  return {
    type: REQUEST_RIGHT
  }
}

function receiveRight(json) {
  return {
    type: RECEIVE_RIGHT,
    receivedAt: Date.now()
  }
}

function requestReport() {
  return {
    type: REQUEST_REPORT
  }
}

function receiveReport(json) {
  return {
    type: RECEIVE_REPORT,
    receivedAt: Date.now()
  }
}

function commandProvided(cmdSet) {
  return {
    type: COMMAND_PROVIDED,
    commands: cmdSet
  }
}

function executePlace(session, x, y, f) {
  return function (dispatch) {
    dispatch(requestPlace(x, y, f))
    fetch(`http://api.toboryot.local:3000/tables/${session}/robots.json`,
          { headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ x: x, y: y, f: f.toLowerCase() }) })
      .then(response => checkStatus(response, dispatch, receivePlace))
      .catch(err => {
        alert(err.error)
      })
  }
}

function checkStatus(response, dispatch, reducer) {
  return response.json().then(json => {
    return response.ok ? dispatch(reducer(json)) : Promise.reject(json)
  })
}

function executeMove(session) {
  return function (dispatch) {
    dispatch(requestMove())
    return fetch(`http://api.toboryot.local:3000/tables/${session}/robots/move.json`, { method: 'POST' })
      .then(response => checkStatus(response, dispatch, receiveMove))
      .catch(err => {
        alert(err.error)
      })
  }
}

function executeLeft(session) {
  return function (dispatch) {
    dispatch(requestLeft())
    return fetch(`http://api.toboryot.local:3000/tables/${session}/robots/left.json`, { method: 'POST' })
      .then(response => checkStatus(response, dispatch, receiveLeft))
      .catch(err => {
        alert(err.error)
      })
  }
}

function executeRight(session) {
  return function (dispatch) {
    dispatch(requestRight())
    return fetch(`http://api.toboryot.local:3000/tables/${session}/robots/right.json`, { method: 'POST' })
      .then(response => checkStatus(response, dispatch, receiveRight))
      .catch(err => {
        alert(err.error)
      })
  }
}

function executeReport(session) {
  return function (dispatch) {
    dispatch(requestReport())
    return fetch(`http://api.toboryot.local:3000/tables/${session}/robots.json`)
      .then(response => checkStatus(response, dispatch, receiveReport))
      .catch(err => {
        alert(err.error)
      })
  }
}

export function fetchTable() {
  return function (dispatch) {
    dispatch(requestTable())
    return fetch(`http://api.toboryot.local:3000/tables.json`, { method: 'POST' })
      .then(response => response.json())
      .then(json =>
        dispatch(receiveTable(json))
      )
  }
}

export function newCommand(cmdSet) {
  return function(dispatch) {
    dispatch(commandProvided(cmdSet))
  }
}

export function placeCommand(session, x, y, f) {
  return function(dispatch) {
    dispatch(executePlace(session, x, y, f))
  }
}

export function moveCommand(session) {
  return function(dispatch) {
    dispatch(executeMove(session))
  }
}

export function leftCommand(session) {
  return function(dispatch) {
    dispatch(executeLeft(session))
  }
}

export function rightCommand(session) {
  return function(dispatch) {
    dispatch(executeRight(session))
  }
}

export function reportCommand(session) {
  return function(dispatch) {
    dispatch(executeReport(session))
  }
}