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
        this.addReview(); 
    }

    // handleClick = () => {
    //     //pushes us to Collection page
    //     this.props.history.push('/success')
    // }

    //create POST to get data to database, and .history to move to success page
    addReview = event => {
        
        console.log(this.state.item);
        axios
            .post('/api/review', this.props.store)
            .then(response => {
                this.props.history.push('/success');
                this.props.dispatch({
                    type: 'COMMENTS'
                })
                
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

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

    //POST needed with axios to get data to database
    //POST in server side

    render() {
        return (
            <>
            <h2>Review Your Feedback</h2>
            {/* display items on the DOM */}
            <div>
                <h3>Feelings Score</h3>
                {this.state.item.feelings}
                <br/>
                <h3>Understanding Score</h3>
                {this.state.item.understanding}
                <br/>
                <h3>Supported Score</h3>
                {this.state.item.supported}
                <br/>
                <h3>Comments</h3>
                {this.state.item.comments}
            </div>
            <br/>
                <button onClick={this.addReview}>SUBMIT</button>
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