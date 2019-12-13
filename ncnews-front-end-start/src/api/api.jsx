import React from 'react';
import axios from "axios";

export const patchVotes = () => {
  return axios.patch(
    `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}`, votes=voteChange
  ).then(({data}) =>{
  console.log(data, "in patch request")
  this.setState((currentState) =>  {
    return voteDifference = currentState.voteDifference
  });
  })
}
