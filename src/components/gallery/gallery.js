import React from 'react';
import { useSelector } from 'react-redux'
import {Image, Col } from 'react-bootstrap';
import Loader from '../Loader'
import './gallery.css'

function Gallery() {

  const dataImg = useSelector((state) => state.category.categoryImages)
  const loader = useSelector((state) => state.category.loader)

  if(loader) {
    return (<Loader />)
  }
  console.log({dataImg});
   
  return (
   <>
      {dataImg.map(imageObj => (
        <Col key={imageObj.id}><Image  src={imageObj.url} thumbnail width={imageObj.width} /> </Col>
      
        
      ))}
   </>
  );
}

export default Gallery;


