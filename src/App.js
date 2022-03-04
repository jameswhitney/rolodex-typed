import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
    // Logging used to show order in which lifecycles are run
    console.log("constructor");
  }

  // Per React docs setState using a function that returns the new state object
  componentDidMount() {
    // Logging used to show order in which lifecycles are run
    console.log("componentDidMount");
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((resp) => resp.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          // Logging current state instead of previous state
          () => console.log(this.state)
        )
      );
  }

  // Better practice than using anonymous function used in render
  // More functions used in render will affect performance
  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    // Logging used to show order in which lifecycles are run
    console.log("render");
    // Destructure state variables and class methods
    // to make code more readable imo
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {
          // Map over monsters array to create list of h1 elements
          filterMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
