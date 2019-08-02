import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default function header(props) {
    return (
        <div
            id="mobile-sidenav"
            className={props.active
                    ? "sidenavOpen"
                    : "sidenavClosed"
            }>
            <div id="link-container">
                <Link className="link" to="/programs">Programas</Link>
                <Link className="link" to="/about">About</Link>
            </div>
        </div>
    )
}