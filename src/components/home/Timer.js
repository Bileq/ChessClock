import React from 'react';

const Timer = props => {
    const handleItemList = () => {
        props.onClickTimerPlayerOne()
        props.addIncrement()
    }
    return (
        <button style={timerStyle} onClick={handleItemList}>
            {props.hours}:
            {props.minutes}:
            {props.seconds}
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
    backgroundColor: 'rgba(5, 2, 2, 0.5)',
    cursor: 'pointer'
};

export default Timer;