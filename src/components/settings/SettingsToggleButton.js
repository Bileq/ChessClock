import React from 'react';
import settings from '../settings/settings.svg';
import '../../App.css';

const settingsToggleButton = props => (
    <button className='settingsBtn' onClick={props.click} style={{
        position: 'fixed',
        top: '90px',
        left: '15%',
        borderRadius: '25px',                  
    }}>
        <img src={settings} alt="settings icon" style={imgStyle} />
    </button>
)

const imgStyle = {
    backgroundColor: '#ff0',
    height: '65px',
    width: '65px',
    borderRadius: '30px',
}

export default settingsToggleButton