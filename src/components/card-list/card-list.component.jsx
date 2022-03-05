import { Component } from "react";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          // Destructure properties from monster
          // in case future iterations use different
          // key names
          const { id, name, email } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
