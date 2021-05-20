import React from 'react'
import { Form, FormControl, Navbar } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


const Filter = ({handleChange,title,ratingChange,rate}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" style={{fontSize:"30px" , color:"red"}}>Netflix</Navbar.Brand>
    <Form inline>
      <FormControl type="text" 
      placeholder="Search" className="mr-sm-2" 
      onChange={handleChange}
      value={title}

      />
    </Form>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={30}
    activeColor="#ffd700"
    isHalf={true}
  />,
  </Navbar>
    )
}

export default Filter
