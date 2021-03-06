import React, { Component } from 'react';
import ListSwitch from './components/list_switch';
import MembersList from './containers/members_list';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = { listAllTime: false };
  }

  switchTime() {
    this.setState({
      listAllTime: !this.state.listAllTime
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Free Code Camp Leaderboard<i className="fa fa-free-code-camp" aria-hidden="true"></i></h1>
          <ListSwitch switchTime={this.switchTime.bind(this)} />
        </div>
        <MembersList listAllTime={this.state.listAllTime} />
      </div>
    );
  }
}

export default App;
