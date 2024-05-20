import React, { useEffect, useState } from 'react'
import './nav.css'
import { MdLocalShipping } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { GiPositionMarker } from "react-icons/gi";
import { Link } from 'react-router-dom';
import data from '../data';

const Navbar = () => {
    const [open ,setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [categorie, setCategorie] = useState("clock")
    const [id, setId] = useState(-1)
    const handleSearch = (e)=>{
        setSearch(e)
        data.forEach(ele=>{
            if(e == ele.name.toLocaleLowerCase()){
                setCategorie(ele.categorie)
                setId(ele.id)
            }
        })
        if(categorie == ""){
            setCategorie("candle")
        }
        if(id == - 1){
            setId("")
        }
    }
    return (
        <div className='styc-menu'>
            <div className='top-header'>
                <div className='top-nav'>
                    <MdLocalShipping className='top-nav-icon' />
                    <p>Free shipping when shopping upto 1000$</p>
                </div>
            </div>
            
            <div className='bottom-nav'>
                <div className='logo'>
                    <Link to='/'><img src='logo-header.png' /></Link>
                </div>
                <div className={open ? 'open Search-box' : 'Search-box'}>
                    <input type='text' placeholder='Search for item' onChange={(e)=>handleSearch(e.target.value)}/>
                    <Link to={id == -1 ? `/${categorie}` : `/${categorie}/${id}`}><button><FaSearch /></button></Link>
                </div>
                <div className={open ? 'open nav-btn' : 'nav-btn'}>
                    <Link to='/login'><button onClick={()=>setOpen(!open)}><LuLogIn /></button></Link>
                    <Link to='/favorite'><button onClick={()=>setOpen(!open)}><FaHeart /></button></Link>
                    <Link to='/cart'><button onClick={()=>setOpen(!open)}><div className='cart-num'>0</div><FaShoppingCart /></button></Link>
                </div>
                <div className='menu-nav' onClick={()=>setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
             </div>
            </div>
        </div>
    )
}

export default Navbar
