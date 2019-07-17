import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class ProgramItem extends Component {

    getStyle = () => {
        return {background: '#f4f4f4', padding: '10px', borderBottom: '1px #ccc dotted', textDecoration: 'none', cursor: 'pointer'}
    }

    render() {
        const {title} = this.props.program;
        
        return (<Link to={`/plan/${title}`} style={this.getStyle()}>{title}</Link>)
    }

}
/*
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}*/

export default ProgramItem;