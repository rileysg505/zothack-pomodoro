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
      breakLength: 5,
      sessionLength: 25,
      timerMin: 25
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind
    (this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind
    (this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind
    (this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind
    (this);
    this.onToggleInterval = this.onToggleInterval.bind
    (this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind
    (this);
    this.onResetTimer = this.onResetTimer.bind
    (this);

  }
onIncreaseBreakLength() {
  this.setState((prevState) => {
    return {
      breakLength: prevState.breakLength + 1
    }
  })
}

onDecreaseBreakLength() {
  this.setState((prevState) => {
    return {
      breakLength: prevState.breakLength - 1
    }
  })
}

onIncreaseSessionLength() {
  this.setState((prevState) => {
    return {
      sessionLength: prevState.sessionLength + 1,
      timerMin: prevState.sessionLength + 1
    }
  })
}

onDecreaseSessionLength() {
  this.setState((prevState) => {
    return {
      sessionLength: prevState.sessionLength - 1,
      timerMin: prevState.sessionLength - 1
    }
  })
}

onUpdateTimerMinute(){
  this.setState((prevState) => {
    return{
      timerMin : prevState.timerMin - 1
    }
  })
}

onToggleInterval(isSession) {
  if (isSession) {
    this.setState({
      timerMin: this.state.sessionLength
    
    })

  } else {
    this.setState({
      timerMin: this.state.breakLength
    })

  }
}

onResetTimer(){
  this.setState({
    timerMin: this.state.sessionLength
  })
}

  render(){
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className="interval-main-container">
          <BreakInterval 
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}/>
          <SessionLength 
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}/>
        </section>
        <Timer 
        timerMin={this.state.timerMin}
        breakLength={this.state.breakLength}
        updateTimerMin = {this.onUpdateTimerMinute}
        toggleInterval = {this.onToggleInterval}
        resetTimer={this.onResetTimer}
        />
      </main>
    );
  }
}

export default App;
