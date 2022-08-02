import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import axois from '../axios'

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axois.get('/tinder/cards')
      
      setPeople(req.data)
    }

    fetchData()
  }, [])


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
              style={{ backgroundImage: `url(${person.imgUrl})` }}
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
