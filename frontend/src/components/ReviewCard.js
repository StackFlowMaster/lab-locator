import React from 'react'

const ReviewCard = (props) => {
    const { username, content, rating } = props
    return (
        <div className="review">
            <p>{rating}/5</p>
            <p>{content}</p>
            <p>-{username}</p>
        </div>
    )
}

export default ReviewCard