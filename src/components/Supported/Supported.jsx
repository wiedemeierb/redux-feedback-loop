import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

    handleClick = () => {
        //pushes us to Comments page
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