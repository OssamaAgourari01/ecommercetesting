import React from 'react'
import './avis.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStarSharp } from "react-icons/io5";
import { LiaStarHalf } from "react-icons/lia";
import Slider from "react-slick";

const Avis = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className='main-slider'>
        <h1>Some Clients Reviews</h1>
        <Slider className='user-slider' {...settings}>
            <div className='slid-card'>
                <img src='/Users/user1.jpg'/>
                <div className='body'>
                    <h2>Beniamin taha</h2>
                    <b><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></b>
                    <p>I couldnt beleive such a company exixts i really love everything about thuis sit</p>
                </div>
            </div>
            <div className='slid-card'>
                <img src='/Users/user2.jpg'/>
                <div className='body'>
                    <h2>Hohemed ali</h2>
                    <b><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><LiaStarHalf/></b>
                    <p>I couldnt beleive such a company exixts i really love everything about thuis sit</p>
                </div>
            </div>
            <div className='slid-card'>
                <img src='/Users/user3.jpg'/>
                <div className='body'>
                    <h2>Karina kappor</h2>
                    <b><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></b>
                    <p>I couldnt beleive such a company exixts i really love everything about thuis sit</p>
                </div>
            </div>
            <div className='slid-card'>
                <img src='/Users/user4.jpg'/>
                <div className='body'>
                    <h2>Anochka charma</h2>
                    <b><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></b>
                    <p>I couldnt beleive such a company exixts i really love everything about thuis sit</p>
                </div>
            </div>
            <div className='slid-card'>
                <img src='/Users/user5.jpg'/>
                <div className='body'>
                    <h2>Alisha karma</h2>
                    <b><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><LiaStarHalf/></b>
                    <p>I couldnt beleive such a company exixts i really love everything about thuis sit</p>
                </div>
            </div>
            <div className='slid-card'>
                <img src='/Users/user6.jpg'/>
                <div className='body'>
                    <h2>Depica padokon</h2>
                    <b><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></b>
                    <p>I couldnt beleive such a company exixts i really love everything about thuis sit</p>
                </div>
            </div>
        </Slider>
      
    </div>
  )
}

export default Avis
