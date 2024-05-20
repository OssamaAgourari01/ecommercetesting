import React, { useEffect } from 'react'
import './favorite.css'
import { Link } from 'react-router-dom'

const Favorite = (props) => {
   
  return (
    <div className='fav-header'>
      {
      props.favlist.map(ele=>(
        <div className='row fav-parent'>
            <div className='fav-child col-2'>
                <img src={ele.src}/>
            </div>
            <div className='fav-child col-9'>
                <h1>{ele.name}</h1>
                <h2>{ele.categorie}</h2>
                <b>price : {ele.price}MDH</b><br></br>
                <Link to={`/${ele.categorie}/${ele.id}`}><button className='btn'>Show Product</button></Link>
                <Link to={`/${ele.categorie}/${ele.id}`}><button className='btn'>Add to cart</button></Link>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Favorite
