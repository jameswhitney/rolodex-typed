import { Component } from "react";

import Card from "../card/card.component";
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
          const { id } = monster;
          return <Card key={id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
