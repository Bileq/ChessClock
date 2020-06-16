import React from 'react';
import Moves from './Moves';

const Timer = props => {
    /*state = {
        playerOneTurn: false,
      
      };*/
    return (
        <button style={timerStyle} onClick={props.onClickTimer}>
            {props.hours}:
            {props.minutes}:
            {props.seconds}
            {/* Unnecessary
            {props.hoursIncr}:
            {props.minutesIncr}:
            {props.secondsIncr}
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

export default Timer;