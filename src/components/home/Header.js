import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            Chess Clock
        </header>
    );
}

const headerStyle = {
    color: '#ddd',
    padding: '60px',
    textAlign: 'center',
    fontSize: '104px',
    //backgroundColor: '#222',
    border: '1px solid red',
};

export default Header;