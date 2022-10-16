import React, { Component } from 'react';
import '../assets/styles/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <nav id='navbar'>
                <h1 id="logo">&lt;MarkedUp/&gt;</h1>
                <div className='btn' onClick={this.props.changeTheme}>
                    {(this.props.darkTheme) ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon"></i>}
                </div>
            </nav> 
        );
    }
}
 
export default Navbar;
