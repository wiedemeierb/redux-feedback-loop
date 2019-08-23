import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    
    handleClick = () => {
        //pushes us to Review page
        this.props.history.push('/review')
    }

    render() {
        return (
            <>
            <h2>Any comments you want to leave?</h2>
            <input onChange={this.handleChange} placeholder='Leave Comments Here' />
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

export default connect(mapStateToProps)(Comments); 