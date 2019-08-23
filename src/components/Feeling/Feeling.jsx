import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
    render() {
        return(
            <h2>FEELINGS PAGE</h2>
        )
    }
}

const mapStateToProps = store => {
    return {
        store
    };
};

export default connect(mapStateToProps)(Feeling); 