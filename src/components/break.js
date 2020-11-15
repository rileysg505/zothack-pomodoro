import React from 'react';

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak()
    }

    function increaseCounter() {
        if (props.sessionLength === 60) {
            return;
        }

        props.increaseBreak()
    }

  return (
    <section>
        <h4>Chill Sesh</h4>
        <section className="interval-container">
            <button disabled= {props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>-</button>
            <p className="interval-length">{props.breakInterval}</p>
            <button disabled= {props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>+</button>
        </section>
    </section>
    )
}

export default BreakInterval;