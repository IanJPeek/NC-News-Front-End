import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import { Router } from "@reach/router";
import ArticleCard from "../Components/ArticleCard";
import SingleArticle from "../Components/SingleArticle";


class ArticleList extends Component {
  state = {
    articles: []
    //isLoading: true
  };

  componentDidMount() {
    this.getArticlesModifiedParams();
  }

  render() {
    const { articles } = this.state;
    //  isLoading functionality
    //  const { isLoading } = this.state;
    //  if (isLoading) return <p>Fetching d'news!</p>;

    return (
      <main>
        <h2>Main Articles Page</h2>
        <ul>
          {articles.map(article => {
            return ( 
            <ArticleCard article={article} key={article.article_id}></ArticleCard>
            );
          })}
        </ul>
      </main>
    );
  }
  getArticles = () => {
    axios
      .get("https://nc-news-ianp.herokuapp.com/api/articles/")
      .then(({ data }) => {
        console.log(data);
        this.setState({ articles: data.articles });
      });
  };

  getArticlesModifiedParams = () => {
    const topic = this.props.topic;
    return axios
      .get("https://nc-news-ianp.herokuapp.com/api/articles", {
        params: {
          topic: topic
        }
      })
      .then(({ data }) => {
        console.log(data, "from getArticles");
        this.setState({ articles: data.articles });
      })
      .catch(err => console.dir(err));
  };
}

export default ArticleList;
