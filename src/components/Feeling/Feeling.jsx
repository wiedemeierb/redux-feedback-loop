import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
    //local state
    state = {
        item: '',
    }

    handleChange = (event) => {
        //this sets the new state with what is typed and keep in local state
        this.setState({
            item: event.target.value
        })
    }
    
    
    handleClick = () => {
        //dispatch to reducers
        this.props.dispatch({ type: 'FEELINGS', payload: this.state.item })
        //pushes us to Collection page
        this.props.history.push('/understanding')
    }

    render() {
        console.log(this.state)
        return(
            <>
            {/* text, inputs, buttons */}
            <h2>How are you feeling today?</h2>
            <input onChange={this.handleChange} placeholder='1-5' />
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