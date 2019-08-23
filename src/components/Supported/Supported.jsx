import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

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
        //pushes us to Comments page
        this.props.dispatch({ type: 'SUPPORTED', payload: this.state.item })
        this.props.history.push('/comments')
    }
    render() {
        return (
            <>
            <h2>How well are you being supported?</h2>
            <input onChange={this.handleChange} placeholder='Supported Score Here' />
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

export default connect(mapStateToProps)(Supported); 