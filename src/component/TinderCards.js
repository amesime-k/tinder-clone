import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://i.insider.com/62a7d08f6053710019ea154f?width=700",
    },
    {
      name: "Jeff Bezos",
      url: "https://i.guim.co.uk/img/media/e422f20fb3d760f1f410eeeda98bc7b355f621d8/0_42_2925_1755/master/2925.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c6ce04726558a02c6c810812d348d756",
    },
  ]);

  const swiped = (direction, namedToDelete) => {
    console.log("removing" + namedToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen! ");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
