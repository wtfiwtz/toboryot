import fetch from 'isomorphic-fetch'

export const REQUEST_TABLE = 'REQUEST_TABLE'
export const RECEIVE_TABLE = 'RECEIVE_TABLE'

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