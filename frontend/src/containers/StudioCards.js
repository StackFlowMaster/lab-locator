import React from 'react'
import { connect } from 'react-redux'
import StudioCard from '../components/StudioCard'
import Filter from '../components/Filter'

const StudioCards = (props) => {

  const searchedStudios = props.studios.filter(studio => studio.name.toLowerCase().includes(props.search.toLowerCase()));
  const sortedStudios = props.sorted ? searchedStudios.sort((s1, s2) => (s1.hourlyRate - s2.hourlyRate)) : searchedStudios

  return(
    <>
      <Filter />
      <div className="cards">
        { sortedStudios.map(studio => <StudioCard key={studio.id} {...studio} />) }
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  studios: state.studios.studios,
  ...state.studios.filtersForm
})

export default connect(mapStateToProps)(StudioCards)