import React from 'react';
import StudioCard from '../components/StudioCard';
import Filter from '../components/Filter';
import { useSelector } from 'react-redux';

const StudioCards = () => {

  const studios = useSelector(state => state.studios.studios);
  const sorted = useSelector(state => state.studios.filtersForm.sorted);
  const search = useSelector(state => state.studios.filtersForm.search);

  const searchedStudios = studios.filter(studio => studio.name.toLowerCase().includes(search.toLowerCase()));
  const sortedStudios = sorted ? searchedStudios.sort((s1, s2) => (s1.hourlyRate - s2.hourlyRate)) : searchedStudios;

  return (
    <>
      <Filter />
      <div className="cards">
        { sortedStudios.map(studio => <StudioCard key={studio.id} {...studio} />) }
      </div>
    </>
  );
}

export default StudioCards;