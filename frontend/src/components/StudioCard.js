import React from 'react';
import { Link } from 'react-router-dom';

const StudioCard = ({id, imageUrl, name, hourlyRate}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name}/><br/>
      <div className="text-block">
        <h4>${hourlyRate}/hr</h4>
      </div>
      <p><Link to={`/studios/${id}`}>{name}</Link></p>
    </div>
  )
}

export default StudioCard