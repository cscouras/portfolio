import React from 'react'

const Card = props => {
  return (
    <div className="card">
      <h3 className="card-title"><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
      <a href={props.link}><img className='thumbnail' src={props.imgsrc} alt={props.title} /></a>
        <div className="langList">
          {props.languages.map(lang => {
            return (
              <p key={lang}>{lang}</p>
            )
          })}
        </div>
    </div>
)}

 export default Card
