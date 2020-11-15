import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSec: 0,
            intervalId : 0
        };
        this.playTimer = this.playTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this)
    }

    playTimer(){
        let intervalId = setInterval(this.decreaseTimer, 1000)

        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer(){
        switch(this.state.timerSec){
            case 0:
                this.props.updateTimerMin() 
                this.setState({
                    timerSec: 59
                })
                break;
            default:
                this.setState((prevState) =>{
                    return{
                        timerSec: prevState.timerSec -1
                    }

                })
                break;

        }

    }

    stopTimer(){
        clearInterval(this.state.intervalId)

    }

    resetTimer(){
        this.stopTimer();
        this.props.resetTimer();
        this.setState({
            timerSec:0
        })
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
                  <button onClick={this.playTimer}>Start</button>
                  <button onClick={this.stopTimer}>Stop</button>
                  <button onClick={this.resetTimer}>Reset</button>
              </sections>
            </section>
        );
    }
}

export default Timer;