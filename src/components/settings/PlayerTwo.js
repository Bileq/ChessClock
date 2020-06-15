import React, { Component } from 'react'
import '../../App.css';


export class PlayerTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
            hoursTwo: 0,
            minutesTwo: 0,
            secondsTwo: 0,
            hoursIncrTwo: 0,
            minutesIncrTwo: 0,
            secondsIncrTwo: 0
        }
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.timeTwo(
        this.state.hoursTwo,
        this.state.minutesTwo,
        this.state.secondsTwo,
        this.state.hoursIncrTwo,
        this.state.minutesIncrTwo,
        this.state.secondsIncrTwo,
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
                    name="hoursTwo"
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
                    name="minutesTwo"
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
                    name="secondsTwo"
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
                        name="hoursIncrTwo"
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
                        name="minutesIncrTwo"
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
                        name="secondsIncrTwo"
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



export default PlayerTwo;