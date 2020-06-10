import React from 'react';
import Timer from './Timer';

function Field() {
    return (
        <div style={fieldStyle}>
            {/*<Timer />
            <Timer />\
           //UPDATE FIELD  
            
            */}
        </div>
    );
}

const fieldStyle = {
    color: '#ddd',
    padding: '90px',
    border: '1px solid red',
    backgroundColor: 'darkgreen',
    marginTop: '100px',
    width: '50%',
    marginLeft: '25%',
    height: '500px'  

};

export default Field;