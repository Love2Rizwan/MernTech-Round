import React from 'react'
import "./Container.css"
import Form from './Form'
import image from "../image/143Hayat.jpg"


const Container = () => {
  return (
    <div className="container">
        <img className="image"  src={image} alt="" />
      <div className="right-container"></div>
      <Form />
    </div>
  );
}

export default Container