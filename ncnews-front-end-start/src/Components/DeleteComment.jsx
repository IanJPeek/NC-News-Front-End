import React from 'react';
import axios from 'axios';

function DeleteComment(props) {
  return (
    <div>
      <button eraseComment={eraseComment}>Banish Opinion</button>
    </div>
  );

  const eraseComment = () =>{
    axios.delete(
      `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}`
    );
  }
}

export default DeleteComment;