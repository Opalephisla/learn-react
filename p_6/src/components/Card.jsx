import React from "react"

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={props.imageUrl} alt="logo" />
      <div className="card-info">
        <div className="card-location">
          <img
            className="card-location-pin"
            src="./images/pin.png"
            alt="location-pin"
          />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h3>{props.title}</h3>
        <div className="card-dates">
          <span>{props.startDate}</span>&nbsp;-&nbsp;
          <span>{props.endDate}</span>
        </div>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
