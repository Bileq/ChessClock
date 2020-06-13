import React from 'react';
import Timer from './Timer';

function Field() {
    return (
        <div style={fieldStyle}>
            <Timer />
            <Timer /> 
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