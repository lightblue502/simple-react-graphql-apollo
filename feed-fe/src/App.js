import React, { Component } from "react";
import PersonList from "./PersonList";
import CreatePerson from "./CreatePerson";

class App extends Component {
  render() {
    return (
      <div>
        <CreatePerson />
        Persons <PersonList />
      </div>
    );
  }
}

export default App;
