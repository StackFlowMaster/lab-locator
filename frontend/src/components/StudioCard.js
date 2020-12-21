import React from 'react'

const StudioCard = (props) => {
  // debugger
  const {imageUrl, name, hourlyRate} = props
  return (
    <div className="card">
      <img src={imageUrl} alt={name}/><br/>
      <div className="text-block">
        <h4>${hourlyRate}/hr</h4>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default StudioCard