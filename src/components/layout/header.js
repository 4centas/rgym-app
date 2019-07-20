import React from 'react';
import {Link} from 'react-router-dom';

export default function header(props) {
    return (<header style={headerStyle}>
        <h1>RGYM</h1>
        <p>Peso: {props.weight}</p>
        <Link style={linkStyle} to="/programs">Programas</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>)
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#1566BB',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}