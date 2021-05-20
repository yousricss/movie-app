import React from 'react'
import { Card,Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


const MovieCard = ({movie}) => {
    return (
        <Card style={{ width: '19rem' }} className="mx-4 my-3">
  <Card.Img variant="top" src={movie.posterurl } style={{height:"70%"}}/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    <ReactStars
    count={5}
    isHalf={true}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
  />,
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )
}

export default MovieCard
