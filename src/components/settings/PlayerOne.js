import React, { Component } from 'react'
import '../../App.css';


export class PlayerOne extends Component {
    constructor(props){
        super(props)
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            hoursIncr: 0,
            minutesIncr: 0,
            secondsIncr: 0
        }
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.time(
        this.state.hours,
        this.state.minutes,
        this.state.seconds,
        this.state.hoursIncr,
        this.state.minutesIncr,
        this.state.secondsIncr,
        )
            
    }
     
    onChange = e => {
        this.setState({ [e.target.name] : e.target.value});
    }
    
    render() {
        return (
            <div className="clocks">                
                <form onSubmit={this.onSubmit} >
                
                    {/* Time */}

                    Time: 
                    <input 
                    type="number"
                    min="0"
                    max="24" 
                    placeholder="Hours"
                    name="hours"
                    onChange={this.onChange}
                    style={{
                        border: 'none',
                        margin: '0 5px 0 45px',
                        width: '60px'
                        }}
                        
                    />
                    
                    :
                    <input 
                    type="number"
                    min="0"
                    max="60" 
                    placeholder="Minutes"
                    name="minutes"
                    onChange={this.onChange}
                    style={{
                        border: 'none',
                        margin: '0 5px 0 5px',
                        width: '60px'
                        }}
                    />
                    :
                    <input 
                    type="number"
                    min="0"
                    max="60" 
                    placeholder="Seconds"
                    name="seconds"
                    onChange={this.onChange}
                    style={{
                        border: 'none',
                        marginLeft: '5px',
                        width: '60px'
                        }}
                    />

                    {/* Space between time and increment */}
                    
                    <div style={{padding: '20px'}}></div>

                    {/* Increment */}

                    Increment:
                    <input 
                        type="number"
                        min="0"
                        max="24" 
                        placeholder="Hours"
                        name="hoursIncr"
                        onChange={this.onChange}
                        style={{
                            border: 'none',
                            margin: '0 5px 0 13px',
                            width: '60px'
                            }}
                        />
                        :
                        <input 
                        type="number"
                        min="0"
                        max="60" 
                        placeholder="Minutes"
                        name="minutesIncr"
                        onChange={this.onChange}
                        style={{
                            border: 'none',
                            margin: '0 5px 0 5px',
                            width: '60px'
                            }}
                        />
                        :
                        <input 
                        type="number"
                        min="0"
                        max="60" 
                        placeholder="Seconds"
                        name="secondsIncr"
                        onChange={this.onChange}
                        style={{
                            border: 'none',
                            marginLeft: '5px',
                            width: '60px'
                            }}
                        /><br/>

                        {/*Submit button*/}
                        <div style={{textAlign: 'center', marginRight: '50px'}} className="checkBtn">
                        <input
                        type="submit"
                        value="✓"
                        style={btnStyle}
                        />
                        </div>
                </form>
            </div>
        )
    }
}
    
const btnStyle = {
    backgroundColor: '#BFFF00',
    fontSize: '30px',
    height: '50px',
    width: '50px',
    marginTop: '50px',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '50%',
}



export default PlayerOne;