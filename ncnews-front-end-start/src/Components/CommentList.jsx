import React, { Component } from 'react';
import axios from "axios";
import { Link } from "@reach/router";

class CommentList extends Component {
  state = {
    comments: []
    //isLoading: true
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    const {comments} = this.state;
    console.log(this.props)
    return (
      <div>
        <h4>Comments</h4>
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id} className="oneComment">
                {/* remove link - unnecessary here! */}
                {/* <Link
                  className="hypertextComment"
                  to={`comments`}
                  key={comment.comment_id}
                > */}
                <p>
                  <strong>Comment: </strong>
                  {comment.body}
                </p>
                {/* </Link> */}
              </li>
            );
          })}
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
}

export default CommentList;