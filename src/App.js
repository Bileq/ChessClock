import React, { Component } from 'react';
import './App.css';
import Header from './components/home/Header';
import Field from './components/home/Field';
import chess from './video/chess.mp4';
import Settings from './components/settings/Settings';
import Backdrop from './components/settings/Backdrop';


class App extends Component {
  state = {
    settingsOpen: false,
    playerOneTurn: false,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hoursIncr: 0,
    minutesIncr: 0,
    secondsIncr: 0,
    hoursTwo: 0,
    minutesTwo: 0,
    secondsTwo: 0,
    hoursIncrTwo: 0,
    minutesIncrTwo: 0,
    secondsIncrTwo: 0,
  };

  settingsToggleClickHandler = () => {
    this.setState(prevState => {
      return {settingsOpen: !prevState.settingsOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({settingsOpen: false}); 
  };

  time = (hours, minutes, seconds, hoursIncr, minutesIncr, secondsIncr) => {
    const time = {
    hours,
    minutes,
    seconds,
    hoursIncr,
    minutesIncr,
    secondsIncr,
    }
    //sets typed time to state
    this.setState({
      hours,
      minutes,
      seconds,
      hoursIncr,
      minutesIncr,
      secondsIncr,
    })      
    }
  timeTwo = (hoursTwo, minutesTwo, secondsTwo, hoursIncrTwo, minutesIncrTwo, secondsIncrTwo) => {
    const timeTwo = {
      hoursTwo,
      minutesTwo,
      secondsTwo,
      hoursIncrTwo,
      minutesIncrTwo,
      secondsIncrTwo,
    }
    this.setState({
      hoursTwo,
      minutesTwo,
      secondsTwo,
      hoursIncrTwo,
      minutesIncrTwo,
      secondsIncrTwo,
    })
  }
  
  onClickTimer = () => {
    //this.setState({playerOneTurn = !playerOneTurn})
    console.log("onClickTimer")
  }

  render() {
    let settings;
    let backdrop;
    
    if(this.state.settingsOpen) {
      settings = <Settings click={this.backdropClickHandler}
                  time={this.time} timeTwo={this.timeTwo}
                  />    
      backdrop = <Backdrop />
    }

    return (
      <div className="App">
          <video
            autoPlay
            loop
            muted
            style={videoStyle}
          >
            <source src={chess} type="video/mp4" />
          </video>
        <Header settingsClickHandler={this.settingsToggleClickHandler}/>
        {settings}
        {backdrop}
        <Field 
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
        hoursIncr={this.state.hoursIncr}
        minutesIncr={this.state.minutesIncr}
        secondsIncr={this.state.secondsIncr}
        hoursTwo={this.state.hoursTwo}
        minutesTwo={this.state.minutesTwo}
        secondsTwo={this.state.secondsTwo}
        hoursIncrTwo={this.state.hoursIncrTwo}
        minutesIncrTwo={this.state.minutesIncrTwo}
        secondsIncrTwo={this.state.secondsIncrTwo}
        playerOneTurn={this.state.playerOneTurn}
        onClickTimer={this.onClickTimer}
        />
      </div>
    );
  }
}

const videoStyle = {
  position: 'absolute',
  width: '100%',
  left: '50%',
  top: '50%',
  maxHeight: '100%',
  objectFit: 'cover',
  transform: 'translate(-50%, -50%)',
  zIndex: '-1', 
  opacity: '0.3'
}

export default App;
