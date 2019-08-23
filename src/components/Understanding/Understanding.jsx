import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    handleClick = () => {
        //pushes us to Collection page
        this.props.history.push('/supported')
    }

    render() {
        return (
            <>
            <h2>UNDERSTANDING PAGE</h2>
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