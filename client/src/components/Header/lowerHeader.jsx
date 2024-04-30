import React from 'react'
import { IoIosMenu } from "react-icons/io";
import classes from "./Header.module.css";
function lowerHeader() {
  return (
    <div className={classes.lower_nave}>
        <ul>
          <li><IoIosMenu /><p>All</p></li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Register</li>
          <li>Gift Cards</li>
          <li>Sells</li>
        </ul>
    </div>
  )
}

export default lowerHeader