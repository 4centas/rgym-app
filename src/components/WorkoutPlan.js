import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import WorkoutPlanDay from './WorkoutPlanDay';

export class WorkoutPlan extends Component {

    getDay(separator, listIndex) {
        const days = separator.days;
        return (
            <div>
                {
                    [
                        <h2 key={listIndex}>{separator.separator}</h2>,
                        days.map((day, index) => {
                            return (<WorkoutPlanDay key={index} day={day} listIndex={listIndex}/>)
                        })
                    ]
                }
            </div>
        );
    }

    render() {
        const {title} = this.props.match.params;

        const programs = this.props.programs;

        if (!programs.length) {
            return (<Redirect to='/programs'/>);
        } else {
            const {workout} = programs.filter(program => program.title === title)[0];

            console.log('workout: ', workout);
            return (
                <div>
                    <h1>{title}</h1>
                    <ul>
                        {
                            <div>
                                    {
                                        workout.map((separator, index) => {
                                            return (
                                                <li key={index}>
                                                    {this.getDay(separator, index)}
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                        }
                    </ul>
                </div>
            );
        }

    }
}

export default WorkoutPlan
