import React from 'react'
import {connect} from 'react-redux'
import Cell from './Cell'

class Table extends React.Component {
  render() {
    return <div>
      <div> Session: { this.props.session } </div>
      <div>
        {[...Array(5)].map((e, i) => <Cell key={"a" + i} x={i} y={4}></Cell>)}
      </div>
      <div>
        {[...Array(5)].map((e, i) => <Cell key={"b" + i} x={i} y={3}></Cell>)}
      </div>
      <div>
        {[...Array(5)].map((e, i) => <Cell key={"c" + i} x={i} y={2}></Cell>)}
      </div>
      <div>
        {[...Array(5)].map((e, i) => <Cell key={"d" + i} x={i} y={1}></Cell>)}
      </div>
      <div>
        {[...Array(5)].map((e, i) => <Cell key={"e" + i} x={i} y={0}></Cell>)}
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    session: state.table.session
  }
}

export default connect(mapStateToProps)(Table)
