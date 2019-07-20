import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//import uuid from 'uuid';
import Axios from 'axios';

import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Weight from './components/Weight';

import Programs from './components/Programs';
import WorkoutPlan from './components/WorkoutPlan';

import './App.css';

class App extends Component {
    state = {
        todos: [],
        weight: undefined,
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

    addWeight = (event, weight) => {
        event.preventDefault();
        this.setState({weight: weight});
    }

    updatePrograms = (programs) => {
        this.setState({programs: programs});
    }

    renderPrograms = () => {
        return () => {
            if (this.state.weight) {
                return (<React.Fragment>
                    <Programs programs={this.state.programs} updatePrograms={this.updatePrograms}/>
                </React.Fragment>)
            } else {
                return (<Weight weight={this.state.weight} addWeight={this.addWeight}/>)
            }
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header weight={this.state.weight}/>
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
                            render={this.renderPrograms()}/>

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