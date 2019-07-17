import React, {Component} from 'react';
import ProgramItem from './ProgramItem';
//import PropTypes from 'prop-types';

import Axios from 'axios';

class Programs extends Component {
    state = {
        programs: []
    };

    async getPlans() {
        Axios
            .get('http://localhost:8080/api/getPlanList')
            .then((res) => {
                return res.data
            });
    }

    componentDidMount() {
        const App = this.props;

        console.log(App)

        if (!App.programs.length) {
            Axios
            .get('http://localhost:8080/api/getPlanList')
            .then((res) => {
                App.updatePrograms(res.data);
            });
        }
    }

    render() {
        const App = this.props;

        if (!App.programs.length) {
            return (<div>Loading ...</div>);
        } else {
            return App.programs.map(
                (program) => (<ProgramItem key={program.title} program={program}/>)
            );
        }

    }

}

export default Programs;