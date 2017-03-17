import React from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames/bind'

import styles from './Cell.css';
const cx = classnames.bind(styles)

class Cell extends React.Component {
  renderRobot() {
    if ((this.props.x === this.props.robotX) && (this.props.y === this.props.robotY)) {
      return 'R'
    } else {
      return null
    }
  }

  render() {
    return <div className={cx('Cell')}>{this.props.x},{this.props.y}&nbsp;&nbsp;&nbsp;{this.renderRobot()}</div>
  }
}

function mapStateToProps(state) {
  return {
    robotX: state.table.x,
    robotY: state.table.y
  }
}

export default connect(mapStateToProps)(Cell)

