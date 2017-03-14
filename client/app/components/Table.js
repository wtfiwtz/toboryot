import React from 'react'
import {connect} from 'react-redux'

class Table extends React.Component {
  render() {
    return <div>
      <div> Session: { this.props.session } </div>
      <div>
        {[...Array(5)].map((e, i) => <span key={"a" + i}>♦</span>)}
      </div>
      <div>
        {[...Array(5)].map((e, i) => <span key={"b" + i}>♦</span>)}
      </div>
      <div>
        {[...Array(5)].map((e, i) => <span key={"c" + i}>♦</span>)}
      </div>
      <div>
        {[...Array(5)].map((e, i) => <span key={"d" + i}>♦</span>)}
      </div>
      <div>
        {[...Array(5)].map((e, i) => <span key={"e" + i}>♦</span>)}
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
