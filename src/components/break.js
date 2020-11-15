import React from 'react';

function BreakInterval(props) {

    return (
        <sections>
            <button>Down</button>
            <p>{props.breakInterval}</p>
            <button>Up</button>
        </sections>
    );
}

export default BreakInterval;