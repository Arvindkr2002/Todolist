import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/todoList";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
         <h1>TODO LIST</h1>
      <div>
        <TodoList />

      </div>
      </div>
     
    );

  }
}

export default App;