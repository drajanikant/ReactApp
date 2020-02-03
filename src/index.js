import ReactDOM from "react-dom";
import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello</div>;
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
