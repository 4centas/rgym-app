import React, {Component} from 'react';
import ProgramItem from './ProgramItem';
import Loading from './layout/loading';
//import PropTypes from 'prop-types';

import Axios from 'axios';

class Programs extends Component {
    state = {
        programs: []
    };

    componentDidMount() {
        const App = this.props;

        if (!App.programs.length) {
            Axios
            .get(`https://4centas-rgym-api.glitch.me/api/getPlanList`)
            .then((res) => {
                App.updatePrograms(res.data);
            });
        }
    }

    render() {
        const App = this.props;

        if (!App.programs.length) {
            return (<Loading/>);
        } else {
            return (<div id="program-list">{App.programs.map(
                (program) => (<ProgramItem key={program.title} program={program}/>)
            )}</div>);
        }

    }

}

export default Programs;