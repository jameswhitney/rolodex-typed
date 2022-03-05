import { Component } from "react";

import "./card.styles.css";

// This component handles the generic
// card logic for re-use in other parts of
// application. Currently used in CardList
class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
