import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    //create local state to take in reducers info
    state = {
        item : {
            feelings: this.props.store.feelingsReducer,
            understanding: this.props.store.understandingReducer,
            supported: this.props.store.supportedReducer,
            comments: this.props.store.commentsReducer,
        }
    }
    //get info to display on page load
    componentDidMount() {
        // this.feedbackReview();
        // this.createPizzaOrder();  
    }

    handleClick = () => {
        //pushes us to Collection page
        this.props.history.push('/success')
    }

    //create function to set local state with reducers info
    // feedbackReview = () => {
    //     console.log(this.state);
    //     this.setState({
    //         item: {
    //             feelings: this.props.store.feelingsReducer,
    //             understanding: this.props.store.understandingReducer,
    //             supported: this.props.store.supportedReducer,
    //             comments: this.props.store.commentsReducer,
    //         }
    //     });
    // };

    //pizza-parlor is a decent example
    
    //create POST to get data to database, and .history to move to success page
    //POST needed with axios to get data to database
    //POST in server side
    //Make returns validate they have inputs //alert message

    render() {
        return (
            <>
            <h2>Review Your Feedback</h2>
            {/* display items on the DOM */}
            <div>
                
                {this.state.item.feelings}
                <br/>
                {this.state.item.understanding}
                <br/>
                {this.state.item.supported}
                <br/>
                {this.state.item.comments}
            </div>
            <button onClick={this.handleClick}>SUBMIT</button>
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        store
    };
};

export default connect(mapStateToProps)(Review); 