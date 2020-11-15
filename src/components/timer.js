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
              <section>
                <h4>{this.state.isSession === true ? "Session" :
                "Break"}</h4>
                <span> {this.props.timerMin}</span>
                <span>:</span>
                <span>
                  {this.state.timerSec === 0 
                    ? "00" 
                    :this.state.timerSec < 10 
                    ? "0" + this.state.timerSec 
                    : this.state.timerSec}
                </span>
              </section>
        );
            </section>
        );
    }
}

export default Timer;