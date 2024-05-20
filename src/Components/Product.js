import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import data from './data'
import './product.css'
import { IoStarSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Product = () => {
  const { id } = useParams('id')
  const { categorie } = useParams('categorie')
  const [produit, setProduit] = useState({})
  const [curCategorie, setCurCategorie] = useState([])
  const [curCategoriedf, setCurCategoriedf] = useState([])
  useEffect(() => {
    const product = data.find(p => p.id == id)
    setProduit(product)
    const cat = data.filter(item => item.categorie == categorie)
    const catdf = data.filter(item => item.categorie != categorie)
    setCurCategorie(cat)
    setCurCategoriedf(catdf)
  }, [id,categorie])
  const event = (e)=>{
    e.preventDefault()
  }
  const slide1 = curCategorie.map((cur)=>({image : '/'+cur.src , title : cur.name , description : cur.price + " MDH",clickEvent : event})).slice(1,9)
  const slides = curCategoriedf.map((cur)=>({image : '/'+cur.src , title : cur.name , description : cur.price + " MDH"})).slice(1,12)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <div>
      <div className='product'>
        <img src={`/${produit.src}`}/>
        <div className='side-info'>
          <h1>{produit.name}</h1>
          <h2>{categorie}</h2>
          <span>Stars : {produit.stars} <IoStarSharp /></span><br />
          <span>Price : <b>{produit.price} MDH</b></span><br />
          <h3>Description</h3>
          <p>{produit.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='similar'>
        <h1>Similar Articles</h1>
      <Slider className='slider' {...settings}>
        {curCategorie.map(cur=>(
          <div className='cards'>
            <Link to={`/${cur.categorie}/${cur.id}`}><img src={`/${cur.src}`}/></Link>
            <div>
              <h2>{cur.name}</h2>
              <span>{cur.price} " MDH"</span>
            </div>
          </div>
        )).slice(1,9)}
      </Slider>
      </div>
      <div className='similar'>
        <h1>Defferante Articles</h1>
      <Slider className='slider'  {...settings}>
        {curCategoriedf.map(cur=>(
          <div className='cards'>
            <Link to={`/${cur.categorie}/${cur.id}`}><img src={`/${cur.src}`}/></Link>
            <div>
              <h2>{cur.name}</h2>
              <span>{cur.price} " MDH"</span>
            </div>
          </div>
        )).slice(1,11)}
      </Slider>
      </div>
    </div>
  )
}

export default Product
