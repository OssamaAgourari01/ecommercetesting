import React, { useEffect, useState } from 'react'
import './collect.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import data from '../data';
import { Link } from 'react-router-dom';

const Collect = () => {
    const [newCategorie, setNewCategorie] = useState([])
    const [topCategorie, setTopCategorie] = useState([])
    const [featuredCategorie, setFeaturedCategorie] = useState([])
    const [trendingCategorie, setTrendingCategorie] = useState([])
    useEffect(() => {
        const coll1 = data.filter(col => col.type == "new")
        setNewCategorie(coll1)
        const coll2 = data.filter(col => col.type == "featured")
        setFeaturedCategorie(coll2)
        const coll3 = data.filter(col => col.type == "top")
        setTopCategorie(coll3)
        const coll4 = data.filter(col => col.type == "trending")
        setTrendingCategorie(coll4)

    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='similar'>
                <h1 className='h'>Featured Articles</h1>
                <Slider className=' slider' {...settings}>
                    {featuredCategorie.map(cur => (
                        <div className=' cards'>
                            <Link to={`/${cur.categorie}/${cur.id}`}><img src={`/${cur.src}`} /></Link>
                            <div className='info'>
                                <h2>{cur.name}</h2>
                                <span>{cur.price} " MDH"</span>
                            </div>
                        </div>
                    )).slice(1, 9)}
                </Slider>
            </div>
            <div className='similar'>
                <h1>Top selling Articles</h1>
                <Slider className='slider' {...settings}>
                    {topCategorie.map(cur => (
                        <div className='cards'>
                            <Link to={`/${cur.categorie}/${cur.id}`}><img src={`/${cur.src}`} /></Link>
                            <div className='info'>
                                <h2>{cur.name}</h2>
                                <span>{cur.price} " MDH"</span>
                            </div>
                        </div>
                    )).slice(1, 9)}
                </Slider>
            </div>
            <div className='similar'>
                <h1>Trending Articles</h1>
                <Slider className='slider' {...settings}>
                    {trendingCategorie.map(cur => (
                        <div className='cards'>
                            <Link to={`/${cur.categorie}/${cur.id}`}><img src={`/${cur.src}`} /></Link>
                            <div className='info'>
                                <h2>{cur.name}</h2>
                                <span>{cur.price} " MDH"</span>
                            </div>
                        </div>
                    )).slice(1, 9)}
                </Slider>
            </div>
            <div className='similar'>
                <h1>Newest Articles</h1>
                <Slider className='slider' {...settings}>
                    {newCategorie.map(cur => (
                        <div className='cards'>
                            <Link to={`/${cur.categorie}/${cur.id}`}><img src={`/${cur.src}`} /></Link>
                            <div className='info'>
                                <h2>{cur.name}</h2>
                                <span>{cur.price} " MDH"</span>
                            </div>
                        </div>
                    )).slice(1, 9)}
                </Slider>
            </div>
        </div>

    )
}

export default Collect
