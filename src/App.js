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
    hours: 0,
    minutes: 0,
    seconds: 0,
    hoursIncr: 0,
    minutesIncr: 0,
    secondsIncr: 0
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
    secondsIncr
    }
    this.setState({
      hours,
      minutes,
      seconds,
      hoursIncr,
      minutesIncr,
      secondsIncr
    })
    //dis
    //displayTime: {hours} 
    //console.log(displayTime);
    //return (<div>{siema}</div>)
      
    }
  
  

  render() {
    let settings;
    let backdrop;
    
    if(this.state.settingsOpen) {
      settings = <Settings click={this.backdropClickHandler}
                  time={this.time}/>    
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
