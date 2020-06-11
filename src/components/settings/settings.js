import React from 'react';
import '../../App.css';
//import Time from './Time';
//import Increment from './Increment';


const Settings = props => (
        <nav className='settings'>
            <ul>
                <li><a href="/">Player 1</a></li>
                <li><a href="/">Player 2</a></li>
                <button onClick={props.click}>X</button>
            </ul>  
        </nav>   
    );


export default Settings;