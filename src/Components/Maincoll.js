import React, { useEffect, useState } from 'react'
import data from './data'
import { Link, useLocation, useParams } from 'react-router-dom'
import './maincoll.css'
import { FaArrowRight } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Favorite from './Pages/Favorite';


const Maincoll = (props) => {
    const { categorie } = useParams('categorie')
    const [curCategorie, setCurCategorie] = useState([])
    const [feature, setFeature] = useState("new")
    const [filtred, setFiltred] = useState([])
    useEffect(() => {
        const cat = data.filter(item => item.categorie == categorie)
        setCurCategorie(cat)
    }, [categorie])
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const filtering = (x)=>{
        setFeature(x)
        
        if (x ==  "all"){
            const all = data.filter(item => item.categorie == categorie)
            setCurCategorie(all)
        }else{
            const featur = data.filter(item => item.type == x && item.categorie == categorie)
            setFiltred(featur)
        setCurCategorie(featur)
        }
        
    }
    const handlefav = (ids)=>{
        const filtered = data.filter((ele)=>ele.id == ids)
        props.setFavorite([...props.favorite ,filtered])
    }
    
    return (
        <div className='coll-div'>
            <h1>{categorie}s categorie</h1>
            <ul>
                <li><button onClick={()=>filtering("all")}>All {categorie}s</button></li>
                <li><button onClick={()=>filtering("new")}>New Arrival</button></li>
                <li><button onClick={()=>filtering("top")}>Top Selling</button></li>
                <li><button onClick={()=>filtering("featured")}>Featured</button></li>
                <li><button onClick={()=>filtering("trending")}>Trending</button></li>
            </ul>
            <div className='parent'>
                {curCategorie.map(ele => (
                    <div className='child' key={ele.id}>
                        
                        <Link to={`/${categorie}/${ele.id}`}><img src={ele.src} /></Link>
                        <h2>{ele.name}</h2>
                        <span>{ele.stars}<IoStarSharp/> - <b>{ele.price} MDH</b> </span>
                        <Link to={`/${categorie}/${ele.id}`}><button className='btn'>Show Product <FaArrowRight/></button></Link>
                        <button className='btn' onClick={()=>handlefav(ele.id)}>Favorite <FaHeart/></button>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Maincoll
