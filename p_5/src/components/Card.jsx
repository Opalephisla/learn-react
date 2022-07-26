import React from "react"

const Card = (props) => {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "sold out"
  } else if (props.location === "Online") {
    badgeText = "online"
  }
  return (
    <div className="card">
      {badgeText && <span className="card--status">{badgeText}</span>}
      <img
        className="card--image"
        src={`../images/${props.coverImg}`}
        alt="card-img"
      />
      <div className="card--stats">
        <img className="card--icon" src="./images/icon.png" alt="card-icon" />
        &nbsp;
        <span>{props.stats.rating}&nbsp;</span>
        <span className="gray">({props.stats.reviewCount}) •&nbsp;</span>
        <span className="gray">{props.location}</span>
      </div>
      <span className="card--title">{props.title}</span>
      <span className="card--price">
        <strong>From ${props.price}</strong> / person
      </span>
    </div>
  )
}

export default Card
