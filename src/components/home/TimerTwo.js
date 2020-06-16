import React from 'react';
import Moves from './Moves';

const TimerTwo = props => {
    const handleListItemClick = () => {
        props.onClickTimer()
        props.count()
    }
    return (
        <button style={timerStyle} onClick={handleListItemClick}>
            {props.hoursTwo}:
            {props.minutesTwo}:
            {props.secondsTwo}
            {/* Unnecessary
            {props.hoursIncrTwo}:
            {props.minutesIncrTwo}:
            {props.secondsIncrTwo}
            */}
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
    backgroundColor: 'rgba(5, 2, 2, 0.5)',
    cursor: 'pointer'
};

export default TimerTwo;