import React from 'react';
import '../../App.css';



const Increment = props => (
    <div className="clocks">Increment: 
    <input 
    type="number"
    min="0"
    max="24" 
    placeholder="Hours"
    style={{
        border: 'none',
        margin: '0 5px 0 15px',
        width: '60px'
        }}
    />
    :
    <input 
    type="number"
    min="0"
    max="60" 
    placeholder="Minutes"
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
    style={{
        border: 'none',
        marginLeft: '5px',
        width: '60px'
        }}
        />
    </div>
    )


export default Increment;