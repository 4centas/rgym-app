import React from 'react';
import {Link} from 'react-router-dom';

export default function header(props) {
    return (
        <div id="header">
            <h1 id="header-logo">RGYM</h1>
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

/*
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#1566BB',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}*/