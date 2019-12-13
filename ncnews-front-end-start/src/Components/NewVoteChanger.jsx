import React, { Component } from 'react';

class NewVoteChanger extends Component {

  state = {
voteDifference: 0
  }

  render() {
    return (
      <div>
        <button>Vote up</button>

        <button>Vote down</button>
        
      </div>
    );
  }
}

export default NewVoteChanger;