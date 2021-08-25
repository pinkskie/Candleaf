/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from './MainPage.module.css'
import backImg from '../../assets/mainPage/bg-image.png'
import img1 from '../../assets/mainPage/spiced.png'
import img2 from '../../assets/mainPage/strawberry.png'
import img3 from '../../assets/mainPage/blueberries.png'
import img4 from '../../assets/mainPage/lemon.png'
import img5 from '../../assets/mainPage/product.png'
import img6 from '../../assets/mainPage/fragnant.png'
import img7 from '../../assets/mainPage/cherries.png'
import img8 from '../../assets/mainPage/lavander.png'
import checkmark from '../../assets/mainPage/checkmark.svg'
import heroImg from '../../assets/mainPage/image.png'
import { Button } from '../../components'
import Luisa from '../../assets/mainPage/bg.png'
import Edoardo from '../../assets/mainPage/bg-1.png'
import Mart from '../../assets/mainPage/bg-2.png'
import halfStars from '../../assets/mainPage/4.5stars.svg'
import Stars from '../../assets/mainPage/5stars.svg'

const products = [ 
    {id:1, src: img1, name: 'Spiced Mint' },
    {id:2, src: img2, name: 'Sweet Straweberry'},
    {id:3, src: img3, name: 'Cool Blueberries'},
    {id:4, src: img4, name: 'Juicy Lemon'},
    {id:5, src: img5, name: 'Product name'},
    {id:6, src: img6, name: 'Fragrant Cinnamon'},
    {id:7, src: img7, name: 'Summer Cherries'},
    {id:8, src: img8, name: 'Clean Lavander'}
]

const ceo = [
    {id:1, src: Luisa , quote: '“I love it! No more air fresheners”', name: 'Luisa'},
    {id:2, src: Edoardo , quote: '“Raccomended for everyone”', name: 'Edoardo'},
    {id:3, src: Mart , quote: '“Looks very natural, the smell is awesome”', name: 'Mart'}
]

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <div>
            <img src={backImg} alt='back'/>
            </div>
            {/* Products */}
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Products</h2>
                    <p>Order it for you or for your beloved ones </p>
                </div>
                <div className={styles.grid}>
                    {products.map(x => 
                    <div className={styles.content}>
                        <img src={x.src}/>
                        <div className={styles.content__title}>
                            <p className={styles.content__name}>{x.name}</p>
                            <p className={styles.content__cost}>9.99$</p>
                        </div>
                    </div>)}
                </div>
            </div>
            {/* Hero */}
            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.hero__wrapper}>
                        <div className={styles.hero__title}>
                            <h2>Clean and <br/>fragrant soy wax</h2>
                            <p>Made for your home and for your wellness</p>
                            <ul className={styles.hero__list}>
                                <li><img src={checkmark}/> <b>Eco-sustainable:</b>All recyclable materials, 0% CO2 emissions</li>
                                <li><img src={checkmark}/> <b>Hyphoallergenic:</b> 100% natural, human friendly ingredients </li>
                                <li><img src={checkmark}/> <b>brHandmade:</b> All candles are craftly made with love.</li>
                                <li><img src={checkmark}/> <b>brLong burning:</b> No more waste. Created for last long.</li>
                            </ul>
                            <Button value={'Learn more'}/>
                        </div>
                        <img src={heroImg} alt="bg"/>
                    </div>
                </div>
            </div>
            {/* Testimonials */}
            <div className={styles.testimonials__wrapper}>
                <div className={styles.testimonials__title}>
                    <h2>Testimonials</h2>
                    <p>Some quotes from our happy customers</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.testimonials__ceo}>
                        {ceo.map(x => 
                            <div className={styles.testimonials__content}>
                                <img src={x.src}/>
                                <img src={Stars}/>
                                <p>{x.quote}</p>
                                <span>{x.name}</span>
                            </div>
                            )}
                    </div>
                </div>
            </div>
            {/* Popular */}
            <div className={styles.popular}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h2>Popular</h2>
                        <p>Our top selling product that you may like</p>
                        <div className={styles.grid}>
                            {products.slice(0,4).map(x => 
                            <div className={styles.content}>
                                <img src={x.src}/>
                                <div className={styles.content__title}>
                                    <p className={styles.content__name}>{x.name}</p>
                                    <p className={styles.content__cost}>9.99$</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MainPage;