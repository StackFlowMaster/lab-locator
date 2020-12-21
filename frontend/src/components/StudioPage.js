import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedStudio } from '../redux/actions'

class StudioPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.setSelectedStudio(id)
    }

    render() {
        return(
            <h1>
                Studio Page Here
            </h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.studios.selectedStudio
})

export default connect(mapStateToProps, { setSelectedStudio })(StudioPage)