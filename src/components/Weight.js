import React, {Component} from 'react';

export class Weight extends Component {
    state = {
        selectedWeight: undefined
    }

    handleChange = (event) => {
        this.setState({selectedWeight: event.target.value});
    }

    handleSubmit = (event, addWeight) => {
        event.preventDefault();
        addWeight(this.state.selectedWeight);

    }

    render() {
        const addWeight = this.props.addWeight;

        return (
            <div id="weightForm" className="weightFormContainer">
                <div id="weightFormPulse"></div>
                <form onSubmit={(event) => addWeight(event, this.state.selectedWeight)}>
                    <label>
                        <input
                            type="number"
                            className="weightFormWeight"
                            pattern="[0-9]*"
                            name="weight"
                            onInput={this.handleChange}/>
                    </label>
                    <input className="weightFormButton" type="submit" value="OK"/>
                    <div className="weightFormKG">
                        <p>KG</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Weight;
