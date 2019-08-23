import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleClick = () => {
        //pushes us to Collection page
        this.props.history.push('/success')
    }

    render() {
        return (
            <>
            <h2>Review Your Feedback</h2>
            <button onClick={this.handleClick}>SUBMIT</button>
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        store
    };
};

export default connect(mapStateToProps)(Review); 