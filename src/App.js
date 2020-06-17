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
    playerOneTurn: true,
    gameStart: false,
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
  
onClickTimerPlayerOne = () => {
  this.setState({
    playerOneTurn: true
  })
}

onClickTimerPlayerTwo = () => {
  this.setState({
    playerOneTurn: false
  })
}
componentDidMount () {
    this.myInterval = setInterval(() => {
      if(this.state.seconds === 0){
        if(this.state.minutes === 0){
          if(this.state.hours === 0){
            this.setState({
              //Stop of counting
              seconds: this.state.seconds + 1
            })
          } else {
            this.setState({
              hours: this.state.hours - 1,
              minutes: this.state.minutes = 59,
              seconds: this.state.seconds = 60,
              
            })
          } 
        } else { 
          if(this.state.hours === 0) {
            this.setState({
              hours: this.state.hours = 0,
              seconds: this.state.seconds = 60,
              minutes: this.state.minutes - 1
            }) 
          } else if (this.state.minutes === 0) {
            this.setState({
              hours: this.state.hours - 1,
              seconds: this.state.seconds = 60
            })
          } else {
            this.setState({
              minutes: this.state.minutes -1 ,
              seconds: this.state.seconds = 60,
            })
          }
        }
      }



      if(this.state.secondsTwo === 0){
        if(this.state.minutesTwo === 0){
          if(this.state.hoursTwo === 0){
            this.setState({
              secondsTwo: this.state.secondsTwo + 1
            })
          } else {
            this.setState({
              hoursTwo: this.state.hoursTwo - 1,
              minutesTwo: this.state.minutesTwo = 59,
              secondsTwo: this.state.secondsTwo = 60,
              
            })
          } 
        } else { 
          if(this.state.hoursTwo === 0) {
            this.setState({
              hoursTwo: this.state.hoursTwo = 0,
              secondsTwo: this.state.secondsTwo = 60,
              minutesTwo: this.state.minutesTwo - 1
            }) 
          } else if (this.state.minutesTwo === 0) {
            this.setState({
              hoursTwo: this.state.hoursTwo - 1,
              secondsTwo: this.state.secondsTwo = 60
            })
          } else {
            this.setState({
              minutesTwo: this.state.minutesTwo -1 ,
              secondsTwo: this.state.secondsTwo = 60,
            })
          }
        }
      }

      if(this.state.playerOneTurn) {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1,
          
        }))
      } else {
        this.setState(prevState => ({
          secondsTwo: prevState.secondsTwo - 1,
        }))
      }
      


    }, 1000)
}

componentWillUnmount () {
  clearInterval(this.myInterval)
}

addIncrement = () => {
  if(this.state.playerOneTurn) {
    this.setState({
      hours: this.state.hours + parseInt(this.state.hoursIncr),
      minutes: this.state.minutes + parseInt(this.state.minutesIncr),
      seconds: this.state.seconds + parseInt(this.state.secondsIncr),
    })
  } else {
    this.setState({
      hoursTwo: this.state.hoursTwo + parseInt(this.state.hoursIncrTwo),
      minutesTwo: this.state.minutesTwo + parseInt(this.state.minutesIncrTwo),
      secondsTwo: this.state.secondsTwo + parseInt(this.state.secondsIncrTwo),
    })
  }
  
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
        onClickTimerPlayerOne={this.onClickTimerPlayerOne}
        onClickTimerPlayerTwo={this.onClickTimerPlayerTwo}
        addIncrement={this.addIncrement}
        gameStart={this.gameStart}
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
