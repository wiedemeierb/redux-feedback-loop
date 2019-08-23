import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {

    handleClick = () => {
        //pushes us to Review page
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <h2>SUCCESS -- THANK YOU FOR YOUR SUBMISSION -- PAGE</h2>
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

export default connect(mapStateToProps)(Success); 