import React from 'react'

export const RepoCard = (props) => {

  const {name, description, created_at, html_url} = props.repo 

  return(
    <div class="timeline-item">
      <div class="timeline-img"></div>

      <div class="timeline-content js--fadeInLeft">
        <h2>{name}</h2>
        <div class="date">{created_at}</div>
        <p>{description}</p>
        <a class="bnt-more" href={html_url}>More</a>
      </div>
    </div> 
  )

}