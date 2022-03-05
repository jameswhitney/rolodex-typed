import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  // When props change or state changes
  // Entire functional component is run
  // again which re-renders UI

  // setValue does not trigger a re-render
  // unless stateValue changes then React will
  // re-render/run the function again.
  const [searchField, setSearchField] = useState(""); // [stateValue, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // useEffect takes two arguments
  // first is callback, second is an array
  // of dependencies like props.
  // useEffect runs very first time App mounts.
  // If dependencies change, useEffect is called again
  // useEffect will not run on subsequent re-renders
  // unless array of dependencies changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((resp) => resp.json())
      .then((users) => setMonsters(users));
  }, []);

  // Moved filter functionalitiy into useEffect
  // Added monsters state and searchField state
  // to dependencies array so we only filter
  // when either monsters array changes(it shouldn't in this app but it could)
  // or searchField string changes
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-searchbox"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
