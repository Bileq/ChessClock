import React from 'react';
import Timer from './Timer';
import TimerTwo from './TimerTwo'

const Field = props => {
    return (
        <div style={fieldStyle}>
            <Timer 
            hours={props.hours}
            minutes={props.minutes}
            seconds={props.seconds}
            hoursIncr={props.hoursIncr}
            minutesIncr={props.minutesIncr}
            secondsIncr={props.secondsIncr}
            playerOneTurn={props.playerOneTurn}
            onClickTimer={props.onClickTimer}
            addIncrement={props.addIncrement}
            onClickTimerPlayerOne={props.onClickTimerPlayerOne}
            />
            <TimerTwo 
            hoursTwo={props.hoursTwo}
            minutesTwo={props.minutesTwo}
            secondsTwo={props.secondsTwo}
            hoursIncrTwo={props.hoursIncrTwo}
            minutesIncrTwo={props.minutesIncrTwo}
            secondsIncrTwo={props.secondsIncrTwo}
            playerOneTurn={props.playerOneTurn}
            onClickTimer={props.onClickTimer}
            addIncrement={props.addIncrement}
            onClickTimerPlayerTwo={props.onClickTimerPlayerTwo}
            /> 
            {/* moves component */}
        </div>
    );
}

const fieldStyle = {
    color: '#ddd',
    marginTop: '100px',
    width: '50%',
    marginLeft: '25%',
    height: '500px'  

};

export default Field;