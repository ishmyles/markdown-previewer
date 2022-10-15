import React, { Component } from 'react';
import '../assets/styles/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <nav id='navbar'>
                <p>Markdown Previewer</p> {/* Place holder for app logo */}
                <div className='btn' onClick={this.props.changeTheme}>
                    {(this.props.darkTheme) ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon"></i>}
                </div>
            </nav> 
        );
    }
}
 
export default Navbar;
