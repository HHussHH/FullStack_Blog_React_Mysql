import React from 'react'
import NotFoundImg from "../img/page400.gif"
const NotFound = () => {
  return (
  <div className="container">
     <div className='NotFound'>
    <h1>Sorry this page is not founded</h1>
    <img src={NotFoundImg} alt="" />
   </div>
  </div>    
  )
}

export default NotFound