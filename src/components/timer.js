import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSec: 0
        }
    }
    render () {
        return (
            <section>
              <section className="timer-container">
                <h4>{this.state.isSession === true ? "Session" :
                "Break"}</h4>
                <span className="timer"> {this.props.timerMin}</span>
                <span className="timer">:</span>
                <span className="timer">
                  {this.state.timerSec === 0 
                    ? "00" 
                    :this.state.timerSec < 10 
                    ? "0" + this.state.timerSec 
                    : this.state.timerSec}
                </span>
              </section>     
              <sections className="timer-actions">
                  <button>Start</button>
                  <button>Stop</button>
                  <button>Reset</button>
              </sections>
            </section>
        );
    }
}

export default Timer;