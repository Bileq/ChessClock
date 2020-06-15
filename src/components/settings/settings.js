import React from 'react';
import '../../App.css';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';


const Settings = props => (
        <nav className='settings'>
                <div className="settingsTitle">Settings</div>
            <ul>
                <li><div className="player">Player 1</div></li>
                <PlayerOne time={props.time}/>
                <li><div className="player">Player 2</div></li>
                <PlayerTwo timeTwo={props.timeTwo}/>
                <li>
                <button 
                type="button"
                style={closeButton} 
                className="closeButton"
                onClick={props.click}>X
                </button>
                </li>
            </ul>  
        </nav>   
    );

const closeButton = {
  borderRadius: '50%',
  backgroundColor: 'red',
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  textAlign: 'center',
  margin: '130px 10px 50px 0',
  fontSize: '30px',
  fontWeight: '500'
}

export default Settings;