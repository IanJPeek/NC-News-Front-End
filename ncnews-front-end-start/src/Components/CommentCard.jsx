import React from 'react';
import axios from "axios";
import { Link } from "@reach/router";


function CommentCard(props) {
  const {comment}= props
  const {comment_id} = props
  
  
  const eraseComment = () => {
    console.log(props, "commmentCard props");
    console.log(comment, "comment?")
      axios.delete(
        `https://nc-news-ianp.herokuapp.com/api/comments/${comment.comment_id}`
      );
      }

  return (
    <div>
      <li key={comment.comment_id} className="oneComment">
        <p>
          <strong>Comment: </strong>
          {comment.body}
        </p>
        <p className="Votepara">
          <strong>Votes: </strong>
          {comment.votes}
        </p>
        <button
          onClick={() => {
            eraseComment();
          }}
          className="eraseCommentButton"
          >
          Banish Opinion
        </button>
      </li>
    </div>
  );
  
  
};


export default CommentCard;