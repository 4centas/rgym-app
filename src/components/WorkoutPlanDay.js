import React, {Component} from 'react'

export class WorkoutPlanDay extends Component {

    render() {
        const day = this.props.day;
        const listIndex = this.props.listIndex;
        console.log('props: ', this.props);
        return (
            <div>
                {
                    [
                        <h3 key={`dayname-${listIndex}`}>{day.dayname}</h3>,
                        day
                            .exercises
                            .map((exercise, index) => {
                                return (
                                    <div key={`exercise-${index}`}>
                                        <h4 key={`exercisename-${index}`}>{`Exercise: ${exercise.exercisename}`}</h4>
                                        <p key={`exercisesets-${index}`}>{`Sets: ${exercise.sets}`}</p>
                                        <p key={`exercisereps-${index}`}>{`Reps: ${exercise.reps}`}</p>
                                    </div>
                                )
                            })
                    ]
                }
            </div>
        )
    }

}

export default WorkoutPlanDay
