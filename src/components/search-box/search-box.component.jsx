import { Component } from "react";

import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      // Using props to create a more
      // generic search-box component
      // which can be re-used elsewhere in application
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
