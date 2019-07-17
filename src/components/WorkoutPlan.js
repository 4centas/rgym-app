import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export class WorkoutPlan extends Component {

    getList(workoutplan) {
        return (
            <div>
                {
                    workoutplan.map((separator) => {
                        return <li>{separator.separator}</li>
                    })
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
                                                    {separator.separator
                                                    // Add "WorkoutPlanDay" Component here
                                                }
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
