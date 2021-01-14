import React from 'react';

// TODO: Max P - split this into multiple components (cardHeader, cardBody, cardFooter, etc)
const Card = ({ card, active, handleClick }) => {
  return (
    <div onClick={handleClick} className={`card ${active ? 'active' : ''}`} tabIndex="0">
      <div className="card-image-container" style={{ backgroundImage: `url(images/${card.assetTitle}-thumb.jpg)` }}>
        {card.isSeries && (
          <div className="card-info-series">
            <div className="card-text-large">{card.totalWorkouts}</div>
            <div className="card-workout-text">Workouts</div>
            <img src="icons/menu.svg" className="card-icon-menu" alt="Expand series" />
          </div>
        )}
      </div>
      <div className="card-info-container">
        <div>
          <div className="card-title-container">
            <div className="card-title">{card.title}</div>
            <img src={`images/${card.assetTitle}-trainer.jpg`} alt={card.trainer} className="card-trainer-image" />
          </div>
          {!card.isSeries && (
            <div className="card-detail-container">
              <div>
                <img src="icons/stopwatch.svg" className="card-icon" alt="Stopwatch icon" />
                {card.duration}
              </div>
              <div>
                <img src="icons/running-track.svg" className="card-icon card-icon-distance" alt="Distance icon" />
                {card.distance}
              </div>
            </div>
          )}
        </div>
        {active && (
          <div>
            <a href="#" className="card-view-details">
              View Details
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
