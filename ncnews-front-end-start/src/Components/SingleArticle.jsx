import React, { Component } from 'react';
import axios from "axios";

class SingleArticle extends Component {
  state = {
    article: []
    //isLoading: true
  };

  componentDidMount() {
    this.getArticle();
  }

  render() {
    const {article} = this.state;
    return <div>
<h2>Article: {article.title} </h2>
    </div>;
  }

  getArticle = () => {
    axios
      .get(`https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}`)
      .then(({ data }) => {
        console.log(data);
        this.setState({ article: data.article });
      });
  };
}

export default SingleArticle;