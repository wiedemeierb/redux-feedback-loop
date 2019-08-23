import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

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
        //pushes us to Collection page
        this.props.dispatch({ type: 'FEELINGS', payload: this.state.item })
        this.props.history.push('/understanding')
    }

    render() {
        // console.log(this.state)
        return(
            <>
            <h2>How are you feeling today?</h2>
            <input onChange={this.handleChange} placeholder='Feelings Score Here' />
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