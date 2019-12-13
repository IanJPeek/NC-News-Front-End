import React, { Component } from 'react';
import axios from 'axios';

class AddComment extends Component {
  state = {
    UsernameInput: "jessjelly",
    CommentInput: ""
  };
  
  render() {
    const { UsernameInput, CommentInput } = this.state;
    // console.log(this.props, "start of AddComment")
    // console.log(this.state, "added comment state")
    return (
      <div className="AddCommentForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            <strong>Username: </strong>
            <input
              type="text"
              name="UsernameInput"
              value={UsernameInput}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            <strong>Comment: </strong>
            <input
              type="text"
              name="CommentInput"
              value={CommentInput}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <button className="CommentSubmitButton">Have My Say!</button>
        </form>
      </div>
    );
  }

handleChange = event => {
  // console.log(this.state, "in handleChange");
  const {name, value} = event.target;
  this.setState({[name]: value})
}

handleSubmit = event => {
  const article_id = this.props.articleId;
event.preventDefault();
const {UsernameInput, CommentInput} = this.state;
// console.log(this.props, "props in submit")
axios
  .post(
    `https://nc-news-ianp.herokuapp.com/api/articles/${article_id}/comments`,
    { username: UsernameInput, body: CommentInput }
  )
  .then(({ data }) => {
    console.log(data, "addedComment");
    this.setState({ UsernameInput: "", CommentInput: "" });
  });
}


}

export default AddComment;