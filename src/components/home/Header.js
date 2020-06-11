import React from 'react';
import '../../App.css';
import SettingsToggleButton from '../settings/SettingsToggleButton';


const Header = props => (
    
        <header style={headerStyle}>
          <SettingsToggleButton click={props.settingsClickHandler}/>       
            Chess Clock
        </header>
    )


const headerStyle = {
    color: '#fff',
    padding: '60px',
    textAlign: 'center',
    fontSize: '104px',
    border: '1px solid red',
    opacity: '0.8',
}


export default Header;