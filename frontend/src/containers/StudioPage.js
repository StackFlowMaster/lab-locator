import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import { setSelectedStudio, resetStudio } from '../redux/studioActions'

class StudioPage extends Component {

    componentDidMount(){
      const id = parseInt(this.props.match.params.id)
      // debugger
        this.props.setSelectedStudio(id)
    }

    componentWillUnmount(){
        this.props.resetStudio()
    }

    renderPage = () => {
      const { name, website, imageUrl, hourlyRate, location, history, reviews, id } = this.props
      return (
        <>
            <button className="back" onClick={ history.goBack }>⇠ Back</button>
            
            <div className="stu-container">
              <p><img src={ imageUrl } alt={ name }/></p>
              <div className="img-overlay">{ name }</div>
            </div>
            
            
            <button onClick={() => { window.open(website, "_blank") }}>Visit Website</button>
            <p>Hourly Rate: ${ hourlyRate }</p>
            <iframe title="GOOGLE MAPS"
              width="100%"
              height="450"
              frameBorder="0" style={{border: 0}}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDqTJjYr4F6Bz7iNGct8qDxq5gRHstt6Bo&q=${location.replace(/[ ,]+/g, "+")}`} allowFullScreen>
            </iframe>
            <div className="reviews">
            {this.props.user.id && <ReviewForm studio_id={id}/>}
              { reviews.map(review => <ReviewCard key={review.id} {...review} />)}
            </div>
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
    ...state.studios.selectedStudio,
    user: state.user
})

export default connect(mapStateToProps, { setSelectedStudio, resetStudio })(StudioPage)