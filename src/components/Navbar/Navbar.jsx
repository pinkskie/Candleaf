/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/nav/logo.svg'
import dropdown from '../../assets/nav/dropdown.svg'
import human from '../../assets/nav/human.svg'
import buy from '../../assets/nav/buy.svg'


const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <a href="/"><img src={logo} alt='logo'/></a>
                <div className={styles.links}>
                    <a href="#">Discovery <img src={dropdown} alt='dropdown'/></a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className={styles.vectors}>
                    <img src={human} alt='human'/>
                    <img src={buy} alt='buy'/>
                </div>
            </nav>
                <hr className={styles.divider}/>
        </div>
    )
}

export default Navbar;