import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ChatterBox from "./route/chatterBox/ChatterBox"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this._getData();

  }

  _getData = async() => {
    let data = await this._callApi();

    this.setState({
      data: this.state.data.concat(data)
    })
  }

  _callApi = () => {
    return fetch('http://localhost:5000/chatterroom')
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.data)
    return (
      <Router>
        <div>
          <ChatterBox />
        </div>
      </Router>
    )
  }
}

export default App;