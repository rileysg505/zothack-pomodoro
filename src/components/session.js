import React from 'react';

function SessionLength(props) {
    return (
        <section>
            <button>Down</button>
            <p>{props.SessionLength}</p>
            <button>Up</button>
        </section>
    );
}

export default SessionLength