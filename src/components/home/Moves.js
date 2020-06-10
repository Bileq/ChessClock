import React from 'react';


function Moves() {
    return (
        <div style={movesStyle}>
            Moves: X
        </div>
    );
}

const movesStyle = {
    color: '#bbb',
    fontSize: '18px',
    position: 'relative',
    top: '25px',
    left: '350px',
};

export default Moves;