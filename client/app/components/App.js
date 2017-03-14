import React from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames/bind'
import Table from './Table'
import {fetchTable} from '../actions/tables'

import styles from './App.css';
const cx = classnames.bind(styles)

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTable())
  }

  render() {
    return (
      <div className={cx('App')}>
        <h2>Hello, Toy Robot</h2>
        <Table session={this.props.session}/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default connect()(App);
