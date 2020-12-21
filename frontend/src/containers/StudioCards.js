import React from 'react'
import { connect } from 'react-redux'
import StudioCard from '../components/StudioCard'

const StudioCards = (props) => {
  console.log(props.studios)
  return(
  <div className="cards">
    {props.studios.map(studio => <StudioCard key={studio.id} {...studio} />)}
  </div>
  )
}

const mapStateToProps = (state) => ({
  studios: state.studios.studios
})

export default connect(mapStateToProps)(StudioCards)