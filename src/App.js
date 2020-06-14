import React, { Component } from 'react';
import './App.css';
import Header from './components/home/Header';
import Field from './components/home/Field';
import chess from './video/chess.mp4';
import Settings from './components/settings/Settings';
import Backdrop from './components/settings/Backdrop';




class App extends Component {
  state = {
    settingsOpen: true,
    hours: '',
    minutes: '',
    seconds: '',
    hoursIncr: '',
    minutesIncr: '',
    secondsIncr: ''
   
  };

  settingsToggleClickHandler = () => {
    this.setState(prevState => {
      return {settingsOpen: !prevState.settingsOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({settingsOpen: false}); 
  };

  time = () => {/*
      hours: hours; 
      minutes: minutes; 
      seconds: seconds;
      hoursIncr: hoursIncr;
      minutesIncr: minutesIncr;
      secondsIncr: secondsIncr;*/

      const siema = console.log("siema");
    
    
  }


  render() {
    let settings;
    let backdrop;

    if(this.state.settingsOpen) {
      settings = <Settings click={this.backdropClickHandler} time={this.time}/>
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
        <Field />
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
