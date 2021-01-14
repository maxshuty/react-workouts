import React, { useState } from 'react';
import api from '../api/workoutApi';
import Card from '../components/Card';

const WorkoutCards = () => {
  const workouts = api.getWorkouts();
  // TODO: Max P - with this implementation and no additional functionality needed we could simply use CSS to achieve this...
  const [activeCardId, setActiveCardId] = useState(-1);

  const handleClick = (id) => {
    setActiveCardId(id);
  };

  return (
    <div className="card-container">
      {workouts.map((card) => (
        <Card card={card} active={activeCardId === card.id} handleClick={() => handleClick(card.id)} key={card.id} />
      ))}
    </div>
  );
};

export default WorkoutCards;
