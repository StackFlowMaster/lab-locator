import React from 'react';
import { Link } from 'react-router-dom';

const StudioCard = ({id, image_url, name, hourly_rate}) => {
  return (
    <div className="card">
      <img src={image_url} alt={name}/><br/>
      <div className="text-block">
        <h4>${hourly_rate}/hr</h4>
      </div>
      <p><Link to={`/studios/${id}`}>{name}</Link></p>
    </div>
  )
}

export default StudioCard