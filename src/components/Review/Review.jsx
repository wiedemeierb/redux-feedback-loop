import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    handleClick = () => {
        //pushes us to Collection page
        this.props.history.push('/success')
    }

    render() {
        return (
            <>
            <h2>REVIEW</h2>
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