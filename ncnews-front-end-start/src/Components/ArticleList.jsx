import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import { Router } from "@reach/router";
import SingleArticle from "../Components/SingleArticle";


class ArticleList extends Component {
  state = {
    articles: []
    //isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }
  
  render() {
    const { articles } = this.state;
    //  isLoading functionality
    //  const { isLoading } = this.state;
    //  if (isLoading) return <p>Fetching d'news!</p>;
    
    return (
      <main>
        <h2>Articles</h2>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.article_id} className="oneArticle">
                <label>
                  <h3>Title: {article.title}</h3>
                </label>
                <p>
                  <label>
                    <strong>Author: </strong> {article.author}
                  </label>
                </p>
                <p>{article.body}</p>
                <Link
                  to={`/articles/${article.article_id}`}
                  key={article.article_id}
                ></Link>
              </li>
              //onClick - article should navigate to singleArticle/ one article page...
            );
          })}
        </ul>
      </main>
    );
  }
  getArticles = () => {
    axios.get(
      "https://nc-news-ianp.herokuapp.com/api/articles/"
      )
  .then(({data}) => {console.log(data)
    this.setState({ articles: data.articles});
  })
  }


}


export default ArticleList;
