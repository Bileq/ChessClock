import React from 'react';
import Moves from './Moves';

function Timer() {
    return (
        <button style={timerStyle}>
            10:00
            <Moves />
        </button>
    );
}

const timerStyle = {
    color: '#bbb',
    fontSize: '100px',
    border: 'none',
    marginTop: '5px',
    width: '100%',
    height: '240px',
    backgroundColor: 'black',
    cursor: 'pointer'
};

export default Timer;