import React, { Component } from "react";
import axios from "axios"

// const patchVotes = () => {
//    return axios.patch(
//      `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}`, votes=voteChange
//    ).then(({data}) =>{
//    console.log(data, "in patch request")
//    this.setState((currentState) =>  {
//      return voteDifference = currentState.voteDifference
//    });
//    })
//  }

class VoteOnArticle extends Component {
  // handleVote = voteChange => {
    //   // console.log(event.target.value);
    //   patchVotes(voteChange, article_id);
    // };
    
    
    state = {
      voteDifference: 0
    };
    
    render(props) {
      console.log(this.props, "vote")
    const { votes } = this.props;
    console.log(votes)
    return (
      <div>
        {/* <button onClick={handleVote} value={1}>
          Vote Up
        </button> */}
        <p>Current Votes: {votes}</p>
        {/* <button onClick={handleVote} value={-1}>
          Vote Down
        </button> */}
      </div>
    );
  }


}

export default VoteOnArticle;
