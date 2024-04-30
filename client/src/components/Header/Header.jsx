import React from "react";
import logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import classes from "./Header.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LowerHeader from "./lowerHeader";
function Header() {
  return (
    <>
      <section>
     
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <a href="">
              <img className={classes.img_logo} src={logo} alt="" />
            </a>
            <span></span>
            <div className={classes.delivery}>
              <GrLocation />
              <div>
                <p>Delivery to</p>

                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" placeholder="search product" />
            <div className={classes.searchIcon}><IoIosSearch /></div>
            
          </div>
          <div className={classes.account}>
            <div className={classes.language}>
              <img
                className={classes.img_flag}
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>
            <div>
              <p>Hello, sign in</p>
              <select name="" id="">
                <option value="">Account & Lists </option>
              </select>
            </div>
            <div>
              <p style={{fontSize:13}}>
                Returns <br /> <b>& Orders</b>
              </p>
            </div>
            <div>
              {/* icon */}
              <p>
                <b>Cart</b>
              </p>
            </div>
          </div>
        </div>
      
      </section>
      <LowerHeader/>
   
    </>
  );
}

export default Header;
