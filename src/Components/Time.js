import React from 'react';
import {withRouter} from 'react-router-dom'

const Time = () => {
    const time = new Date().toLocaleTimeString([], {timeStyle: 'short'});
    return ( 
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                    <p>{time}</p>
            </div>
        </nav>
     );
}
 
export default withRouter(Time);