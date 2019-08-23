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