import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
    <div className={styles.navbar}>
      <div className="logo"><Link to={"/"}>Quotes</Link></div>
      <ul className={styles.ul}>
        <li className={styles.a}><Link to={"/"}>Home</Link></li>
        <li className={styles.a}><Link to={"/new"}>new</Link></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
