import React from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames/bind'

import styles from './Cell.css';
const cx = classnames.bind(styles)

class Cell extends React.Component {
  render() {
    return <div className={cx('Cell')}>{this.props.x},{this.props.y}</div>
  }
}

export default connect()(Cell)

