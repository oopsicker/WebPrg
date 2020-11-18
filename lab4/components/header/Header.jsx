import React from 'react';
import './Header.css';


class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div id="header-container">
                <img className='header-my-logo' src='./components/header/logo.png'/>
                <div className='header-phrase' >batsaikhan;</div>
                <div className='header-rectangle'></div>
            </div>
        )
    }
}
export default Header;