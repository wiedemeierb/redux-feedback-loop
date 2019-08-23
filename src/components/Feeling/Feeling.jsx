import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    handleClick = () => {
        //pushes us to Collection page
        this.props.history.push('/understanding')
    }

    render() {
        return(
            <>
            <h2>FEELINGS PAGE</h2>
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

export default connect(mapStateToProps)(Feeling); 