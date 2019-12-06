import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="http://www.inreflection.net">
                    In Reflection
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#">Garments</a>
                </li>
                <li>
                    <a href="#">Racks</a>
                </li>
                <li>
                    <a href="#">Looks</a>
                </li>
                <li>
                    <a href="#">Occasions</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
