import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <h2>FEELINGS PAGE</h2>
        )
    }
}

const mapStateToProps = store => {
    return {
        store
    };
};

export default connect(mapStateToProps)(Comments); 