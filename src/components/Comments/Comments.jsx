import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        item: '',
    }

    handleChange = (event) => {
        //this sets the new state with what is typed and kept in local state
        this.setState({
            item: event.target.value
        })
    }
    
    handleClick = () => {
        //pushes us to Review page
        this.props.dispatch({ type: 'COMMENTS', payload: this.state.item })
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