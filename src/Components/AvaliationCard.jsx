import React from 'react'
import 

function AvaliationCard({title, description, rating, date}) {
  
  return (
    <div>
      <p><img src="star" alt="stars" />{rating}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{date}</span>
    </div>
  )
}

export default AvaliationCard