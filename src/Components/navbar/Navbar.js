import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser} from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react"
import {Link} from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

import './nav.css'
const Navbar = ({search, setSearch, searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
    <div className='header'>
        <div className='top_header'>
            <div className='icon'>
                <MdLocalShipping />
            </div>
            <div className='info'>
                <p>التوصيل مجانا لجميع المدن المغربية الكبيرة</p>
            </div>
        </div>
        <div className='mid_header'>
          <div className='logo'>
            <Link to='/'><img src='abirlogo/logolong.png' alt='logo' width={120}/></Link>
          </div>
          <div className='search_box'>
            <input type='text' value={search} placeholder='searh' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchproduct}><AiOutlineSearch /></button>
          </div>
          <div>
            <Link to='/cart' className='btn btn-success'><FaCartShopping/></Link>
            <Link to='/favorites' className='btn btn-success mx-2'><FaHeart/></Link>
          </div>
          {
            isAuthenticated ?    
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          :
          <div className='user'>
            <div className='icon'>
              <FiLogIn />
            </div>
            <div className='btn'>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
          }
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {
              isAuthenticated ?
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <p>Please Login</p>
              </div>
              </>
            }
          </div>
          <div className='nav'>
            <ul>
              <li><Link to='/produit/face' className='link'>FACE</Link></li>
              <li><Link to='/produit/make-up' className='link'>MAKE-UP</Link></li>
              <li><Link to='/produit/body' className='link'>BODY</Link></li>
              <li><Link to='/produit/hair' className='link'>HAIR</Link></li>
              <li><Link to='/produit/baby' className='link'>BABY MOM</Link></li>
              <li><Link to='/produit/health' className='link'>HEALTH</Link></li>
              <li><Link to='/produit/natural' className='link'>NATURAL</Link></li>
              <li><Link to='/produit/hygiene' className='link'>HYGIENE</Link></li>
              <li><Link to='/produit/solar' className='link'>SOLAR</Link></li>
            </ul>
          </div>
          <div className='offer'>
            <p>خصم % 10 للمنتجات الصحية</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar