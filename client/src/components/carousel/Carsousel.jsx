import React from 'react'
import {img} from './img/data'
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css'

function Carsousel() {
  return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}

        >
           {
            img.map((imgItemLink)=>{
                return(
                    <div>
                        <img src={imgItemLink} />
                    </div>
                )
            })
           }

        </Carousel>
        <div className={classes.car_img}></div>
    </div>
  )
}

export default Carsousel