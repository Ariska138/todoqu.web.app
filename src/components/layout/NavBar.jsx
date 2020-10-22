import React from 'react';
import {Link} from 'react-router-dom';
import NavItems from './NavItems';
const NavBar = () => {
    return (
        <nav className="navbar-light bg-light d-flex justify-content-center">
            <Link to="/" className="navbar-brand">
                <h3>TodoQu</h3>
            </Link>
            <NavItems/>
        </nav>
    );
}

export default NavBar;