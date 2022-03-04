import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Per React docs setState using a function that returns the new state object
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((resp) => resp.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  // Better practice than using anonymous function used in render
  // More functions used in render will affect performance
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // Destructure state variables and class methods
    // to make code more readable imo
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
