import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        item: '',
    }

    handleChange = (event) => {
        //this sets the new state with what is typed and kept in local state
        this.setState({
            item: event.target.value
        })
    }

    handleClick = () => {
        //pushes us to Collection page
        this.props.dispatch({ type: 'UNDERSTANDING', payload: this.state.item })
        this.props.history.push('/supported')
    }

    render() {
        return (
            <>
            <h2>How well are you understanding the content?</h2>
            <input onChange={this.handleChange} placeholder='Understanding Score Here' />
            <button onClick={this.handleClick}>NEXT</button>
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        store
    };
};

export default connect(mapStateToProps)(Understanding); 