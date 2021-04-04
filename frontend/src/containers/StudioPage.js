import React, { useEffect } from 'react';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';
import { setSelectedStudio, resetStudio } from '../redux/studioActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const StudioPage = ({ match }) => {

  const studio = useSelector(state => state.studios.selectedStudio);
  const userId = useSelector(state => state.user.id);
  const name = studio.name;
  const website = studio.website;
  const imageUrl = studio.imageUrl;
  const hourlyRate = studio.hourlyRate;
  const location = studio.location;
  const reviews = studio.reviews;
  const id = studio.id;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const id = parseInt(match.params.id);
    dispatch(setSelectedStudio(id));
    
    return () => {
      dispatch(resetStudio());
    };
  }, []);
  
  const renderPage = () => {

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
        {userId && <ReviewForm studio_id={id}/>}
          { reviews.map(review => <ReviewCard key={review.id} {...review} />)}
        </div>
      </>
    )
  }
      
  const renderSpinner = () => <div className="loader"></div>
    
  return (
    <div className="show">
          {id ? renderPage() : renderSpinner()}
    </div>
  )
}

export default StudioPage;