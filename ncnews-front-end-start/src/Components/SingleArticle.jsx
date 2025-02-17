import React, { Component } from 'react';
import axios from "axios";
import CommentList from "./CommentList"
import AddComment from "./AddComment";
import VoteOnArticle from './VoteOnArticle';

class SingleArticle extends Component {
  state = {
    article: {}
    //isLoading: true
  };

  componentDidMount() {
    this.getArticle();
  }
  
  render() {
    const { article } = this.state;
    console.log(article, "article")
    return (
      <div>
        <h2>{article.title} </h2>
        <p>
          <strong>Author:</strong> {article.author}
        </p>
        <p>{article.body}</p>
        <VoteOnArticle votes={article.votes}></VoteOnArticle>
        <CommentList articleId={this.props.article_id}></CommentList>
        <AddComment articleId={this.props.article_id}></AddComment>
      </div>
    );
  }
  
  getArticle = () => {
    axios
    .get(
      `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data }) => {
        // console.log(data);
        this.setState({ article: data.article });
      });
  };
}


export default SingleArticle;