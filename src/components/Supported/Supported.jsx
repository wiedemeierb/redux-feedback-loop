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
            <h2>SUPPORTED PAGE</h2>
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