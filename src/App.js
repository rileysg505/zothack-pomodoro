// React and CSS Imports
import React from "react";
import "./App.scss";
import BreakInterval from 'components/break'
import SessionLength from 'components/session'
import Timer from 'components/timer'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      break: 5,
      session: 25,
      timerMin: 25
    }
  }
  render(){
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <BreakInterval breakInterval={this.state.break}/>
        <SessionLength SessionLength={this.state.session}/>
        <Timer timerMin={this.state.timerMin} />
      </main>
    );
  }
}

export default App;
