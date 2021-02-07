import { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../actionCreators";
import { getCounter } from "../selectors";

class Counter extends Component {
    //setare context prin ctor
   /*constructor() {
        super();
        this.increment = this.increment.bind(this);
       this.decrement = this.decrement.bind(this);
    }*/
    render() {
        const props = this.props;
        console.log(props);
        return (
            <div>
                <h1>Counter value: {this.props.counter}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }

    //daca folosim arrow function se seteaza contextul automat
    increment = () => {
        this.props.actions.increment();
    }

    decrement = () => {
        this.props.actions.decrement();
    }
}

function mapStateToProps(state) {
    return {
        counter: getCounter(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            increment, decrement
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);