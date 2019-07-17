import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        const App = this.props;
        return this
            .props
            .todos
            .map(
                (todo) => (<TodoItem key={todo.id} todo={todo} deleteTodo={App.deleteTodo} markComplete={App.markComplete}/>)
            );
    }

}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default Todos;