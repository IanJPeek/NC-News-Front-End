import React from 'react';
import './App.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar"
import ArticleList from "./Components/ArticleList"
import { Router } from "@reach/router";
import SingleArticle from './Components/SingleArticle';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar className="NavBar"></NavBar>
      <Router>
        <ArticleList className="ArticleList" path="/"></ArticleList>
        <ArticleList className="TopicArticles" path="/topics/:topic"></ArticleList>
        <SingleArticle path="/articles/:article_id"></SingleArticle>
      </Router>
    </div>
  );
}

export default App;
