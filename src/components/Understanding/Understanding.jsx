import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    render() {
        return (
            <h2>UNDERSTANDING PAGE</h2>
        )
    }
}

const mapStateToProps = store => {
    return {
        store
    };
};

export default connect(mapStateToProps)(Understanding); 