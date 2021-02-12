import { connect } from 'react-redux'
import { handleFiltersFormChange } from '../redux/studioActions'

const Filter = (props) => {
    return(
        <form>
        <label>
          Search:
          <input type="text" name="search" value={ props.search } onChange={props.handleFiltersFormChange} />
        </label><br/>
        <label>
          Sort By Price:
          <input
            type="checkbox"
            name="sorted"
            checked={ props.sorted }
            onChange={ props.handleFiltersFormChange } />
        </label><br/>
      </form>
    )
}

const mapStateToProps = (state) => ({
    ...state.studios.filtersForm
})

export default connect(mapStateToProps, { handleFiltersFormChange })(Filter)