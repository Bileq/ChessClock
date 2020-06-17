import React from 'react';

const TimerTwo = props => {
    const handleItemList = () => {
        props.onClickTimerPlayerTwo()
        props.addIncrement()
    }   

    return (
        <button style={timerStyle} onClick={handleItemList}>
            {props.hoursTwo}:
            {props.minutesTwo}:
            {props.secondsTwo}
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
    cursor: 'pointer',
    backgroundColor: 'rgba(5, 2, 2, 0.5)',
};

export default TimerTwo;