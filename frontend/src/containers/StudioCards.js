import React from 'react';
import StudioCard from '../components/StudioCard';
import Filter from '../components/Filter';
import 'semantic-ui-css/semantic.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'semantic-ui-react';

const StudioCards = () => {

  const studios = useSelector(state => state.studios.studios.paginated_studios);
  const sorted = useSelector(state => state.studios.filtersForm.sorted);
  const search = useSelector(state => state.studios.filtersForm.search);
  const page = useSelector(state => state.studios.studios.page);
  const pages = useSelector(state => state.studios.studios.page_count);
  const dispatch = useDispatch();

  const searchedStudios = studios.filter(studio => studio.name.toLowerCase().includes(search.toLowerCase()));
  const sortedStudios = sorted ? searchedStudios.sort((s1, s2) => (s1.hourlyRate - s2.hourlyRate)) : searchedStudios;

  const handlePage = (e, { activePage }) => {
    let goToPage = { activePage };
    let pageNum = goToPage.activePage;
    let pageString = pageNum.toString();
    const url = "http://localhost:3000/studios/?page=" + pageString;
    fetch(url).then(res => res.json()).then(data => dispatch({
      type: "SET_STUDIOS",
      payload: data
    }));
  }

  return (
    <>
      <Filter />
      <div className="cards">
        { sortedStudios.map(studio => <StudioCard key={studio.id} {...studio} />) }
      </div>
      <Pagination
        onPageChange={handlePage}
        size="mini"
        siblingRange="1"
        defaultActivePage={page}
        totalPages={pages}
      />
    </>
  );
}

export default StudioCards;