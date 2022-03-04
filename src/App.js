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

  render() {
    // Logging used to show order in which lifecycles are run
    console.log("render");

    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchString);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          // This example of using an anonymous function is a bad practice
          // Once it is run it is no longer in memory. So for each re-render
          // the function must be created again and again, etc
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchString };
            });
          }}
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
