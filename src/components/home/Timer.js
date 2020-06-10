import React from 'react';

function Timer() {
    return (
        <button style={timerStyle}>
            10:00
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
};

export default Timer;