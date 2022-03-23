import React from 'react'
import classes from './special.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import 'slick-carousel/slick/slick-theme.css';
import specialProduct from './data';
import {FaHeart, FaShoppingCart, FaSearch, FaShoppingBag} from 'react-icons/fa';

const Special = () => {

    let settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:1,
        cssEase: "linear"
    }

  return (
    <div className={classes.container}>
        <div className={classes.header}>
            <h1 className={classes.title}>Spesial untuk hari ini</h1>
            <h3 className={classes.subtitle}>Harga istimewa dari kami untuk kamu</h3>
        </div>
            <Slider {...settings}>

                {specialProduct.map((item, index) => (
                    <div className={classes.wrapper}>
                <div className={classes.card}>
                    <span className={classes.badges}>{item.badges}</span>
                    <div className={classes.img_card}>
                    <img src={process.env.PUBLIC_URL + `/produk/produk${index + 1}.jpg`} alt={item.name} />
                    </div>
                    <div className={classes.info_details}>
                        <h3 className={classes.title_product}>{item.name}</h3>
                        <h2 className={classes.price}>Rp. {item.price}</h2>
                    </div>
                    <div className={classes.action}>
                        <button className={classes.btn_order}><FaShoppingBag/></button>
                        <button className={classes.btn_cart}><FaShoppingCart/></button>
                    </div>
                </div>
                 </div>
                ))}
            </Slider>
    </div>
  )
}

export default Special