import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
    render() {
        return (
            <h2>SUPPORTED PAGE</h2>
        )
    }
}

const mapStateToProps = store => {
    return {
        store
    };
};

export default connect(mapStateToProps)(Supported); 