import React, { Component } from "react";

class RobotForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            type: "",
            mass: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let robot = {
            name: this.state.name,
            type: this.state.type,
            mass: this.state.mass
        }

        return (
            <div>
                <p>Add a robot</p>
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" onChange={(e) => this.handleChange(e)} value={this.state.name}></input>
                    <label for="type">Type</label>
                    <input type="text" id="type" name="type" onChange={(e) => this.handleChange(e)} value={this.state.type}></input>
                    <label for="mass">Mass</label>
                    <input type="text" id="mass" name="mass" onChange={(e) => this.handleChange(e)} value={this.state.mass}></input>
                    <input type="submit" value="add" onClick={(e) => this.props.onAdd(e, robot)}></input>
                </form>
            </div>
        )
    }
}

export default RobotForm;