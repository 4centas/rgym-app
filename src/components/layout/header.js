import React from 'react';
import {Link} from 'react-router-dom';

export default function header(props) {
    return (
        <div id="header">
            <Link to={'/programs'} id="header-logo">RGYM</Link>
            <div id="header-links">
                <div id="header-link-container">
                    <Link className="header-link" to="/programs">Programas</Link>
                    <Link className="header-link" to="/about">About</Link>
                </div>
            </div>
            <p id="header-weight">{props.weight} KG</p>
        </div>
    )
}