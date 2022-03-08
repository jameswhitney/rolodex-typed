import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  // Using props to create a more
  // generic search-box component
  // which can be re-used elsewhere in application
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
