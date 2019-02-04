import React, { Component } from 'react';
import Comment from './Comment';


class ChatterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>ChatterBox</h1>
        <Comment />
      </div>
    )
  }
}

export default ChatterBox;
