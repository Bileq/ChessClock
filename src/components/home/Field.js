import React from 'react';
import Timer from './Timer';

const Field = props => {
    return (
        <div style={fieldStyle}>
            
            <Timer 
            hours={props.hours}
            minutes={props.minutes}
            seconds={props.seconds}
            />
            <Timer 
            hours={props.hours}
            minutes={props.minutes}
            seconds={props.seconds}
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