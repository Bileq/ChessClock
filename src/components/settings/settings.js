import React from 'react';
import '../../App.css';
import Time from './Time';
import Increment from './Increment';


const Settings = props => (
        <nav className='settings'>
                <div className="settingsTitle">Settings</div>
            <ul>
                <li><div className="player">Player 1</div></li>
                <Time />
                <Increment />
                <li><div className="player">Player 2</div></li>
                <Time />
                <Increment />
                <button 
                type="button"
                style={closeButton} 
                className="closeButton"
                onClick={props.click}>X
                </button>
            </ul>  
        </nav>   
    );

const closeButton = {
  borderRadius: '50px',
  backgroundColor: 'red',
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',
  marginBottom: '50px',
  fontSize: '30px',
  fontWeight: '500'
}

export default Settings;