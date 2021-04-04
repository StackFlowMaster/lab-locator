import { handleFiltersFormChange } from '../redux/studioActions'
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {

  const search = useSelector(state => state.studios.filtersForm.search);
  const sorted = useSelector(state => state.studios.filtersForm.sorted);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(handleFiltersFormChange(e));
  }

  return(
    <form>
      <label>
        Search:
        <input type="text" name="search" value={ search } onChange={ handleFilterChange } />
      </label><br/>
      <label>
        Sort By Price:
        <input
          type="checkbox"
          name="sorted"
          checked={ sorted }
          onChange={ handleFilterChange } />
      </label><br/>
    </form>
  );
}

export default Filter