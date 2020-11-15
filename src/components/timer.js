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
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer(){
        switch(this.state.timerSec){
            case 0:
                if(this.props.timerMin === 0){
                    if(this.state.isSession){
                        this.setState({
                            isSession: false
                        });

                        this.props.toggleInterval(this.state.isSession);

                    }else{
                        this.setState({
                            isSession: true
                        });
                    
                        this.props.toggleInterval(this.state.isSession);
                    }
                }else{
                    this.props.updateTimerMin() 
                    this.setState({
                    timerSec: 59
                }) 
            }
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
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);

    }

    resetTimer(){
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSec:0,
            isSession: true
        })
    }


    render () {
        return (
            <section>
              <section className="timer-container">
                <h4>{this.state.isSession === true ? "Grind" :
                "Chill"}</h4>
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
              <section className="timer-actions">
                  <button onClick={this.playTimer}>Start</button>
                  <button onClick={this.stopTimer}>Stop</button>
                  <button onClick={this.resetTimer}>Reset</button>
              </section>
            </section>
        );
    }
}

export default Timer;