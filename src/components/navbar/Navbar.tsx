import React, {useState, useEffect} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar({}) {




const styles = {
  navContainer: "",
  navName: "",
  navIcon: "",
  navLink: "",

}



const handleClick = () => {
 
}


    return (

      
      <nav className={styles.navContainer}>
        <h1 className={styles.navName}>Guild of Finance</h1>
        <div className={styles.navIcon}>

        </div>
        <ul>
          <li className={styles.navLink}> {/* home */}
            <Link to = "/">
            
            </Link>
          </li>
          <li className={styles.navLink}> {/* book */}
            <Link to = "/book">
            
            </Link>
          </li>
          <li className={styles.navLink}> {/* about */}
            <Link to = "/about">
            
            </Link>
          </li>
          <li className={styles.navLink}> {/* author */}
            <Link to = "/author">
            
            </Link>
          </li>
        </ul>

      </nav>
    
    )

}


