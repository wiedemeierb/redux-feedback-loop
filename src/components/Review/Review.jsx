import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleClick = () => {
        //pushes us to Collection page
        this.props.history.push('/success')
    }

    //pizza-parlor is a decent example
    //create local state to take in reducers info
    //create function to set local state with reducers info
    //display items on the DOM
    //create POST to get data to database, and .history to move to success page
    //POST needed with axios to get data to database
    //POST in server side
    //Make returns validate they have inputs //alert message

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