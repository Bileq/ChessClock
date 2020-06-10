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
    padding: '100px',
    textAlign: 'center',
    fontSize: '104px',
};

export default Header;