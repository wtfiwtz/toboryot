import React from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames/bind'
import Table from './Table'
import {fetchTable,newCommand,placeCommand,moveCommand,leftCommand,rightCommand,reportCommand} from '../actions/tables'

import styles from './App.css';
const cx = classnames.bind(styles)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentCommand: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchTable())
  }

  handleChange(event) {
    this.setState({ currentCommand: event.target.value })
  }

  executeCommand(cmd) {
    const place = new RegExp(/^PLACE (\d),(\d),(\w+)$/)
    const move = new RegExp(/^MOVE$/)
    const left = new RegExp(/^LEFT$/)
    const right = new RegExp(/^RIGHT$/)
    const report = new RegExp(/^REPORT$/)

    console.log(cmd)
    var matched = cmd.match(place)
    if (matched) {
      this.executePlace(this.props.session, matched)
      return true
    }

    var matched = cmd.match(move)
    if (matched) {
      this.executeMove(this.props.session)
      return true
    }

    var matched = cmd.match(left)
    if (matched) {
      this.executeLeft(this.props.session)
      return true
    }

    var matched = cmd.match(right)
    if (matched) {
      this.executeRight(this.props.session)
      return true
    }

    var matched = cmd.match(report)
    if (matched) {
      this.executeReport(this.props.session)
      return true
    }

    return false
  }

  executePlace(session, ary) {
    this.props.dispatch(placeCommand(session, ...ary.splice(1, 3)))
  }

  executeMove(session) {
    this.props.dispatch(moveCommand(session))
  }

  executeLeft(session) {
    this.props.dispatch(leftCommand(session))
  }

  executeRight(session) {
    this.props.dispatch(rightCommand(session))
  }

  executeReport(session) {
    this.props.dispatch(reportCommand(session))
  }

  handleKeyPress(event) {
    if (event.keyCode == 13 || event.which == 13) {
      const result = this.executeCommand(event.target.value.trim())
      if (result) {
        var commandSet = this.props.commands.slice(0)
        commandSet.push(event.target.value)
        this.props.dispatch(newCommand(commandSet))
        this.setState({ commands: commandSet, currentCommand: '' })
      } else {
        this.setState({ currentCommand: '' })
      }
    }
    return true
  }

  render() {
    return (
      <div className={cx('App')}>
        <h2>Hello, Toy Robot</h2>
        <div>
          <input type="text" size="80" value={this.state.currentCommand} onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress} />
        </div>
        <div style={{float: 'right', width: '200px'}}>
          Commands:
          <ul>
            {this.props.commands.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
        <Table session={this.props.session}/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

function mapStateToProps(state) {
  return {
    commands: state.table.commands,
    session: state.table.session
  }
}

export default connect(mapStateToProps)(App);
