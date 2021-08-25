import React from 'react'
import styles from './Footer.module.css'
import footerLogo from '../../assets/footer/footerlogo.svg'
const Footer = () => {
    return (
        <div className={styles.footer__wrapper}>
            <div className={styles.container}>
                <div className={styles.divider}></div>
                <div className={styles.footer__content}>
                    <div className={styles.footer__title}>
                        <img src={footerLogo} alt="logo"/>
                        <p>Your natural candle made for your home and for your wellness.</p>
                    </div>
                    <div className={styles.footer__links}>
                        <div>
                            <p>Discovery</p>
                            <ul>
                                <li><a href="#">New season</a></li>
                                <li><a href="#">Most searched</a></li>
                                <li><a href="#">Most selled</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>About</p>
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Affiliate</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>Info</p>
                            <ul>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Privacy Policies</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;