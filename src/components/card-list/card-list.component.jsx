import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      // Destructure properties from monster
      // in case future iterations use different
      // key names
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
