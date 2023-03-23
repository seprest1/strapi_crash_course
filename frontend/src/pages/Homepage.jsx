import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

const Homepage = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  
  console.log(data);

  return (
    <div>
      {data && data.map(review => 
        <div key={review.id} className="review-card">
          <h2>{review.attributes.title}</h2> 
          <div className="rating">Rating: {review.attributes.rating}</div>
          {/* <small>console list</small> */}
          <p>{review.attributes.body}</p>
          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
        )}
    </div>
  )
}

export default Homepage;