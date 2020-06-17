import React from 'react';
import Moves from './Moves';

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
    cursor: 'pointer',
    /*backgroundColor: this.props.playerOneTurn
    ? '#F3C13A' : 'rgba(5, 2, 2, 0.5)'*/
};

export default TimerTwo;