import React from 'react'
import './collection.css';
import data from '../data'
import { Link } from 'react-router-dom'

const Collections = () => {
  return (
    <div className='collec'>
            <h3 className='head'>Découvrez des articles qui vont vous plaire. Soutenez des créateurs indépendants</h3>
            <div className='cate'>
                <div className='cat'>
                    <Link to='/candle'><img className='catimg' src={data[1].src} /></Link>
                    <span>Candles</span>
                </div>
                <div className='cat'>
                    <Link to='/clock'><img className='catimg' src='Assets/clock/clock (1).webp' /></Link>
                    <span>Clocks</span>
                </div>
                <div className='cat'>
                    <Link to='/lamp'><img className='catimg' src='Assets/lamps/lamp (2).jpg' /></Link>
                    <span>Lampes</span>
                </div>
                <div className='cat'>
                    <Link to='/mirror'><img className='catimg' src='Assets/mirror/mirror (3).webp' /></Link>
                    <span>Mirrors</span>
                </div>
                <div className='cat'>
                    <Link to='/plant'><img className='catimg' src='Assets/plants/plants (1).webp' /></Link>
                    <span>Plantes</span>
                </div>
                <div className='cat'>
                    <Link to='/shelf'><img className='catimg' src='Assets/shelf/shelf (3).webp' /></Link>
                    <span>Shelves</span>
                </div>
            </div>
        </div>
  )
}

export default Collections
