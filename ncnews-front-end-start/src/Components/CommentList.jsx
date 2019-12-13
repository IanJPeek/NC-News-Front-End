import React, { Component } from 'react';
import axios from "axios";
import { Link } from "@reach/router";
import CommentCard from "./CommentCard";

class CommentList extends Component {
  state = {
    comments: []
    //isLoading: true
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    const { comments } = this.state;
    // console.log(this.props, "CommentList props", comments);
    return (
      <div>
        <h4>Comments</h4>
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard comment={comment} key={comment.comment_id}></CommentCard>
           ) 
          }) 
          }
        </ul>
      </div>
    );
  }

  getComments = () => {
    axios
      .get(
        `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.articleId}/comments`
      )
      .then(({ data }) => {
        this.setState({ comments: data.comments });
      });
  };

  eraseComment = (event) => {
    // select correct individual comment_id...
    console.log(this.props, "props from erase")
    // console.log(event.target, "delete target")
    console.log(this.state, "state in erase comments")
    axios
      .delete(
        `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.articleId}/comments`
      )
      .then(() => {
        axios.get(
          `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.articleId}/comments`
        );
      });
  };
}

export default CommentList;