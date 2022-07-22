import React from "react"
import CardIcon from "../images/icon.png"

const Card = (props) => {
  return (
    <div className="card">
      <p className="card--status">{props.status}</p>
      <img className="card--image" src={props.img} alt="card-img" />
      <div className="card--stats">
        <img className="card--icon" src={CardIcon} alt="card-icon" />
        <span>5.0&nbsp;</span>
        <span className="gray">{props.rating} •&nbsp;</span>
        <span className="gray">{props.country}</span>
      </div>
      <span className="card--title">{props.title}</span>
      <span className="card--price">
        <strong>From ${props.price}</strong> / person
      </span>
    </div>
  )
}

export default Card
