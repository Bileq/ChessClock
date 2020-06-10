import React from 'react';
import settings from './settings3.svg';

function Header() {
    return (
        <header style={headerStyle}>
             <button className='settingsBtn' style={{
                  position: 'fixed',
                  top: '90px',
                  left: '15%',
                  borderRadius: '25px',                  
             }}>
             <img src={settings} alt="settings icon" style={imgStyle} /></button>
            Chess Clock
        </header>
    );
}

const headerStyle = {
    color: '#fff',
    padding: '60px',
    textAlign: 'center',
    fontSize: '104px',
    border: '1px solid red',
    opacity: '0.8',
}

const imgStyle = {
    backgroundColor: '#ff0',
    height: '65px',
    width: '65px',
    borderRadius: '30px',
}



export default Header;