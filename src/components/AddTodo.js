import React, {Component} from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = (e) => {
        e.preventDefault();

        const App = this.props;

        App.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                style={{
                    display: 'flex'
                }}>
                <input
                    value={this.state.title}
                    onChange={this.onChange}
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    style={{
                        flex: '10',
                        padding: '5px'
                    }}/>
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{
                        flex: '1'
                    }}/>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
