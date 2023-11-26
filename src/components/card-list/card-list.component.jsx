import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <Card monster={monster} />
          </div>
        );
      })}
    </div>
    );
export default CardList;
