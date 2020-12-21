import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedStudio, resetStudio } from '../redux/actions'

class StudioPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.setSelectedStudio(id)
    }

    componentWillUnmount(){
        this.props.resetStudio()
    }

    renderPage = () => {
        const { name, website, imageUrl, hourlyRate, location, history} = this.props
        return (
          <>
            <h1><a href={ website }>{ name }</a></h1>
            <button onClick={ history.goBack }>←</button>
            <p><img src={ imageUrl } alt={ name }/></p>
            <p>Hourly Rate: ${ hourlyRate }</p>
            {/* <p>{ location.replace(/,/g, ", ") }</p> */}
            <iframe title="GOOGLE MAPS"
              width="600"
              height="450"
              frameBorder="0" style={{border: 0}}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDqTJjYr4F6Bz7iNGct8qDxq5gRHstt6Bo&q=${location.replace(/[ ,]+/g, "+")}`} allowFullScreen>
            </iframe>
          </>
        )
      }

    renderSpinner = () => <div className="loader"></div>

    render() {
        return(
            <div className="show">
                {this.props.id ? this.renderPage() : this.renderSpinner()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.studios.selectedStudio
})

export default connect(mapStateToProps, { setSelectedStudio, resetStudio })(StudioPage)