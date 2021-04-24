import React from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2';


const Navbar = ({ darkMode,statusOfMode }) => {
    return (
        <div className="navbar">
            <p className="navbar__text">Where in the world?</p>
            <p
                onClick={darkMode}
                className="navbar__button">
                <Brightness2Icon className="fas fa-moon" />Dark Mode
            </p>
        </div>
    )
}

export default Navbar;
