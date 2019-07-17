import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//import uuid from 'uuid';
import Axios from 'axios';

import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import Programs from './components/Programs';
import WorkoutPlan from './components/WorkoutPlan';

import './App.css';

class App extends Component {
    state = {
        todos: [],
        programs: []
    }

    /*componentDidMount() {

        Axios
            .get('http://localhost:8080/api/todos')
            .then((res) => {
                this.setState({todos: res.data})
            });
    }*/

    // Toggle Completed
    markComplete = (id) => {
        this.setState({
            todos: this
                .state
                .todos
                .map((todo) => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
        })
    }

    // Add Todo
    addTodo = (title) => {
        Axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                title: title,
                completed: false
            })
            .then((res) => {
                this.setState({
                    todos: [
                        ...this.state.todos,
                        res.data
                    ]
                })
            })
    }

    // Delete Todo
    deleteTodo = (id) => {
        Axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                this.setState({
                    todos: [
                        ...this
                            .state
                            .todos
                            .filter(todo => todo.id !== id)
                    ]
                })
            });
    }

    updatePrograms = (programs) => {
        this.setState({programs: programs});
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route
                            path="/todos"
                            render={props => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo}/>
                                    <Todos
                                        todos={this.state.todos}
                                        deleteTodo={this.deleteTodo}
                                        markComplete={this.markComplete}/>
                                </React.Fragment>
                            )}/>
                        <Route path="/about" component={About}/>

                        <Route
                            path="/programs"
                            render={props => (
                                <React.Fragment>
                                    <Programs programs={this.state.programs} updatePrograms={this.updatePrograms}/>
                                </React.Fragment>
                            )}/>

                        <Route
                            path="/planold/:title"
                            component={WorkoutPlan}
                            programs={123}/>

                        <Route
                        path="/plan/:title"
                        render={(props) => <WorkoutPlan {...props} programs={this.state.programs} />}
                        />

                    </div>
                </div>
            </Router>
        );
    }

}

export default App;

/*
{
                id: uuid.v4(),
                title: "Powerlifting",
                separator: [
                    "Week 1", "Week 2", "Week 3"
                ],
                workout: {
                    "Week 1": {
                        "Day 1": {
                            exercise: "Bench Press",
                            sets: "4",
                            reps: "12"
                        },
                        "Day 2": {
                            exercise: "Bench Press",
                            sets: "8",
                            reps: "3"
                        }
                    },
                    "Week 2": {
                        "Day 1": {
                            exercise: "Bench Press",
                            sets: "4",
                            reps: "7"
                        },
                        "Day 2": {
                            exercise: "Bench Press",
                            sets: "6",
                            reps: "3"
                        }
                    }
                }
            }
*/