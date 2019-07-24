import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class ProgramItem extends Component {

    render() {
        const {title, image} = this.props.program;
        console.log('Program: ', this.props.program);

        return (
            <div className="program" style={{backgroundImage: `url(${image})`}}>
                <Link to={`/plan/${title}`} className="title">{title}</Link>
            </div>
        )
    }

}

export default ProgramItem;